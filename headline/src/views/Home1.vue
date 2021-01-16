<template>
    <el-container>
        <el-header>
            <div class="line"></div>
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
            >
                <el-menu-item index="1">首页</el-menu-item>

                <el-submenu index="2">
                <template slot="title">摄影图片作品</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">摄影视频作品</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                    </el-submenu>
                <el-menu-item index="4">
                    <a href="https://www.ele.me" target="_blank">作品管理</a>
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside>
                <el-row class="tac">
                    <el-col :span="12">
                        <h5>自定义颜色</h5>
                        <el-button icon="el-icon-menu" @click="isCollapse=!isCollapse"></el-button>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b"
                                :collapse="isCollapse"
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航二</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="2-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>导航三</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="3-1">选项1</el-menu-item>
                                    <el-menu-item index="3-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="3-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="3-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="3-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <a href="/">摄影活动管理</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>摄影活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>摄影活动详情</el-breadcrumb-item>
                        <el-carousel :interval="4000" type="card" height="200px">
                            <el-carousel-item v-for="item in 6" :key="item">
                                <h3 class="medium">{{ item }}</h3>
                            </el-carousel-item>

                        </el-carousel><el-calendar >
                    </el-calendar>

                    </el-breadcrumb>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeIndex: "1",
                activeIndex2: "1",
                isCollapse: false,
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>