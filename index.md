---
layout: home
title: Home
---

# Hi! Welcome to my site.

My name is Max, I'm a software developer based in the Washington, DC area.

As you can probably tell, I like to keep things simple.

[My Links](/links)

---

{% include quote-generator.html %}

---

# Words I wrote

{% assign latestPosts = site.posts | sort: "date" | reverse | slice: 0, 5%}
{% for post in latestPosts  %}
* {{ post.date | date: "%Y-%m-%d" }} - [{{ post.title }}]({{post.url}})
{% endfor %}

[See All Posts](/blog)
