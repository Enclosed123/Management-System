<template>
  <div>
    <h1>{{id? "编辑":"新建"}}管理员</h1>

    <el-form ref="form" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="账号">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
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
        await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console.log(res);
    },
    // 数据更新
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/admin_users`);
      this.parents = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  }
};
</script>