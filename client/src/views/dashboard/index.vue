<template >
  <div class="dashboard-container">
    <div>
      <el-row :gutter="12">
        <el-col
          :span="16"
          :xs="24"
          :sm="24"
          :lg="16"
        >
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>网站列表</span>
              </div>
            </template>
            <el-table
              :data="tableData"
              style="width: 100%"
              stripe
              border
            >
              <el-table-column
                prop="url"
                label="Url"
                width="180"
              />
              <el-table-column
                prop="ip"
                label="ip"
                width="180"
              />
              <el-table-column
                prop="navigator"
                label="设备"
              />
              <el-table-column
                prop="city"
                label="城市"
              />
              <el-table-column
                prop="open"
                label="开启"
              >
                <template #default="scope">
                  <el-switch
                    v-model="scope.row.open"
                    inline-prompt
                    active-text="是"
                    inactive-text="否"
                    @change="switchChange(scope.row)"
                  />
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                :formatter="formatterTime"
              />
              <el-table-column
                prop="operation"
                label="操作"
              >
                <template #default="scope">
                  <el-button
                    type="primary"
                    plain
                    @click="delItem(scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col
          :span="8"
          :xs="24"
          :sm="24"
          :lg="8"
        >
          <div class="product-demo">
            <h3 class="product_tip">模板</h3>
            <el-upload
              v-model:file-list="uploadList"
              class="upload-demo"
              action="/api/oss/upload"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
              :headers="{
                Authorization:token
              }"
              style="padding: 16px"
            >
              <el-button type="primary">上传</el-button>
            </el-upload>
            <product-card
              v-for="product in fileList"
              v-bind="{title: product}"
              :key="product"
            ></product-card>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue'

import ProductCard from './components/ProductCard.vue'

import Charts from '_c/Charts/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { getFreshList, getFileList, updateFresh, delFreshUrl } from '@/api/fresh'

import dayjs from 'dayjs'
import { getToken } from '@/utils/storage'

export default defineComponent({
  components: { ProductCard, Charts },
  setup() {
    let fileList = ref([])

    let uploadList = ref([])

    let tableData = ref([]);

    const getList = function () {
      getFreshList().then((res) => {
        res.data.forEach((item: any) => {
          item.open === '1' ? item.open = true : item.open = false;
        })
        tableData.value = res.data.reverse();
      })
    }

    getList()

    const formatterTime = (row: any, column: any, cellValue: any) => {
      return dayjs(Number(cellValue)).format("YYYY-MM-DD HH:mm:ss");
    }

    const getFile = function () {
      getFileList().then((res: any) => {
        fileList.value = res.data;
      })
    }

    getFile();

    const token = getToken();

    const switchChange = (item: any) => {
      const data = toRaw(item);
      data.open ? data.open = '1' : data.open = '0';
      updateFresh(data).then(() => {
        getList();
      });
    }

    const delItem = (item: any) => {
      delFreshUrl(item.id).then(() => {
        getList();
      })
    }

    const handleRemove: any = (file: any, uploadFiles: any) => {
      console.log(file, uploadFiles)
    }

    const handlePreview: any  = (uploadFile: any) => {
      console.log(uploadFile)
    }

    const handleExceed: any = (files: any, uploadFiles: any) => {
      ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
      )
    }

    const beforeRemove: any = (uploadFile: any, uploadFiles: any) => {
      return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      )
    }


    return {
      fileList,
      tableData,
      formatterTime,
      switchChange,
      delItem,
      uploadList,
      beforeRemove,
      handleExceed,
      handlePreview,
      handleRemove,
      token
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard-container {
  background: #f5f5f5;

  .grow-card-wrapper {
    .grow-card {
      margin-bottom: 12px;
    }
  }

  :deep(.echart-container) {
    border-radius: 4px;
    box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
  }

  .product-demo {
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
    padding: 5px;

    .product_tip {
      display: flex;
      height: 32px;
      margin-bottom: 10px;
      justify-content: space-between;
      align-items: center;
      padding-left: 7px;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .dashboard-container .product-demo {
    margin-top: 12px;
  }
}
@media only screen and (min-width: 1200px) {
  .dashboard-container .product-demo {
    margin-top: 0;
  }
}
</style>
