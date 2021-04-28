---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# post thumb
feature: "banner.png"

# meta description
description: ""

# taxonomies
categories:
  - ""

# post tags
tags:
  - "keto"
  - "vegan"
  - "gluten-free"
  - "vegetarian"
  - "diary-free"

# post type
type: "post"

# Is Recipe
recipe: true

# prep time
time: ""

# serving
serving: 1
---

{{< img src="banner.png" alt="" >}}
{{< tags >}}

{{< post-info prep="" cook="" total="" serving="">}}

{{< /post-info>}}