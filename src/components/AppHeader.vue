<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  
      <div class="wrapper">
        <nav class="navbar">
          <!-- NAVIGATION MENU -->
          <ul class="nav-links">
  
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
  
            <!-- NAVIGATION MENUS -->
            <div class="menu">
  
              <RouterLink to="/">Home</RouterLink>
              <!-- <RouterLink to="/detail">Detail</RouterLink> -->
  
              <!-- <li class="services">
                <a href="/">Services</a> -->
  
                <!-- DROPDOWN MENU -->
                <!-- <ul class="dropdown">
                  <li><a href="/">Dropdown 1 </a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>
  
              </li>
  
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Contact</a></li> -->
            </div>
          </ul>
        </nav>
      </div>
    </header>
  </template>