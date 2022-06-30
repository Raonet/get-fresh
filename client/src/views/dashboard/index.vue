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
              />
              <el-table-column
                prop="time"
                label="时间"
                :formatter="formatterTime"
              />
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
import { defineComponent, ref } from 'vue'

import ProductCard from './components/ProductCard.vue'

import Charts from '_c/Charts/index.vue'

import { getFreshList, getFileList } from '@/api/fresh'

import dayjs from 'dayjs'

export default defineComponent({
  components: { ProductCard, Charts },
  setup() {
    let fileList = ref([])


    let tableData = ref([]);

    const getList = function () {
      getFreshList().then((res) => {
        tableData.value = res.data.reverse();
      })
    }

    getList()

    const formatterTime = (row: any, column: any, cellValue: any) => {
      return dayjs(Number(cellValue)).format("YYYY-MM-DD HH:mm:ss");
    }

    const getFile = function() {
      getFileList().then((res: any) => {
        fileList.value = res.data;
      })
    }

    getFile();


    return {
      fileList,
      tableData,
      formatterTime
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
