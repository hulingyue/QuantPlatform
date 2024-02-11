<template>
    <el-container>

    <el-col :span="3"><div class="grid-content ep-bg-purple"></div></el-col>
    <el-col :span="6">
        <el-header>数字货币</el-header>
        <el-main>
            <el-table :data="CrytpoTableData" style="width: 100%" :row-class-name="TableRowClassName" @row-click="ToExchangePage">
                <el-table-column prop="exchange" label="交易所" width="200%" />
                <el-table-column prop="state" label="状态" width="130%" />
            </el-table>
        </el-main>
    </el-col>

    <el-col :span="6">
        <el-header>期货/现货</el-header>
        <el-main>
            <el-table :data="FutureTableData" style="width: 100%" :row-class-name="TableRowClassName" @row-click="ToExchangePage">
                <el-table-column prop="exchange" label="交易所" width="200%" />
                <el-table-column prop="state" label="状态" width="130%" />
            </el-table>
        </el-main>    
    </el-col>

    <el-col :span="6">
        <el-header>股票</el-header>
        <el-main>
            <el-table :data="StockTableData" style="width: 100%" :row-class-name="TableRowClassName" @row-click="ToExchangePage">
                <el-table-column prop="exchange" label="交易所" width="200%" />
                <el-table-column prop="state" label="状态" width="130%" />
            </el-table>
        </el-main>
    </el-col>

    <el-col :span="3"><div class="grid-content ep-bg-purple"></div></el-col>
    </el-container>
</template>

<script lang="ts" setup>
    import router from './../../router'

    interface Exchange {
        exchange: string
        state: string
        path: string
    }

    const TableRowClassName = ({ row }: { row: Exchange }) => {
        if (row.state == "正常") {
            return "success-row"
        }
        return 'warning-row'
    }

    const CrytpoTableData: Exchange[] = [
        {
            "exchange": "Bybit",
            "state": "正常",
            "path": "/Bybit"
        }, 
        {
            "exchange": "Binance",
            "state": "规划中",
            "path": ""
        },
        {
            "exchange": "Okex",
            "state": "规划中",
            "path": ""
        },
        {
            "exchange": "HTX",
            "state": "规划中",
            "path": ""
        }
    ]

    const FutureTableData: Exchange[] = [
        {
            "exchange": "上海黄金交易所",
            "state": "规划中",
            "path": ""
        }
    ]

    const StockTableData: Exchange[] = [
        {
            "exchange": "A股",
            "state": "待定",
            "path": ""
        },
        {
            "exchange": "港股",
            "state": "规划中",
            "path": ""
        }
    ]

    // const router = useRouter();
    const ToExchangePage = (row: any, _column: any, _event: MouseEvent) => {  
        if (row["path"] === "") {
            alert("交易所：" + row["exchange"] + "\n状态：" + row["state"]);
            return;
        }
        // 如果需要，你可以在这里进行页面跳转或其他逻辑处理  
        // 例如，使用 Vue Router 进行页面跳转，并传递被点击行的数据
        router.push("/exchange/" + row["exchange"]);  
    }
</script>

<style scoped>
.el-table__body-wrapper::-webkit-scrollbar {  
    display: none;  
}
</style>