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
            >
              <el-table-column
                prop="date"
                label="Date"
                width="180"
              />
              <el-table-column
                prop="name"
                label="Name"
                width="180"
              />
              <el-table-column
                prop="address"
                label="Address"
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
            <h3 class="product_tip">项目进度</h3>
            <product-card
              v-for="product in productionDemoData"
              v-bind="product"
              :key="product.guid"
            ></product-card>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProductCard from './components/ProductCard.vue'

import Charts from '_c/Charts/index.vue'

export default defineComponent({
  components: { ProductCard, Charts },
  setup() {
    const productionDemoData = [
      {
        guid: 1,
        title: '开发任务一',
        desc: '开发任务一简介',
        percent: 25,
        updateDate: '2020.06.12',
        userAvatar: [
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        ]
      },
      {
        guid: 2,
        title: '开发任务二',
        desc: '开发任务二简介',
        percent: 65,
        updateDate: '2020.06.23',
        userAvatar: [
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        ]
      },
      {
        guid: 3,
        title: '开发任务三',
        desc: '开发任务三简介',
        percent: 85,
        updateDate: '2020.07.12',
        userAvatar: [
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        ]
      }
    ]

    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]

    return {
      productionDemoData,
      tableData
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
