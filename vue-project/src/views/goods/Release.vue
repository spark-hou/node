<template>
    <div class="editor-box">
        <div class="page-title">
            <span>发布新商品</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>发布新商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="page-form" label-position="left">
            <el-form-item label="商品分类">
                <el-col :span="4">
                    <el-select v-model="form.cate_1st" placeholder="请选择" class="page-select" @change="getSecondClass">
                        <el-option
                                v-for="item in firstClass"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-select  v-model="form.cate_2st" placeholder="请选择" class="page-select" @change="getThirdClass">
                        <el-option
                                v-for="item in secondClass"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="form.cate_3st"  placeholder="请选择" class="page-select">
                        <el-option
                                v-for="item in thirdClass"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="商品名称" prop="name">
                <el-row>
                    <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                           商品标题名称最少3个字符，最长200个汉字
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品卖点" prop="sellingPoint">
                <el-row>
                    <el-col :span="10">
                        <el-input type="textarea" v-model="form.hotPoint"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                           商品卖点不超过140个汉字
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品价格" prop="goodPrice">
                <el-row>
                    <el-col :span="3">
                        <el-input placeholder="请输入价格" v-model="form.goodPrice">
                            <template slot="append">元</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                          价格必须是0-9999999之间的数字，且不能超过市场价
                        </span>
                        <span class="page-tips">
                          此价格为商品实际销售价格，如果商品存在规格，该价格显示最低价格
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="市场价格">
                <el-row>
                    <el-col :span="3">
                        <el-input placeholder="请输入价格">
                            <template slot="append">元</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            价格必须是0-9999999之间的数字，此价格为市场参考价，请根据实际情况认真填写
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="成本价">
                <el-row>
                    <el-col :span="3">
                        <el-input placeholder="请输入价格">
                            <template slot="append">元</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                             价格必须是0-9999999之间的数字，此价格是商户对销售商品的价格标注，非必填选项，不会在前台页面显示
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="折扣">
                <el-row>
                    <el-col :span="3">
                        <el-input disabled>
                            <template slot="append">折</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            根据销售价与市场价比例生成，不需要填写
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品库存">
                <el-row>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">件</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            必须是0-9999999之间的整数
                        </span>
                        <span class="page-tips">
                         若启动了库存配置，则系统自动计算商品是总数，此处无需卖家填写
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品货号">
                <el-row>
                    <el-col :span="3">
                        <el-input>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            商品货号是卖家管理商品的编号，卖家不可见
                        </span>
                        <span class="page-tips">
                            最多输入20个字符，支持中文字母数字
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品主图">
                <el-row>
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            上传商品默认主图，如多规格时，将默认图片或分规格上传规格主图，支持jpg，if，png格式上传或从图片空间中选择，建议选择
                            尺寸800*800像素以上，大小不超过1M的正方形图片，上传后图片将自动保存在图片空间默认分类里
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品轮播图">
                <el-row>
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                                上传商品默认主图，如多规格时，将默认图片或分规格上传规格主图，支持jpg，if，png格式上传或从图片空间中选择，建议选择
                            尺寸800*800像素以上，大小不超过1M的正方形图片，上传后图片将自动保存在图片空间默认分类里
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-alert
                    title="商品详情描述"
                    type="info"
                    effect="dark"
                    class="alert-box"
                    :closable="false">
            </el-alert>
            <el-form-item label="商品品牌">
                <el-col :span="10">
                    <el-input></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-col :span="22">
                    <Editor></Editor>
                </el-col>
            </el-form-item>
            <el-alert
                    title='商品物流信息'
                    type="info"
                    effect="dark"
                    class="alert-box"
                    :closable="false">
            </el-alert>
<!--            <el-form-item label="所在地">-->
<!--                <el-col :span="4">-->
<!--                    <el-select  placeholder="请选择" class="page-select">-->
<!--                        <el-option label="区域一" value="shanghai"></el-option>-->
<!--                        <el-option label="区域二" value="beijing"></el-option>-->
<!--                    </el-select>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <el-select placeholder="请选择" class="page-select">-->
<!--                        <el-option label="区域一" value="shanghai"></el-option>-->
<!--                        <el-option label="区域二" value="beijing"></el-option>-->
<!--                    </el-select>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                    <el-select placeholder="请选择" class="page-select">-->
<!--                        <el-option label="区域一" value="shanghai"></el-option>-->
<!--                        <el-option label="区域二" value="beijing"></el-option>-->
<!--                    </el-select>-->
<!--                </el-col>-->
<!--            </el-form-item>-->
            <el-form-item label="运费">
                <el-row>
                    <el-col :span="3">
                        <el-input placeholder="请输入价格">
                            <template slot="append">元</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <span class="page-tips">
                            运费设为0，前台将显示免运费
                        </span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="success" round>提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import Editor from '@/views/goods/Editor.vue';

    export default {
        name: "Release",
        components: {
            Editor,
        },
        data() {
            return {

                form: {
                    name: '',
                    hotPoint: '',
                    goodPrice: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    cate_1st:'',
                    cate_2st:'',
                    cate_3st:'',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 200, message: '长度在 3 到 200 个字符', trigger: 'blur'}
                    ],
                    hotPoint: [
                        {required: true, min: 1, max: 140, message: '长度在 1 到 140 个字符', trigger: 'blur'}
                    ],
                    goodPrice: [],
                },
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false,
                firstClass: {},
                secondClass:{},
                thirdClass:{},


            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            getFirstClass() {
                this.$http.get('/api/category/sub', {
                    params: {
                        pId: 1,
                    },
                }).then((res) => {
                    this.firstClass=res.data;
                    console.log(this.firstClass)
                });
            },
            getSecondClass() {
                this.secondClass={};
                this.form.cate_2st='';
                this.thirdClass={};
                this.form.cate_3st='';

                this.$http.get('/api/category/sub', {
                    params: {
                        pId: this.form.cate_1st,
                    },
                }).then((res) => {
                    this.secondClass=res.data;

                });
            },
            getThirdClass() {
                this.thirdClass={};
                this.form.cate_3st='';
                this.$http.get('/api/category/sub', {
                    params: {
                        pId: this.form.cate_2st,
                    },
                }).then((res) => {
                    this.thirdClass=res.data;

                });
            },

        },
        created() {
            this.getFirstClass();
        },
    }
</script>

<style lang="scss">
    .editor-box {
        .page-title {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
            border-bottom: 1px solid #999999;

            > span {
                font-size: 20px;
                font-weight: bolder;
            }
        }

        .page-form {
            margin-top: 20px;
        }

        .page-select {
            width: 100%;
        }

        .avatar-uploader {
            .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;

                &:hover {
                    border-color: #409EFF;
                }
            }

            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 150px;
                height: 150px;
                line-height: 150px;
                text-align: center;
            }

            .avatar {
                width: 178px;
                height: 178px;
                display: block;
            }
        }


        .alert-box {
            margin-bottom: 20px;

            .el-alert__title {
                font-size: 16px;
            }
        }

        .page-tips {
            display: block;
            color: #A6A7A9;
        }
    }
</style>