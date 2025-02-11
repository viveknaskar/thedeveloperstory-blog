---
title: "Changing a Git Remote’s URL"
description: "Each Git repository can have zero or more Git remotes linked to it. When you clone a repository, the name of the remote is set automatically to origin and points to the repository that you cloned from. If you created the repository locally, you can add a new remote. The remote can point to a repository hosted on [&hellip;]"
pubDate: 2020-03-05
heroImage: "/blog-images/wp-yancy-min-842ofhc6mai-unsplash-scaled.jpg"
categories: ["General"]
tags: ["bitbucket","git","gitcommands","github","gitlab","thedeveloperstory","version-control","versioning"]
---

Each Git repository can have zero or more Git remotes linked to it. When you clone a repository, the name of the remote is set automatically to **origin** and points to the repository that you cloned from. If you created the repository locally, you can add a new remote.

The remote can point to a repository hosted on a Git hosting service such as [GitHub](https://github.com/), [BitBucket](https://bitbucket.org/) or [GitLab](https://about.gitlab.com/).

Just follow the steps below to change the URL of a remote:

1.  Go to the directory where your repository is located:

```
    $ cd /path/repository
```

2. Run `git remote` to list the existing remotes with names and URLs:

```
    $ git remote -v
```

You would get:

```
    $ origin https://github.com/user/repo_name.git (fetch)
    $ origin https://github.com/user/repo_name.git (push)
```

3. Use the `git remote set-url` command followed by the remote name, and the remote’s URL:

```
    **`$ git remote set-url <remote-name> <remote-url>`**
```

The remote’s URL can start with HTTPS or SSH, depending on the protocol you’re using. If no protocol is specified, it defaults to SSH. The URL can be found on the repository page of your Git hosting service.

4. If you’re changing to HTTPS, the URL will look something like this:

```
    `https://gitserver.com/user/repo_name.git`
```

5. If you’re changing to SSH, the URL will look like this:

```
    `git@gitserver.com:user/repo_name.git`
```

For example, to change the `origin` to `git@gitserver.com:user/repo_name.git` you would type:

```
 $ git remote set-url origin git@gitserver.com:user/repo_name.git
```

##### **That’s it. You have successfully changed the URL of the remote.**

![The feeling you get when you are able to change the URL of the remote.](https://thedeveloperstory.files.wordpress.com/2020/03/completed.gif?w=480)

That feeling when you are able to change the Git’s remote URL