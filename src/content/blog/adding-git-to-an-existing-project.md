---
title: "How To Add Git to an Existing Project"
description: "Git has been the version-control system of choice since its inception in 2005. About 87% of the developers use Git as their version-control system. Well, a version control system is a software tool that helps record changes to files by keeping a track of modifications done to the code. This has many advantages with team [&hellip;]"
pubDate: 2020-09-06
heroImage: "/blog-images/wp-caleb-white-nle9rcsxx3c-unsplash-scaled.jpg"
categories: ["General"]
tags: ["bitbucket","git","gitcommands","github","gitlab","thedeveloperstory","version-control","versioning"]
---

Git has been the version-control system of choice since its inception in 2005. About 87% of the developers use Git as their version-control system. Well, a version control system is a software tool that helps record changes to files by keeping a track of modifications done to the code.

This has many advantages with team collaboration being one of the top reasons. But how do you add git to an existing project which you have already started before. Well, its very easy.

### So, What Are The Steps?

Follow along the below steps to add Git to your already created project.

*   Go to the terminal of your project directory

*   You need to initialize your project git using  `git init`

*   Create a [`.gitignore` file](https://git-scm.com/docs/gitignore) and it is actually a text file that tells Git which files or folders to ignore in a project.

*   Stage your files using  `git add .`

*   Commit your changes with an appropriate commit message, for example: 

```
 git commit -m "my first commit"
```

### How does it work really?

So you have an existing project and you want to push to a version control system, you would need to create a repository in GitHub (or any distributed version-control repository of your choice). 🙂

### Create a GitHub repository

Once you have logged in to your GitHub repository, you have to navigate to your homepage and click on the **+ (plus)** symbol and then to _**New repository**_.

![](https://thedeveloperstory.files.wordpress.com/2020/09/create-a-repo.png?w=1024)

_New repository_ will create redirect to a page where you have to give a name to your repository

Once you are navigated to a different page, you would need to give a name to your repository. You would also have the option to make your repository as public (accessible to everyone) or private (only accessible to people, whom you have given permission). Once everything is confirmed, you can finally click on **_Create repository_**, which will create your repository.

![](https://thedeveloperstory.files.wordpress.com/2020/09/name-your-repo.png?w=783)

After naming the repository, you can select the repository to be either public or private

### Connecting your project code to GitHub repository

Once the repository is created, you would have to add the files from your local repository to the remote one on GitHub. This is essential for pushing your code to your remote repository.

![](https://thedeveloperstory.files.wordpress.com/2020/09/get-the-remote-repo-link.png?w=1024)

You can copy your repository remote URL to link it with your local repository

You can use the below Git command to link your local repository with that of the remote:

```
git remote add <your-remote-name> <your-remote-url>
```

Hence, the command will become:

```
git remote add origin https://github.com/viveknaskar/new-repository.git
```

The `git remote` command allows Git to track remote repositories and connects local repositories to those remote ones. The main remote repository in Git is called _origin_.

### Pushing your code to your GitHub repository

After you have linked your local repository to your GitHub one, you need push your local commits to your remote repository using `git push` command. The push command will update the remote repository if there are additional changes in your repository.

The `git push` requires two parameters: the name of the remote repository (_origin_) and the branch to push to (here _master_ is the default branch for every repository).

```
git push origin master
```

Once you run this command, you will get the logs like below:

```
$ git push origin master

Counting objects: 3, done.
Writing objects: 100% (3/3), 212 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/viveknaskar/new-repository.git
 * [new branch]      master -> master
```

There you go! You have pushed your existing project to GitHub. 🤓

* * *

kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'Z8Z8E5CX3');kofiwidget2.draw();