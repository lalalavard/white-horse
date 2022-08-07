---
layout: docs
---

<script setup>

import Card from '../components/Card.vue'
import navList from '../resource/Navagation.json'

</script>

## 论坛社区

<Card :navList="navList.dev"></Card>

## 官方文档

<Card :navList="navList.docs"></Card>

## 热门框架

<Card :navList="navList.framework"></Card>

## 技术博客

<Card :navList="navList.blog"></Card>

## 在线编程

<Card :navList="navList.coding"></Card>

## 工具分享

<Card :navList="navList.tool"></Card>

## 动漫专区

<Card :navList="navList.animate"></Card>

## 游戏专区

<Card :navList="navList.game"></Card>
