<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>HEADING 1</template>
    <p>
      This is a random box of text that I am using to test the new component that I have created.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>HEADING 2</template>
    <ul>
      <li>Item one on my list</li>
      <li>Item two on my list</li>
      <li>Item three on my list</li>
      <li>Item four on my list</li>
      <li>Item five on my list</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>HEADING 3</template>
    <p>
      This is a random box of text that I am using to test the new component that I have created.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>HEADING 4</template>

    <p>
      This is a random box of text that I am using to test the new component that I have created.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>HEADING 5</template>
    <p>
      This is a random box of text that I am using to test the new component that I have created.
    </p>
  </WelcomeItem>
</template>
