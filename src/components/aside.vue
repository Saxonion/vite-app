<template>
  <a-menu mode="inline"
          theme="dark"
          :selected-keys="selectedKeys"
          @click="handleMenu">
    <template v-for="menu in routerList"
              :key="menu.path">
      <template v-if="!menu.children">
        <a-menu-item :key="menu.path">
          <UserOutlined />
          <span>{{ menu.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="menu.path">
          <template #title>
            <span>
              <MailOutlined /><span>{{ menu.name }}</span>
            </span>
          </template>
          <a-menu-item v-for="subMenu in menu.children"
                       :key="menu.path + '/' + subMenu.path">
            <span>{{ subMenu.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { UserOutlined, MailOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import { Menu } from 'ant-design-vue';

export default defineComponent({
  components: {
    UserOutlined,
    MailOutlined,

    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },

  setup() {
    const router = useRouter();
    const routerList = router.options.routes;
    const selectedKeys = ref([]);

    const handleMenu = (e) => {
      router.push(e.key);
    };

    watch(router.currentRoute, (val) => {
      selectedKeys.value[0] = val.path;
    });

    return {
      selectedKeys,
      routerList,
      handleMenu,
    };
  },
});
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
