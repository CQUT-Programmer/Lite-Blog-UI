<template>
  <el-container>
    <el-aside style="width: 15%">
      <el-col>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
        >
          <el-menu-item index="1" class="navigation">
            <el-icon>
              <Clock/>
            </el-icon>
            <span>最新</span>
          </el-menu-item>
          <el-menu-item index="2" class="navigation">
            <el-icon>
              <Sunny/>
            </el-icon>
            <span>热门</span>
          </el-menu-item>
          <el-menu-item index="3" class="navigation">
            <el-icon>
              <Discount/>
            </el-icon>
            <span>关注</span>
          </el-menu-item>
          <el-menu-item index="4" class="navigation">
            <el-icon>
              <Eleme/>
            </el-icon>
            <span>我的圈子</span>
          </el-menu-item>
          <el-menu-item index="5" class="navigation">
            <el-icon>
              <DataAnalysis/>
            </el-icon>
            <span>推荐圈子</span>
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
          <li>
            <img src="../../assets/image/circle.png" alt="圈子">
            <span>
       请选择圈子
     </span>
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
        <el-button type="primary">发布</el-button>
      </div>

    </el-main>
    <el-aside style="width: 25%">side-right</el-aside>
  </el-container>
</template>

<script>
import dynamicCard from '@/components/hotspot/DynamicCard.vue'
import {ref} from "vue";

export default {
  name: "Hotspot",
  components: {
    dynamicCard
  },
  setup() {


    const dynamicValue = ref()
    return {
      dynamicValue
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
  padding-right: 15px;
  cursor: pointer;
}

#write-dynamic li *:hover {
  color: cornflowerblue;
}

</style>
