---
title: "Terraform In A Nutshell"
description: "Terraform is an infrastructure as code (IaC) tool that can provision resources in the cloud from simple declarative code. When building an app in the cloud, you may find yourself using the graphical user interface of any cloud provider. Clicking on buttons and paying for products just like we do on sites like eBay or [&hellip;]"
pubDate: 2022-03-21
heroImage: "/blog-images/wp-c-dustin-91AQt9p4Mo8-unsplash.jpg"
categories: ["DevOps"]
tags: ["blogger","developer","developerblog","Devops","thedeveloperstory"]
---

Terraform is an infrastructure as code (IaC) tool that can provision resources in the cloud from simple declarative code. When building an app in the cloud, you may find yourself using the graphical user interface of any cloud provider.

Clicking on buttons and paying for products just like we do on sites like eBay or Amazon. The only drawback to this approach is its total chaos. You may have to click dozens of buttons to get your VM configured properly.

That’s still fine.

_But what happens when you have to do the same in the future?_ You will have to do that all over again.

Terraform enables you to securely and efficiently create, maintain, and version infrastructure by representing your infrastructure and all of your settings with the HashiCorp configuration language (HCL) or even JSON.

It is kind of a human-readable blueprint that can execute and automate everything you do in the cloud. The best part is that it is free and open-source.

![](https://thedeveloperstory.com/wp-content/uploads/2022/03/terraform-1024x371.png)

Infrastructure as Code with Terraform

And the first step to getting started is to install the CLI on your local system, then from your project, create a file ending in a _.tf_ extension.

At the top, we have a terraform block that controls the global settings for the terraform itself.

_main.tf_

```
terraform {
	required_providers {
		google = {
			source = "hashicorp/google"
			version = "4.14.0"
		}
	}
}

provider "google" {
	credentials = file("<NAME>.json")

	project = "<PROJECT_ID>"
	region = "us-central1"
	zone = "us-central1-c"
}
```

In the terraform block, we most importantly can define providers here which are like plugins that can connect to different cloud providers like AWS, google cloud, azure and many more.

In the provider block, we provide the terraform with all the necessary credentials to connect to our google cloud account.

From there, we can create actual cloud infrastructure using a resource block. It takes a type as its first argument which corresponds to a product on google cloud. Here `google_compute_instance` is the product.

```
resource "google_compute_instance" "default" {
    name = "compute_engine"
    machine_type = "e2-medium"
    zone = "us-central1-a"

    boot-disk {
       initialize_params {
           image = "debian-cloud/debian-9"
        }
    }

    network_interface {
        network = "default"
        access_config {
        }
    }
}
```

The second parameter is a custom name to identify it as the second argument. Here `default` is the name. Inside the block, we can customize the settings of the resource like its machine type, zone and anything else.

```
terraform init // initializes the project

terraform apply // makes the actual changes to google cloud or any other cloud provider

terraform show // inspects the current state of the infrastructure

terraform destroy // deletes everything in the configuration file
```

Whatever changes we make to the resource and its configuration, terraform keeps track of the changes or diff similar to a version control system like git.

The command `terraform apply` is used to deploy any changes to the configuration.

* * *

## Conclusion

Terraform enables you to safely and predictably create, change, and improve infrastructure. It is an open-source tool that converts APIs into declarative configuration files that can be shared among team members, changed, reviewed, and versioned.

This short article is just an introduction to Terraform. _This is just the tip of the iceberg._ I would highly recommend you go through the relevant documentation and other reference links.

#### Reference

[https://github.com/hashicorp/terraform](https://github.com/hashicorp/terraform)

[https://registry.terraform.io/providers/hashicorp/google/latest/docs](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

[https://registry.terraform.io/providers/hashicorp/google/4.14.0](https://registry.terraform.io/providers/hashicorp/google/4.14.0)

[https://github.com/hashicorp/terraform-provider-google](https://github.com/hashicorp/terraform-provider-google)

* * *

_If this article provided you with value, please [support my work](https://buymeacoffee.com/viveknaskar) — only if you can afford it. You can also [connect with me on X](https://x.com/vivek_naskar). Thank you!_