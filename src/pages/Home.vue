<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl md:text-4xl my-2">
        Vue 3 Application
      </h1>
      <div class="">
        <div class="flex justify-center">
          <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(app, index) in list" :key="app.path" class="text-left my-4">
              <router-link class="w-full" :to="app.path">
                <p class="text-xl font-semibold"> Module {{index+= 1}}: <i>{{ app.title }}</i></p>
              </router-link>
              <div>
                <div class="font-semibold mt-2"></div>
                <p v-for="topic in app.concepts" :key="topic">{{ topic }}</p>
              </div>
            </div>
            <div class="text-left my-4">
              <p class="text-xl font-semibold">Module: <i>Login </i></p>
              <div class="">
                <div class="text-lg font-semibold"></div>
                <p v-for="topic in login.concepts" :key="topic">{{ topic }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const list = ref([
      {
        path: "/calendar",
        title: "Calendar",
        concepts: ["Javascript Date", "Vue Router"],
      },
      {
        path: "/markdown",
        title: "Markdown",
        concepts: ["Using External Library", "Vue Mixins"],
      },
      {
        path: "/slider-carousel",
        title: "Slider",
        concepts: [
          "Vue Transition & Animation",
          "virtual DOM",
          "lifecycle hooks",
        ],
      },
      {
        path: "/calculator",
        title: "Calculator",
        concepts: [
          "resuable composition api",
          "window event listener",
          "Composition API",
        ],
      },
      {
        path: "/resuseable-modal",
        title: "ReuseableModal",
        concepts: ["slots", "named slots"],
      },
      {
        path: "/chat",
        title: "Chat",
        concepts: [
          "Firebase Realtime Database",
          "vuex v4",
          "Custom Router middleware",
        ],
      },
      {
        path: "/user-crud",
        title: "UserCrud",
        concepts: [
          "using axios",
          "external API",
          "reactive vue3 api",
          "pagination",
          "envirnment variable (.env file)",
        ],
      },
      {
        path: "/tensorflow",
        title: "Tensorflow",
        concepts: [
          "Using Tensorflow with Vue",
          "Device Camera Open",
          "Working with Canvas",
        ],
      },
    ]);
    const login = ref({
      title: "Login Modal",
      concepts: [
        "Create Modal",
        "Vue Custom Events Emitting",
        "Form Handling",
        "firebase authentication",
        "loading effect",
        "Template Refs",
        "component props",
        "firebase google login",
        "Refactoring with component",
        " vue3 teleport",
      ],
    });

    return { list, login };
  },
};
</script>

<style></style>
