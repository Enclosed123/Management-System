<!-- 组件说明 -->
<template>
  <div class="login-container">
    <el-card header="登录窗口" class="login-card">
      <el-form @submit.native.prevent="login" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" placeholder=""></el-input>  
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" native-type="submit">登录</el-button>
          
        </el-form-item>
        
      </el-form>
      
    </el-card>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      model:{}
    };
  },
  computed: {},
  methods: {
    login(){
      console.log(this.model);
    }
  }
};
</script>

<style>
.login-card{
  width:30rem;
  margin: 12rem auto;
}
</style>