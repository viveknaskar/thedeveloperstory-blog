---
title: "Exporting data from Storage to Memorystore using Cloud Dataflow"
description: "Recently, I got a chance to do an R&amp;D on a requirement where I would need to read files stored in a Cloud Storage bucket, which would be processed and transformed in the desired format and stored in an in-memory data store, i.e., Memorystore for faster access. Well, honestly, it took several days to figure [&hellip;]"
pubDate: 2020-08-30
heroImage: "/blog-images/wp-dataflow-feature.jpg"
categories: ["Google Cloud Platform"]
tags: ["cloud-dataflow","cloud-storage","cloudcomputing","gcp","memorystore","redis"]
---

Recently, I got a chance to do an R&D on a requirement where I would need to read files stored in a Cloud Storage bucket, which would be processed and transformed in the desired format and stored in an in-memory data store, i.e., Memorystore for faster access. Well, honestly, it took several days to figure out the correct approach before finding the correct technologies to implement this.

One of the best services in Google Cloud Platform that I have worked and experimented with is [**Cloud Dataflow**](https://thedeveloperstory.com/2020/07/24/cloud-dataflow-a-unified-model-for-batch-and-streaming-data-processing/) which is a fully-managed service to execute pipelines within the Google Cloud Platform ecosystem. It is a service which is fully dedicated to transforming and enriching data in stream (real time) and batch (historical) modes. It takes a serverless approach where users can focus on programming instead of managing server clusters, can be integrated with [Operations (formerly Stackdriver)](https://cloud.google.com/products/operations), which lets you monitor and troubleshoot pipelines as they are running.

![](https://thedeveloperstory.files.wordpress.com/2020/08/dataflow.jpg?w=750)

Photo by [Pietro Jeng](https://unsplash.com/@pietrozj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/data?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

**[Memorystore](https://cloud.google.com/memorystore/docs/redis/redis-overview)** is Google’s implementation of Redis data store with reduced latency but high scalability. Well, caching is a technique used to accelerate application response times and help applications scale by placing frequently needed data very close to the application. Memorystore for Redis provides a fully-managed service that is powered by the Redis in-memory data store to build application caches that provide sub-millisecond data access.

## Prerequisites

Before creating our dataflow pipeline for the implementation, we would require to do 3 things:

*   **Create two GCS buckets**

GCS buckets are required for storing the input file(s) which will be read, transformed and then stored in the Redis data store and the other bucket is required for staging the dataflow pipeline code.

![](https://thedeveloperstory.files.wordpress.com/2020/08/buckets.png?w=1024)

You can give any names to your buckets

If you are not familiar with the creation of buckets, refer to this [GCS documentation](https://cloud.google.com/storage/docs).

*   **Create a Redis Instance**

Memorystore (for Redis) instance is required for our implementation to store the processed data after the cloud dataflow pipeline is executed.

![](https://thedeveloperstory.files.wordpress.com/2020/08/memorystore.png?w=1024)

You can give any name to your Redis instance (it won’t matter as we will be using the ip-address only)

The IP Address (Redis Host) is required to be provided in the command-line for executing the dataflow pipeline. If you are not familiar with the creation of memorystore, refer to this [Memorystore documentation](https://cloud.google.com/memorystore/docs/redis/redis-overview).

*   **Upload the input file in the GCS bucket**

For the dataflow pipeline to be executed, an input file is needed to be uploaded in the GCS bucket for input, for our case, its `**cloud-dataflow-input-bucket**` for our case.

![](https://thedeveloperstory.files.wordpress.com/2020/08/input-file-uploaded.png?w=1024)

The input file is uploaded in the bucket before

The input file would have the data with “pipe” separator and is of the form: `**guid|firstname|lastname|dob|postalcode**`

The input file can be accessed from [here](https://raw.githubusercontent.com/viveknaskar/cloud-dataflow-with-memorystore/a33a788e37909d3c4e7a79aea9186497ad8bd5d3/dataflow-redis-input.txt).

## What the dataflow pipeline will do?

The idea is that the input file will be read, transformed and stored into a running redis data-store instance.

The transformation step of the pipeline will split the data from the input file and then store it with _corresponding keys in the data-store along with the guid_.

For example, if the input file is `**xxxxxx|bruce|wayne|31051989|4444**` where `**xxxxxx**` is the _guid_, `**bruce**` is the _firstname_, `**wayne**` is the _lastname_, `**31051989**` is the _dob (in DDMMYYYY format)_ and `**4444**` is the _postalcode_.

The pipeline will store the transformed data in the Redis instance like below:

`**firstname:bruce xxxxxx**`

`**lastname:wayne xxxxxx**`

`**dob:31051989 xxxxxx**`

`**postalcode:4444 xxxxxx**`

## Creating the dataflow pipeline

We would create a template from the scratch and obviously, we referred and understood the core concepts from this [documentation](https://cloud.google.com/dataflow/docs/guides/templates/overview). We would be creating a dataflow batch job and for that, we would have to use Dataflow SDK 2.x and Apache Beam SDK for Redis.

```
`<dependency>     <groupId>com.google.cloud.dataflow</groupId>     <artifactId>google-cloud-dataflow-java-sdk-all</artifactId>     <version>2.5.0</version> </dependency> <dependency>     <groupId>org.apache.beam</groupId>     <artifactId>beam-sdks-java-io-redis</artifactId>     <version>2.23.0</version> </dependency>`

```

For the pipeline code, we would have to construct StorageToRedisOptions (or give any name) object using the method PipelineOptionsFactory.fromArgs to read options from command-line.

**Main Class**

```
`public static void main(String[] args) {     _/**      * Constructed StorageToRedisOptions object using the method PipelineOptionsFactory.fromArgs to read options from command-line      */_     StorageToRedisOptions options = PipelineOptionsFactory._fromArgs_(args)             .withValidation()             .as(StorageToRedisOptions.class);      Pipeline p = Pipeline._create_(options);     p.apply("Reading Lines...", TextIO._read_().from(options.getInputFile()))             .apply("Transforming data...",                     ParDo._of_(new DoFn<String, String[]>() {                         @ProcessElement                         public void TransformData(@Element String line, OutputReceiver<String[]> out) {                             String[] fields = line.split("|");                             out.output(fields);                         }                     }))             .apply("Processing data...",                     ParDo._of_(new DoFn<String[], KV<String, String>>() {                         @ProcessElement                         public void ProcessData(@Element String[] fields, OutputReceiver<KV<String, String>> out) {                             if (fields[RedisIndex._GUID_.getValue()] != null) {                                  out.output(KV._of_("firstname:"                                         .concat(fields[RedisIndex._FIRSTNAME_.getValue()]), fields[RedisIndex._GUID_.getValue()]));                                  out.output(KV._of_("lastname:"                                         .concat(fields[RedisIndex._LASTNAME_.getValue()]), fields[RedisIndex._GUID_.getValue()]));                                  out.output(KV._of_("dob:"                                         .concat(fields[RedisIndex._DOB_.getValue()]), fields[RedisIndex._GUID_.getValue()]));                                  out.output(KV._of_("postalcode:"                                         .concat(fields[RedisIndex._POSTAL_CODE_.getValue()]), fields[RedisIndex._GUID_.getValue()]));                              }                         }                     }))             .apply("Writing field indexes into redis",             RedisIO._write_().withMethod(RedisIO.Write.Method._SADD_)                     .withEndpoint(options.getRedisHost(), options.getRedisPort()));     p.run();`
}
```

You can clone the complete code from this [GitHub repository](https://github.com/viveknaskar/cloud-dataflow-with-memorystore). You can also refer to this [documentation for designing your pipeline](https://beam.apache.org/documentation/programming-guide/#creating-a-pipeline).

## Executing the dataflow pipeline

We would have to execute the below command to create the dataflow template.

`mvn compile exec:java    -Dexec.mainClass=com.viveknaskar.DataFlowPipelineForMemStore    -Dexec.args="--project=your-project-id    --jobName=dataflow-memstore-job    --inputFile=gs://cloud-dataflow-input-bucket/*.txt    --redisHost=127.0.0.1    --stagingLocation=gs://dataflow-pipeline-batch-bucket/staging/    --dataflowJobFile=gs://dataflow-pipeline-batch-bucket/templates/dataflow-template    --gcpTempLocation=gs://dataflow-pipeline-batch-bucket/tmp/    --runner=DataflowRunner"`

Here,  
**_project:_** name-of-the-project-where-dataflow-pipeline-job-is-created,  
**_jobName:_** name-of-the-dataflow-pipeline,  
**_inputFile:_** bucket-where-the-input-file-is-read-by-the-pipeline,  
**_redisHost:_** ip-address-of-the-running-redis-instance,  
**_dataflowJobFile:_** bucket-where-the-dataflow-template-is-created,  
_**runner:**_ DataflowRunner (for running dataflow pipeline),  
**_stagingLocation, tempLocation_** also needs to be provided.

Once build is successful, the dataflow template would be created and a dataflow job would run.

![](https://thedeveloperstory.files.wordpress.com/2020/08/dataflow-job-successful.png?w=1024)

Dataflow job is created after the successful execution

The dataflow job is also represented in a graph summarizing about various stages of the pipeline. You can also check the logs.

![](https://thedeveloperstory.files.wordpress.com/2020/08/dataflow-pipeline-graph-1.png?w=737)

Graphical representational of the dataflow job

## Check the data inserted in Memorystore instance

For checking whether the processed data is stored in the Redis instance after the dataflow pipeline is executed successfully, you must first connect to the Redis instance from any Compute Engine VM instance located within the same project, region and network as the Redis instance.

1.  Create a VM instance and SSH to it
2.  Install telnet from apt-get in the VM instance

```
  sudo apt-get install telnet
```

3.  From the VM instance, connect to the ip-address of the Redis instance

```
  telnet instance-ip-address 6379
```

4.  Once you are in the redis, check the keys inserted

```
  keys *
```

5.  Check whether the data is inserted using the intersection command to get the guid

```
  sinter firstname:<firstname> lastname:<lastname> dob:<dob> postalcode:<post-code>
```

6.  Check with individual entry using the below command to get the guid

```
  smembers firstname:<firstname>
```

7.  Command to clear the Redis data store

```
  flushall
```

You can read more about Redis commands in this [documentation](https://redis.io/topics/data-types-intro).

## Finally, we have achieved what we wanted…

Dataflow pipeline jobs are champions when it comes to processing our bulk data within seconds. I highly recommend you to do it yourself and see how fast it is. Well, I have tried to attach as many resources as possible and if you go through the code, it is fairly simple. Still, you will get the gist of it when you experiment on your own. 🙂

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_