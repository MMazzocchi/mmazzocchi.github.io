---
layout: default
title: Blog
---

# All Blog Posts

{% assign sortedPosts = site.posts | sort: "date" | reverse %}
{% for post in sortedPosts  %}
* {{ post.date | date: "%Y-%m-%d" }} - [{{ post.title }}]({{post.url}})
{% endfor %}
