<template>
  <el-container>
    <el-aside style="width: 15%">
      <el-col>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect"
        >
          <el-menu-item index="1" class="navigation">
            <el-icon>
              <Clock/>
            </el-icon>
            <router-link :to="{path: '/' + 'liteblog/hotspot/new'}" :class="{'active-color': activeIndex === '1'}"
                         append>最新
            </router-link>
          </el-menu-item>
          <el-menu-item index="2" class="navigation">
            <el-icon>
              <Sunny/>
            </el-icon>
            <router-link :to="{path: '/' + 'liteblog/hotspot/hot'}" :class="{'active-color': activeIndex === '2'}">热门</router-link>
          </el-menu-item>
          <el-menu-item index="3" class="navigation">
            <el-icon>
              <Discount/>
            </el-icon>
            <router-link to="" :class="{'active-color': activeIndex === '3'}">关注</router-link>

          </el-menu-item>
          <el-menu-item index="4" class="navigation">
            <el-icon>
              <Eleme/>
            </el-icon>
            <router-link to="" :class="{'active-color': activeIndex === '4'}">我的圈子</router-link>

          </el-menu-item>
          <el-menu-item index="5" class="navigation">
            <el-icon>
              <DataAnalysis/>
            </el-icon>
            <router-link to="" :class="{'active-color': activeIndex === '5'}">推荐圈子</router-link>

          </el-menu-item>
          <el-menu-item index="6">
            <span class="recommended">内推招聘广场</span>
          </el-menu-item>
          <el-menu-item index="7">
            <span class="recommended">技术交流圈</span>
          </el-menu-item>
          <el-menu-item index="8">
            <span class="recommended">掘友请回答</span>
          </el-menu-item>
          <el-menu-item index="9">
            <span class="recommended">树洞一下</span>
          </el-menu-item>
          <el-menu-item index="10">
            <span class="recommended">上班摸鱼</span>
          </el-menu-item>
          <el-menu-item index="11">
            <span class="recommended">更多</span>
          </el-menu-item>

        </el-menu>
      </el-col>

    </el-aside>
    <el-main id="write-dynamic">
      <div class="background-common">
        <el-input
            maxlength="1000"
            placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦～"
            show-word-limit
            type="textarea"
            style="height: 140px"
            v-model="dynamicValue"
        />
        <div class="flex align-center space-between">
          <ul class="flex align-center">
            <li id="communication-circle">
              <el-dropdown trigger="click">
                <div class="flex align-center" style="color: #2186ff;">
                  <img src="../../assets/image/circle.png" alt="圈子">
                  <span>请选择圈子</span>
                  <el-icon>
                    <ArrowRight/>
                  </el-icon>
                </div>
                <template #dropdown>
                  <div class="circle-dropdown">
                    <el-input placeholder="搜索圈子名称" :suffix-icon="Search" style="padding: 15px"></el-input>
                    <el-divider/>
                    <div class="flex">
                      <el-menu
                          :default-active="1"
                          class="el-menu-demo"
                      >
                        <el-menu-item index="1">推荐圈子</el-menu-item>
                        <el-menu-item index="2">我的圈子</el-menu-item>
                        <el-menu-item index="3">技术</el-menu-item>
                        <el-menu-item index="4">互动交流</el-menu-item>
                        <el-menu-item index="5">职场</el-menu-item>
                        <el-menu-item index="6">吃喝玩乐</el-menu-item>
                      </el-menu>
                      <div></div>
                    </div>
                    <el-divider/>
                    <div id="circle-dropdown-button" class="flex flex-end">
                      <el-button type="primary" plain>不选择圈子</el-button>
                    </div>
                  </div>
                </template>
              </el-dropdown>
            </li>
            <li>
              <img src="../../assets/image/expression.png" alt="表情">
              <span>
       表情
     </span>
            </li>
            <li>
              <img src="../../assets/image/img.png" alt="图片">
              <span>
       图片
     </span>
            </li>
            <li>
              <img src="../../assets/image/link.png" alt="链接">
              <span>
       链接
     </span>
            </li>
            <li>
              <img src="../../assets/image/topic.png" alt="话题">
              <span>
       话题
     </span>
            </li>
          </ul>
          <el-button type="primary" style="width: 15%">发布</el-button>
        </div>
      </div>

      <div>
        <router-view/>
      </div>
    </el-main>
    <el-aside style="width: 25%" class="flex-column" id="hotspot-right">
      <div class="background-common user-info">
        <div class="flex space-around align-center">
          <avatar/>
          <span>{{ "用户" + 984983894 }}</span>
        </div>
        <el-divider style="margin: 24px 0 !important;"></el-divider>
        <ul class="flex space-around">
          <li>
            <span>{{ 0 }}</span>
            沸点
          </li>
          <li>
            <span>{{ 0 }}</span>
            圈子
          </li>
          <li>
            <span>{{ 0 }}</span>
            关注
          </li>
          <li>
            <span>{{ 0 }}</span>
            关注者
          </li>
        </ul>
      </div>
      <div>
        <div class="background-common">
          <div style="text-align: -webkit-left"><span>精选沸点</span></div>
        </div>
        <el-divider></el-divider>
        <div class="background-common">
          <h2>沸点1</h2>
          <h2>沸点2</h2>
          <h2>沸点3</h2>
        </div>
      </div>

    </el-aside>
  </el-container>
</template>

<script lang="ts">
import dynamicCard from '@/components/hotspot/DynamicCard.vue'
import avatar from '@/components/Avatar.vue'
import {ref, inject} from "vue";
import {Search} from "@element-plus/icons";

export default {
  name: "Hotspot",
  components: {
    dynamicCard,
    avatar
  },
  setup() {

    const toAssignUrl: any = inject('toAssignUrl')
    const dynamicValue = ref()
    const activeIndex = ref('1')
    const navigation = ref([
      {index: '1', name: '最新', url: 'liteblog/hotspot/new'},
      {index: '2', name: '热门', url: 'liteblog/hotspot/hot'},
      {index: '3', name: '关注', url: 'liteblog/hotspot/new'},
      {index: '4', name: '我的圈子', url: 'liteblog/hotspot/new'},
      {index: '5', name: '推荐圈子', url: 'liteblog/hotspot/new'},
      {index: '6', name: '插件', url: 'liteblog/hotspot/new'},
    ])
    const handleSelect = (key:string) => {
      activeIndex.value = key
      toAssignUrl(navigation.value[Number.parseInt(key) - 1].url)
    }
    return {
      dynamicValue,
      Search,
      handleSelect,
      activeIndex,
    }
  }

}
</script>

<style scoped>

.navigation {
  font-size: medium;
}

.recommended {
  padding: 0 10px 0 30px;
  color: #8a919f;
}

#write-dynamic {
  border-radius: 5px;
  padding: 0 20px;
}

/deep/ #write-dynamic .el-textarea__inner {
  height: 100%;
}

#write-dynamic li img {
  width: 20px;
  height: 20px;
  padding-right: 4px;
}

#write-dynamic li {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 15px;
  cursor: pointer;
}

#write-dynamic li *:hover {
  color: cornflowerblue;
}

#communication-circle {
  background-color: #fff;
  border-radius: 3px;
  color: #2186ff;
  padding: 2px 4px;
}

#circle-dropdown-button {
  padding: 15px;
}

.el-divider--horizontal {
  margin: 0;
}


.user-info li {
  display: flex;
  flex-direction: column;
}

#hotspot-right >div {
  margin-bottom: 20px;
}

</style>
