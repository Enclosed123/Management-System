<template>
  <div>
    <h1>{{id? "编辑":"新建"}}文章</h1>

    <el-form ref="form" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option
            v-for="(item, index) in categories"
            :key="index"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
    </el-form>
    <el-row style="padding:0 120px">
      <el-button type="primary" native-type="submit" @click="save">保存</el-button>
    </el-row>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  props: {
    id: {}
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },

    // 保存按钮
    async save() {
      let res;
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console.log(res);
    },
    // 数据更新
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  }
};
</script>