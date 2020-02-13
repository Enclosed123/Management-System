<template>
  <div>
    <h1>{{id? "编辑":"新建"}}分类</h1>

    <el-form ref="form" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="model.skills.push({})">
          <i class="el-icon-plus">添加技能</i>
        </el-button>
        <el-row type="flex">
          <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
            <el-form-item label="名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res=>$set(item,'icon',res.url)"
              >
                <img v-if="item.icon" :src="item.icon" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="概述">
              <el-input v-model="item.description"></el-input>
            </el-form-item>
            <el-form-item label="小提示">
              <el-input v-model="item.tips" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.skills.splice(index,1)">
                <span>删除</span>
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <el-row style="padding:0 120px">
      <el-button type="primary" native-type="submit" @click="save">保存</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {},
      parents: []
    };
  },
  props: {
    id: {}
  },
  methods: {
    // 保存按钮
    async save() {
      let res;
      if (this.id) {
        await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console.log(res);
    },
    // 数据更新
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  }
};
</script>