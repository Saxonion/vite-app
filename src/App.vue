<template>
  <a-config-provider :locale="locale">
    <a-layout class="layout-container">
      <a-layout-sider :collapsed="collapsed"
                      :trigger="null"
                      collapsible>
        <div class="logo" />
        <Aside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header-container">
          <menu-unfold-outlined v-if="collapsed"
                                class="trigger"
                                @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else
                              class="trigger"
                              @click="() => (collapsed = !collapsed)" />
          <a-dropdown>
            <a class="ant-dropdown-link"
               @click="e => e.preventDefault()">
              <a-avatar>
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a @click="logout">Logout</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-layout-header>
        <BreadCrumb class="bread-crumb" />
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons-vue';
import { ConfigProvider, Layout, Avatar, Dropdown, Menu } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

//  组件提供的语言包并不对日期格式化起作用，需要额外导入 moment 语言包
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

import Aside from './components/aside/index.vue';
import BreadCrumb from './components/breadCrumb/index.vue';

moment.locale('cn');

export default defineComponent({
  name: 'App',

  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DownOutlined,

    [ConfigProvider.name]: ConfigProvider,
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,

    [Avatar.name]: Avatar,
    [Dropdown.name]: Dropdown,

    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,

    Aside,
    BreadCrumb,
  },

  setup() {
    const collapsed = ref(false);

    return {
      collapsed,
      locale: zhCN,
    };
  },
});
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
  overflow: hidden;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: rgba(24, 144, 255, 1);
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}

.header-container {
  background: rgba(255, 255, 255, 1);
  padding: 0;
}

.bread-crumb {
  margin: 16px 40px;
}

.content {
  margin: 0 16px 24px 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 1);
  min-height: 280px;
}

.ant-dropdown-link {
  float: right;
  padding: 0 30px;

  .ant-avatar {
    margin-right: 20px;
  }
}
</style>
