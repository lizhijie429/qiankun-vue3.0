<template>
  <div>
    <a-radio-group :size="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <a-button type="primary" :size="size">Primary</a-button>
    <a-button :size="size">Normal</a-button>
    <a-button type="dashed" :size="size">Dashed</a-button>
    <a-button type="danger" :size="size">Danger</a-button>
    <a-button type="link" :size="size">Link</a-button>
    <a-button type="primary" :size="size">
      <template #icon>
        <DownloadOutlined />
      </template>
    </a-button>
    <a-button type="primary" shape="circle" :size="size">
      <template #icon>
        <DownloadOutlined />
      </template>
    </a-button>
    <a-button type="primary" shape="round" :size="size">
      <template #icon>
        <DownloadOutlined />
        Download
      </template>
    </a-button>
    <a-button type="primary" shape="round" :size="size">
      <template #icon>
        <DownloadOutlined />
      </template>
    </a-button>
    <a-button type="primary" :size="size">
      <template #icon>
        <DownloadOutlined />
      </template>
      Download
    </a-button>
  </div>
</template>
<script lang="ts">
import { DownloadOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    DownloadOutlined,
  },
  setup() {
    return {
      size: ref("large"),
    };
  },
});
</script>
