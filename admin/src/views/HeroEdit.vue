<template>
  <div>
    <h1>{{id? "编辑":"新建"}}英雄</h1>

    <el-form ref="form" label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card" value="basic">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model,'avatar',res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="Banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model,'banner',res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select  v-model="model.categories" multiple>
              <el-option
                v-for="(item, index) in categories"
                :key="index"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate v-model="model.scores.diffcult" :max="10" show-score style="margin-top:0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate v-model="model.scores.skills" :max="10" show-score style="margin-top:0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate v-model="model.scores.attack" :max="10" show-score style="margin-top:0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate v-model="model.scores.survive" :max="10" show-score style="margin-top:0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="(item, index) in items"
                :key="index"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="(item, index) in items"
                :key="index"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
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
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res=>$set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
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
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button type="primary" size="mini" @click="model.partners.push({})">
            <i class="el-icon-plus">添加英雄</i>
          </el-button>
          <el-row type="flex">
            <el-col :md="12" v-for="(item, index) in model.partners" :key="index">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="(hero, index) in heroes"
                    :key="index"
                    :value="hero._id"
                    :label="hero.name"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="概述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger" @click="model.partners.splice(index,1)">
                  <span>删除</span>
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      items: [],
      model: {
        name: "",
        avatar: "",
        skills: [],
        partners: [],
        heroes: [],
        scores: {
          diffcult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        }
      }
    };
  },
  props: {
    id: {}
  },
  methods: {
    // afterUpload(res) {
    //   this.$set(this.model, "avatar", res.url);
    //   // this.item = res.url;
    //   // console.log(res);
    // },
    // skillsIcon(res) {
    //   // this.$set(this.model,"icon",res.url)
    //   this.model.icon = res.url;
    //   console.log(res);
    //   console.log(this.model.icon)
    // },
    // 保存按钮
    async save() {
      let res;
      if (this.id) {
        await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console.log(res);
    },
    // 数据更新
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
    },
    async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`);
      this.heroes = res.data;
    }
  },
  created() {
    this.fetchItems();
    this.fetchHeroes();
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.avatar {
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>