const Mock = require("mockjs")

let getAriticleData = Mock.mock({
    'data|40': [ // 生成5条数据 数组
        {
            'id|+1': 1, // 生成商品id，自增1
            'msg': '@cparagraph(100)', // 生成商品信息，长度为10个汉字
            'title': '@ctitle()', // 生成文章标题 ，
            'date': '@datetime()', //生成文章时间
            'subtitle': '@cparagraph(2)', //生成副标题
            'image': '@dataImage(500x320)', // 生成随机图片，大小/背景色/字体颜色/文字信息
            'views': '@natural( 0, 1000 )', // 生成文章浏览次数，
            'likes': '@natural( 0, 1000 )', // 生成文章点赞次数，
            'comment': '@natural( 0, 1000 )' // 生成文章评论次数，
        }
    ]
})
Mock.mock('/api/getAriticleData', 'get', getAriticleData)