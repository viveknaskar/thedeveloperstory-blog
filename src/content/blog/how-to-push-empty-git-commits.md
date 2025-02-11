---
title: "How To Push Empty Git Commits"
description: "Sometimes, there might be instances when you have integrated your builds and you need to trigger a build without any changes in your code. Also, you need to trigger a build manually. The only way to trigger the build is through Git. You may trigger your build without making any modifications to the project by [&hellip;]"
pubDate: 2022-10-07
heroImage: "/blog-images/wp-praveen-thirumurugan-KPAQpJYzH0Y-unsplash.jpg"
categories: ["General"]
tags: ["developer","git","gitcommands","thedeveloperstory"]
---

Sometimes, there might be instances when you have integrated your builds and you need to trigger a build without any changes in your code. Also, you need to trigger a build manually.

The only way to trigger the build is through Git. You may trigger your build without making any modifications to the project by pushing a “empty commit.”

### So, How to Do that?

Git doesn’t allow commits without the commit messages. To push a new commit to the remote repository, you need to make changes to the project you are working on.

You can use the below command to do that:

```
**git commit --allow-empty -m "Test commit"**
```

![](https://thedeveloperstory.com/wp-content/uploads/2022/10/screely-1665127619434.png)

Now, simply pushing the commit the changes to the remote using the below commit.

```
**git push origin master**
```

That’s it! 🙂

* * *

kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'Z8Z8E5CX3');kofiwidget2.draw();