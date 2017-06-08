import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, FlatList, Dimensions } from 'react-native';


export default class AllMoviesScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      listData: IMAGE_DATA
    }
  }


  _keyExtractor = (item, index) => item.name;

  _renderIten = ({ item }) => {
    return (
      <TouchableOpacity style={styles.viewStyle} activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate('MovieDetailsScreen',{item:item})}}>
        <Image source={{ uri: item.imageOfMovie }} style={styles.imgStyle} />
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    )
  };

  _onPressItem (item){
      //  alert(item.name)
      this.props.navigation.navigate('Order')
  };


  render() {
    return (

      <FlatList
        data={this.state.listData}
        numColumns={2}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderIten}
      />

    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: '#efefef',
    borderStyle: ('solid'),
    borderWidth: 1
  },
  imgStyle: {
    // 设置宽度
    width: Dimensions.get('window').width / 2 - 10,
    // 设置高度
    height: 280,
    marginLeft: 5,
    marginRight: 5,
    // 设置图片填充模式
    resizeMode: 'contain'
  },
  textStyle: {
    color: '#212121',
    textAlign: 'center'
  }
});

const IMAGE_DATA = [
  {
    "type": "国产电影",
    "name": "港囧",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/港囧.jpg",
    "summaryOfMovie": "导演: 徐峥 编剧: 束焕 / 苏亮 / 赵英俊 / 邢爱娜 / 徐峥 主演: 徐峥 / 赵薇 / 包贝尔 / 杜鹃 / 葛民辉 / 李璨琛 / 潘虹 / 赵有亮 / 朱媛媛 / 王迅 / 冯勉恒 / 王晶 / 叶竞生 / 林晓峰 / 车保罗 / 苑琼丹 / 林雪 / 江约诚 / 郑丹瑞 / 田启文 / 吴耀汉 / 林路迪 / 詹瑞文 / 庄思敏 / 陶虹 类型: 喜剧 制片国家/地区: 中国大陆 语言: 汉语普通话 / 粤语 上映日期: 2015-09-25(中国大陆) 片长: 114分钟 又名: 人再囧途之港囧 / 人在囧途之港囧 / 泰囧续集 / Lost In Hong Kong 徐来（徐峥 饰）曾经的梦想是成为一名油画家，可如今他早已沦为理想炮灰，在一家大地内衣公司当小老板。大地胸罩公司是岳父开的，他是上门女婿。虽然被全家人尊为最有出息人，但他对俗气的一家人很看不上，并把理想的沦陷归咎于他们。徐来对老婆蔡波（赵薇 饰）也一肚子意见。 大学同学20周年聚会上，徐来听到同学们谈论初恋杨伊（杜鹃 饰），顿时心猿意马。 不日，他陪伴老婆及家人来到香港游玩，计划和多年未见的杨伊偷偷会面，不料却被小舅子蔡拉拉（包贝尔 饰）缠住，拉拉一直梦想成为导演。在拍摄一部以家人为主题的纪录片。在约见初恋的过程中，二人不知不觉卷入了一起坠楼命案。甜蜜的约会之旅，变成了一场惊心动魄的历险与逃亡...... 徐来和拉拉，将如何度过香港这难忘的一天？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/港囧.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3o6q7j",
    "yunPassword": "百度网盘(提取码：zf7q)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "412"
  },
  {
    "type": "国产电影",
    "name": "刺客聂隐娘",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/刺客聂隐娘.jpg",
    "summaryOfMovie": "导演: 侯孝贤 编剧: 阿城 / 朱天文 / 谢海盟 / 侯孝贤 主演: 舒淇 / 张震 / 周韵 / 妻夫木聪 / 阮经天 / 谢欣颖 / 倪大红 / 咏梅 / 雷镇语 / 许芳宜 / 毕安生 / 张少怀 / 石隽 / 梅芳 类型: 剧情 / 武侠 / 古装 制片国家/地区: 台湾 / 中国大陆 / 香港 / 法国 语言: 汉语普通话 上映日期: 2015-08-27(中国大陆) / 2015-05-21(戛纳电影节) / 2015-08-28(台湾) 片长: 107分钟 又名: 聂隐娘 / The Assassin / The Hidden Heroine 寂寞天宝后，巍巍大唐辉煌告终，朝廷的威严和向心力进一步削弱。此时藩镇林立，派系迭起，在四分五裂的乱象之下李氏帝国勉强维持着不堪一击的和平与威信。河北三镇之一的魏博镇，刚愎暴戾的节度使田季安（张震 饰）野心勃勃，相机而动。会朝廷派神策兵讨伐王承宗，魏博主从各执一词，纷争连 连。与此同时，田季安自幼被公主道姑带到山上修炼剑法的表妹聂隐娘（舒淇 饰）满师归来。她谨遵师父教诲，奉行杀一人以救万人的理念，接连手刃多位大僚，而此次归来则将狙击目标锁定在田季安身上。剑术已成，道心未坚，侠女聂隐娘捷若猿猱，隐迹红尘...... 本片根据唐人裴刑的传奇小说《聂隐娘》改编，并荣获第68届戛纳电影节竞赛单元最佳导演奖。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/刺客聂隐娘封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mgjG4R2",
    "yunPassword": "百度网盘(提取码：x2d6)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "军犬麦克斯",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/军犬麦克斯.jpg",
    "summaryOfMovie": "导演: 鲍兹·亚金 编剧: 鲍兹·亚金 / 谢尔登 莱提奇 主演: 罗比·阿美尔 / 劳伦·格拉汉姆 / 托马斯·哈登·丘奇 / 杰伊·赫尔南德兹 / 卢克·克莱恩坦克 / 约瑟夫·朱利安·索里亚 / 乔什·维金斯 / 欧文·哈恩 / Blanca Camacho 类型: 剧情 / 冒险 官方网站: max-themovie.com 制片国家/地区: 美国 语言: 英语 上映日期: 2015-06-26(美国) 片长: 111分钟 又名: 海军忠犬(港) 海军忠犬麦克斯在阿富汗前线服役期间，搭档凯尔（罗比·阿美尔 Robbie Amell 饰）不幸殉职身亡，麦克斯因此患上后遗症，拒绝与别人接触，不能再服役。麦克斯被凯尔的家人收养，并由凯尔的弟弟——问题少年贾斯汀（乔什·维金斯 Josh Wiggins 饰）负责照顾。一人一狗由互相排斥，慢慢变成心灵伴侣。重振雄风的麦克斯，还配合贾斯汀追查凯尔殉职的秘密。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/军犬麦克斯封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3CSLd7",
    "yunPassword": "百度网盘(提取码：knjg)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  },
  {
    "type": "国产电影",
    "name": "白雪公主之神秘爸爸",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/白雪公主之神秘爸爸.jpg",
    "summaryOfMovie": "导演: 赵奔 编剧: 陈晴 主演: 阎萌萌 / 曹旭鹏 / 高明钰 / 马斑马 / 阿杰 / 瞿澳晖 / 王冠男 / 高枫 / 晓晏 / 林兰 类型: 喜剧 / 动画 / 奇幻 / 冒险 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-14(中国大陆) 片长: 77分钟 又名: Snow White: The Mysterious Father 七个小矮人的木屋闯来一位迷路的小女孩汉娜（高明钰 配音），她坚信失踪的爸爸还活着，所以仅凭一支神鸟羽毛线索四处寻找爸爸。白雪公主（阎萌萌 配音）和小矮人被她感动决定要帮助她，于是她们驾驶热气球飞向鸟岛，途中遭遇巨鹰和风暴袭击，险象环生。掉下森林后又经历了魔法屋的重重考验，她们历经千辛万苦见到神鸟，知道了爸爸失踪原因跟王后（林兰 配音）最近得到的一件世界上最美丽的礼服有关。随后救人路上她们落入王后的圈套全部被抓，危机关头，王子赶来同白雪公主和小矮人一起帮助解救爸爸，最后父女团圆。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/白雪公主之神秘爸爸封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1dDx1VSt",
    "yunPassword": "百度网盘(提取码：wv9c)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "大变局之梦回甲午",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/大变局之梦回甲午.jpg",
    "summaryOfMovie": "导演: 刘全玮 编剧: 孙钦军 主演: 赵育莹 / 吴云飞 / 冯兵 / 韩一菲 类型: 剧情 / 爱情 / 战争 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-09-01(中国大陆) 片长: 92分钟 又名: 梦回甲午 / Upheaval of Jiawu 美术学院的研究生江海心陪同奶奶爱新觉罗·德毓到北京西郊的潭柘寺写生，在高大的帝王树下，奶奶为江海心讲述了她的爷爷爱新觉罗·溥远与奶奶云娜之间的传奇爱情故事。 在公元1890年的冬天，年轻貌美的蒙古格格云娜在去潭柘寺的路上，被一群无所事事的贝勒们调戏，刚刚随同采买枪炮舰船的大臣从欧洲游历回国的溥远路见不平，愤而拔枪。在高大的帝王树下，溥远与云娜在一见钟情之后不顾随从侍女阻拦私定终身，一把短枪与一枚龙佩，成为他们情定一生的定情物。他们骇世惊俗的举动在京城掀起了轩然大波。老王爷要把溥远绑送到宗人府发落，云娜苦苦恳求，最后，寄予溥远厚望的老祖母发现了那枚龙佩，发现云娜竟然是自己亲如姊妹的表姐的后人，于是，在后海边百花深处胡同的王爷府，亲自为溥远和云娜主持了隆重的婚典。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/大变局之梦回甲午.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mgjG4S4",
    "yunPassword": "百度网盘(提取码：4djl)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "日韩电影",
    "name": "白河夜船",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/白河夜船.jpg",
    "summaryOfMovie": "导演: 若木信吾 编剧: 若木信吾 / 鈴本櫂 主演: 安藤樱 / 井浦新 / 谷村美月 / 紅甘 / 高橋義明 / 伊沢麿紀 / 竹厚绫 官方网站: shirakawayofune.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-04-25(日本) 片长: 91分钟 又名: Asleep 静谧的房间，仿佛与外界完全隔离的独立王国。年轻女子寺子(安藤樱 饰)不分昼夜地昏睡，任时光飞逝而过。许是童年练就的技能，她能在很短时间内进入睡眠，借此逃避着种种她所无法应对的棘手情况。窗外的声响以及电话铃声完全无法将其从梦的国度唤醒，而只有一个人除外。 相处多年的男朋友岩永(井浦新 饰)，他的电话铃声仿佛具有某种魔力，总能第一时间将寺子拉回现实。他们在职场相识，如今没有工作的寺子百无聊赖地待在家中，似乎除了睡眠外，便只剩下等待岩永电话这一件事情。事实上岩永早已结婚，他的妻子(竹厚绫 饰)因交通事故成为植物人，生不生死不死的状态煎熬难耐，感念着妻子家人的善良，岩永无法决然离开，寺子则淡然地看待这一切，从来没有过多的奢望。 在混沌的状态下，寺子总会想起不久前自杀的大学好友诗织(谷村美月 饰)。诗织热情开朗，两人无话不说，念书那会儿自然担当起好友和岩永这段不伦之恋的顾问。毕业后她仿佛无根的水草，辗转在不同朋友的家中暂住。直到某天，诗织找到了一份奇怪的工作，从而引导她朝着死亡的黑暗处前行。诗织经人介绍当起了陪睡者，工作期间她完全不用和客人有任何肢体接触，客人上门来只求能安安稳稳地睡上一觉，即使半夜醒来时也能第一时间看到诗织的笑脸。这时候她或者给对方一杯冰水，或者现煮一壶热热的咖啡，让疲于奔命的人们感到些许的安心。有时候诗织也会不小心睡去，在她看来，睡着时或多或少便将客人体内的黑暗部分吸到了自己身上来。不知不觉她变得无法正常入睡，看起来并不舒服的吊床则或多或少能让她暂时安歇。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/白河夜船.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntthKH7",
    "yunPassword": "百度网盘(提取码：os1t)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "日韩电影",
    "name": "迎风而立的狮子",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/迎风而立的狮子.jpg",
    "summaryOfMovie": "导演: 三池崇史 编剧: 齐藤浩史 / 佐田雅志 主演: 大泽隆夫 / 石原里美 / 真木阳子 / 萩原圣人 / 铃木亮平 / 藤谷文子 / 山崎一 / 石桥莲司 类型: 剧情 官方网站: kaze-lion.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-03-14(日本) 片长: 140分钟 日本导演三池崇史确定远赴非洲肯尼亚拍摄新片《迎风而立的狮子》（暂译）。该片由大泽隆夫担当男主角，以非洲肯尼亚为舞台，讲述了在严酷医疗条件下医生与患者之间的真挚感动物语。石原里美与真木阳子联袂共演。石原饰演一名女护士，真木饰演男主角大泽的未婚妻。 歌曲《迎风而立的狮子》是日本男歌手、小说家佐田雅志在根据真人真事进行创作的名曲，后来又被佐田改编成同名小说。当年远赴肯尼亚长崎大学热带医学研究所工作的国际医疗志愿者医生柴田纮一郎的感人事迹，令佐田雅志十分感动，随即担当作词、作曲创作出了这首歌。 该片在原作小说基础上加以创新，讲述了被派遣至肯尼亚进行医疗研究的医生岛田航一郎（大泽隆夫饰），面对当地严酷的医疗条件，决定长期留在军队疗伤医院进行援助的感动物语。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/迎风而立的狮子封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qW46Z4g",
    "yunPassword": "百度网盘(提取码：2v41)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "425"
  },
  {
    "type": "欧美电影",
    "name": "纸镇",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/纸镇.jpg",
    "summaryOfMovie": "导演: 杰克·施莱尔 编剧: 约翰·格林 / 斯科特·纽斯塔德 主演: 纳特·沃尔夫 / 卡拉·迪瓦伊 / 贾斯蒂斯·史密斯 / 奥斯汀·艾布拉姆斯 / 豪斯顿·塞奇 / 洁丝·辛克莱 / 格里芬·弗里曼 / 凯特琳·卡弗 / 卡拉·布欧诺 / 苏珊·马克·米勒 / 汤姆·希尔曼 / 梅格·克罗斯比 / 吉姆·R·科曼 类型: 剧情 / 爱情 / 悬疑 官方网站: papertownsmovie.com 制片国家/地区: 美国 语言: 英语 上映日期: 2015-07-24(美国) 片长: 109分钟 又名: 纸上城市(台) 昆汀（纳特·沃尔夫 Nat Wolff 饰）从小就单恋勇敢漂亮的邻居玛戈（卡拉·迪瓦伊 Cara Delevingne 饰），但两人多年的校园生活却是天差地别，没机会好好交流。一天夜里，玛戈突然潜入昆汀的房间，要求他协助报复她的花心男友，昆汀也乖乖答应。 通宵冒险结束后 ，玛戈离奇失踪，她的家人和警察都认为这是她的一个小玩笑，只有昆汀察觉出其中异样。根据玛戈昨夜的反常举动与她刻意留下的蛛丝马迹，昆汀与他的朋友开始了寻找玛戈的旅程。一张惠特曼的诗歌残片、一段网站上的留言，线索零碎又环环相扣。昆汀发现他越接近目的地，越对自己的发小感到陌生...... “你将前往纸上城市，永远不会回来。”玛戈留下的文字，引领昆汀逐步走进那座由现实与虚构交杂而成的纸上城市。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/纸镇封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1jGCQ5hk",
    "yunPassword": "百度网盘(提取码：evf2)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "450"
  },
  {
    "type": "欧美电影",
    "name": "吸血夜惊魂",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/吸血夜惊魂.jpg",
    "summaryOfMovie": "导演: Buz Alexander 编剧: Buz Alexander 主演: 麦克·道尔 / 艾斯黛拉·沃伦 / Massimo Dobrovic / 乔纳森·斯卡奇 / 比利·布莱尔 / 玛丽安娜·宝拉·韦森特 / Danny Agha 类型: 惊悚 / 恐怖 制片国家/地区: 美国 上映日期: 2015-10-06(美国) 片长: 92分钟 Two New Orleans detectives become embroiled in a centuries-long feud between two secretive factions of vampires while investigating a runaway child's case. Torn between their everyday lives and the dangerous lure of immortality, the detectives must race to destroy the evil Moldero clan.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/吸血夜惊魂封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3nQa6D",
    "yunPassword": "百度网盘(提取码：f6re)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "504"
  },
  {
    "type": "日韩电影",
    "name": "屌丝骑士",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/屌丝骑士.jpg",
    "summaryOfMovie": "导演: 平林克理 编剧: 一雫ライオン / 平林克理 主演: 中村倫也 / 遠藤新菜 / 柾木玲弥 / 柳英里紗 / アレクサンダー大塚 制片国家/地区: 日本 语言: 日语 上映日期: 2015-05-23(日本) 改编自80年代传奇工口漫画。 讲述了色胚男主人公诚豪介，转入了一所“女尊男卑”的超大小姐学园，为了争取男权、废除“三禁”，向自治会会长美崎静香宣战。决战当日却惨遭凶恶教师岚铁美迫害，豪介的色情能量，能否拯救全校的危机？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/屌丝骑士封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o63UTXS",
    "yunPassword": "百度网盘(提取码：aaze)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "423"
  },
  {
    "type": "日韩电影",
    "name": "新宿天鹅",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/新宿天鹅.jpg",
    "summaryOfMovie": "导演: 园子温 编剧: 园子温 / 铃木收 / 和久井健 主演: 绫野刚 / 山田孝之 / 泽尻英龙华 / 金子统昭 / 深水元基 / 村上淳 / 久保田悠来 / 真野惠里菜 / 丸高爱实 / 安田显 / 山田优 / 丰原功补 / 吉田钢太郎 / 伊势谷友介 类型: 喜剧 / 动作 官方网站: shinjuku-swan.jp 制片国家/地区: 日本 语言: 日语 上映日期: 2015-05-30(日本) 片长: 139分钟 又名: Shinjuku Swan 《新宿天鹅》为日本漫画家和久井健由自身真实经历而创作的漫画作品，于2005年开始在《周刊少年》连载，主要内容讲述了新宿街头有一些带着甜美笑容、诱人谈吐的人，他们的工作就是物色女孩子进娱乐场所，从中赚取介绍费。这群人被称为“新宿天鹅”。 电影版此前曝光的演出阵容仅一头金发自来卷的主人公白鸟龙彦（绫野刚 饰），龙彦的对手、卑劣且有野心的搜罗男南秀吉（山田孝之饰）、与龙彦相互扶持的风俗小姐凤蝶（泽尻英龙华）和将龙彦带入这个职业且多次帮助他的真虎（伊势谷友介饰）等四位演员。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/新宿天鹅封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o6L5QKM",
    "yunPassword": "百度网盘(提取码：vxkc)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "423"
  },
  {
    "type": "欧美电影",
    "name": "麦斯卡：寻找英雄",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/麦斯卡：寻找英雄.jpg",
    "summaryOfMovie": "导演: Karen Carpenter 编剧: Karen Carpenter / Jason Faller / Kynan Griffin 主演: Melanie Stone / Adam Johnson / Jake Stormoen / Nicola Posener / Christopher Robin Miller / 凯文·索伯 类型: 动作 / 奇幻 / 冒险 官方网站: https://www.facebook.com/MythicaSeries 制片国家/地区: 美国 语言: 英语 上映日期: 2015-1-22(美国) / 2015-3-27(德国) 片长: 93分钟 又名: 美丽少女勇闯龙潭 / 孤身寻找英雄 The young magician Marek dreams of exciting adventures. When she meets the help-seeking priestess Teela she offers her assistance and provides a motley troupe. Together they go in search of Teela's sister, who was kidnapped by a wild ogre.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/麦斯卡：寻找英雄封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1sj44GNF",
    "yunPassword": "百度网盘(提取码：zgby)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "欧美电影",
    "name": "我唾弃你的坟墓3：复仇在我",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我唾弃你的坟墓3：复仇在我.jpg",
    "summaryOfMovie": "导演:R.D. Braunstein 主演:莎拉·巴特勒/Gabriel Hogan/Doug McKeon/Karen Strassman/Jennifer Landon/Corey Craig/Bobby Reed/Alissa Juvan/Lony'e Perrine/Joshua Kovalscik/Heath McGough/Christopher Hoffman 类型:惊悚/恐怖/犯罪 制片国家/地区:美国 语言:英语 上映日期:2015-10-20(美国) 片长:91分钟 又名:Bez litości 3 经典的经典续集，1959年最原始的一部，93年有个所谓的续集。观众更为清晰的是2010年的版本，以及13年的续集。这算是10年新版的第三部了。 剧情延续第一部，女主走不出心理阴影而以暴制暴展开杀戮，但复仇血腥程度没前两部那么高，故事缺少前两部那种正面施暴前戏铺垫而描写女主幻想暴力的心境，于是精彩程度就大打折扣了，不过电影其实也不是很差。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我唾弃你的坟墓3：复仇在我封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1sj0081Z",
    "yunPassword": "百度网盘(提取码：7az9)",
    "imageOfMovieHeight": "767",
    "imageOfMovieWidth": "594"
  },
  {
    "type": "国产电影",
    "name": "恋爱中的城市",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恋爱中的城市.jpg",
    "summaryOfMovie": "导演: 文牧野 / 董润年 / 韩轶 / 傅天余 / 冀佳彤 编剧: 文牧野 / 董润年 / 张一帆 / 查暮春 / 韩轶 / 傅天余 / 陈舒 主演: 杨幂 / 郑开元 / 江疏影 / 李梦 / 李贤宰 / 张榕容 / 黄轩 / 江一燕 / 张孝全 / 白百何 / 阮经天 类型: 爱情 制片国家/地区: 中国大陆 语言: 汉语普通话 / 法语 / 捷克语 / 日语 / 意大利语 / 英语 / 上海话 上映日期: 2015-08-20(中国大陆) 片长: 117分钟 又名: Cities in Love 这是一个“人越来越多 ，世界却越来越小”的——小世界。佛罗伦萨、布拉格、巴黎、上海、北海道小樽，五座城市，五段不同的爱情故事在这个“小世界”中上演。 浪漫的午夜巴黎上演了一段奇幻邂逅；神秘布拉格正经历一场忧伤的偶遇；美丽上海隐藏了一个关于美食与爱的秘密；北海道的唯美见证了一对新婚夫妇的蜜月之行；佛罗伦萨艳阳下的一场疯狂之旅也正拉开序幕。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恋爱中的城市.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnluepL",
    "yunPassword": "百度网盘(提取码：itmt)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "国产电影",
    "name": "情剑",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/情剑.jpg",
    "summaryOfMovie": "导演: 陈咏歌 编剧: 古龙 主演: 谢霆锋 / 钟欣潼 / 乔振宇 / 伊能静 / 杨蕊 / 谭耀文 / 赵鸿飞 / 周莉 / 计春华 / 徐向东 类型: 武侠 / 古装 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-07(中国大陆) 片长: 96分钟 又名: 浣花洗剑录电影版 / The Spirit of the Swords 一位手执名剑“长光”的年轻剑客（谢霆锋 饰）只为完成师父生前的遗愿——找到古代中原留下的九大旷世名剑，从北方蓬莱来到中原。而此前早已归顺朝廷的山东武林盟主、青萍剑客白三空（计春华 饰）利用与年轻剑客的比武诈死，成为朝廷埋藏在武林中的黑手。白三空的外孙方宝玉（乔振宇 饰）从小被外公禁止接触武功，然而为了替外公报仇，为了武林的正义，跟随“天下第一剑”紫衣候（谭耀文 饰）学武，誓要杀死蓬莱剑客。生命攸关的时刻，蓬莱剑客结识了黄河狂侠王巅之女珠儿（钟欣潼 饰），并且渐生情愫，方宝玉与紫衣候养女奔月（杨蕊 饰）两人也爱得难舍难分。青木堡少堡主木郎神君（赵鸿飞 饰）的朝廷锦衣卫身份终于暴露，朝廷意欲借武林中人控制武林，寻找罗雅古城宝藏的目的彻底呈现出来。 一场武林浩劫正在上演，每一个人的立场都真相大白。在纷争中发现对方竟是同母异父亲兄亲的蓬莱剑客和宝玉决定联手对付木郎神君，然而木郎神君已经炼成了混元神功，就在那千钧一发时刻，木郎神君死在了心爱的女人——脱尘郡主（伊能静 饰）的剑下，纷争也随之结束。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/情剑.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eQfiqNg",
    "yunPassword": "百度网盘(提取码：9t7u)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "欧美电影",
    "name": "爷们些",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/爷们些.jpg",
    "summaryOfMovie": "导演: Ben Palmer 编剧: Tess Morris 主演: 西蒙·佩吉 / 蕾克·贝尔 / 奥莉维亚·威廉姆斯 / 罗里·金奈尔 / 奥菲利亚·拉维邦德 / 斯蒂芬·坎贝尔·莫尔 / 哈丽特·瓦尔特 / 亨利·劳埃德-休斯 / 肯·斯托特 / 莎朗·豪根 / 王丽雅 / 迪恩·查尔斯·查普曼 / Paulina Boneva 类型: 喜剧 / 爱情 制片国家/地区: 英国 / 法国 语言: 英语 上映日期: 2015-05-29(英国) 片长: 88分钟 又名: 雄风再起 / 爷们点 宅女南希决定走出房门，积极地生活，阴差阳错假扮“火车怪客”，与陌生男子杰克约会，情投意合的二人能否在真相大白后，得到happily ever after？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/爷们些封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1jGfFYIi",
    "yunPassword": "百度网盘(提取码：5b6v)",
    "imageOfMovieHeight": "984",
    "imageOfMovieWidth": "690"
  },
  {
    "type": "日韩电影",
    "name": "国际市场",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/国际市场.jpg",
    "summaryOfMovie": "导演: 尹齐均 编剧: 朴秀真 主演: 黄政民 / 金允珍 / 吴达洙 / 张英南 / 郑镇荣 / 罗美兰 / 金瑟祺 / 郑允浩 / Stella Choe 类型: 剧情 / 家庭 官方网站: http://www.kukje2014.co.kr/ 制片国家/地区: 韩国 语言: 韩语 / 英语 / 德语 上映日期: 2014-12-17(韩国) 片长: 126分钟 又名: 半世纪的诺言(港) / 给父亲的承诺 / Ode to My Father / The International Market 朝鲜战争期间，少年尹德秀随同父母登上美军的救援船，却遭遇了毕生难忘的生离死别。战火虽然停息，南北半岛则一分为二，饱受炮火荼毒的北方故乡遥不可及。长大之后，代替父亲成为顶梁柱的德秀（黄政民 饰）努力赚钱，为了筹备弟弟妹妹的学费，他和童年好友千达九（吴达洙 饰）前往西德当起了矿工。万里家国，乡愁如缕，孤独的德秀偶然邂逅在德国念护士专业的韩国女孩英子（金允珍 饰），从此黑若煤炭的生活照进了灿烂光芒。快乐的时光与死亡的磨难如影随形，好在在经历了生死考验之后，德秀回到朝思暮想的家中，并赢得了英子的芳心。 漫长而坎坷的人生路，德秀在妻子、亲朋的陪伴下艰难前行.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/国际市场封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o6pHlua",
    "yunPassword": "百度网盘(提取码：y6fp)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "421"
  },
  {
    "type": "国产电影",
    "name": "三城记",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/三城记.jpg",
    "summaryOfMovie": "导演: 张婉婷 编剧: 张婉婷 / 罗启锐 主演: 刘青云 / 汤唯 / 秦海璐 / 井柏然 / 黄觉 / 金燕玲 / 李建义 / 焦刚 / 陈欣健 类型: 剧情 / 爱情 制片国家/地区: 中国大陆 / 香港 语言: 汉语普通话 上映日期: 2015-08-27(中国大陆) 片长: 130分钟 又名: Tale of Three Cities 在那个动荡的四、五十年代，爱情绝对得来不易——一件订情信物、一首情歌、一个约定都足以令恋人魂牵梦萦。 身份复杂的警察房道龙（刘青云 饰）遇上具有传奇色彩的女子陈月荣（汤唯 饰），他们的爱情故事横越了三个城市：他们在安徽相爱，在上海分离，彼此仍坚守一个约定——在香港等候重聚。那夜，房道龙在港岛岸边等待接载月容的小船靠岸，却不料小船发生变故，月荣最后能否顺利抵港，与道龙开展新生活？ 影片取材自真实故事，讲述一段父辈的爱情故事。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/三城记封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eAxrS",
    "yunPassword": "百度网盘(提取码：xlb3)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "我是奋青",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是奋青.jpg",
    "summaryOfMovie": "导演: 鸿水 编剧: 鸿水 主演: 孙坚 / 毛晓彤 / 范逸臣 / 杨洋 / 魏大勋 / 苑琼丹 / 张阳阳 / 付梦妮 类型: 喜剧 / 爱情 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-28(中国大陆) 片长: 93分钟 又名: The Fighting Youth 情感作家许天天（孙坚 饰）遭遇女友劈腿，捉奸在床，痛苦不已。不料，90后小清新苏昰（毛晓彤 饰）的突然闯入，使得这对欢喜冤家从第一次见面就唇枪舌战、互不相让；而天天的上司凤姐（苑琼丹 饰）趁机下手抢吃小鲜肉；他的好基友方向（范逸臣 饰）是个工作狂，和准女友白果（杨洋 饰）的感情一直若即若离。当许天天逐步走出感情的阴影时，没想到事业上遇到了挫折，而在苏昰的鼓励下，许天天开始创业，他和苏昰的感情也悄然发生着变化，而方向的意外遭遇带给了他们沉重的打击。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是奋青封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3F9QPR",
    "yunPassword": "百度网盘(提取码：vjjc)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "格蕾丝煽动成功",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/格蕾丝煽动成功.jpg",
    "summaryOfMovie": "导演: Vince Marcello 编剧: Jessica O'Toole / Amy Rardin 主演: 维吉妮娅·马德森 / Lili Bordán /             凯特琳· 卡迈克尔 类型: 家庭 制片国家 / 地区: 美国 语言: 英语 上映日期: 2015 - 06 - 09 又名: American Girl: Grace Stirs Up Success 格蕾丝期待着暑期的来临， 好开始她和朋友之间的创业。 但她母亲宣布去巴黎打乱了她的这个计划。 在巴黎， 格蕾丝不得不学着和她的法国侄女希尔维相处， 并找到了意想不到的创业灵感。 就在那时， 她发现， 激励她创业热情的爷爷奶奶的面包店即将关门。 她和朋友们能否拯救面包店呢？ ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/格蕾丝煽动成功封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1dD9CvkP",
    "yunPassword": "百度网盘(提取码：4t6x)",
    "imageOfMovieHeight": "592",
    "imageOfMovieWidth": "474"
  },
  {
    "type": "日韩电影",
    "name": "再见金钱，前往贫困村",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/再见金钱，前往贫困村.jpg",
    "summaryOfMovie": "导演: 松尾铃木 编剧: 松尾スズキ / いがらしみきお(原作) 主演: 松田龙平 / 阿部隆史 / 松隆子 / 二阶堂富美 / 片桐入 / 中村优子 / 村杉蝉之介 / 伊势志摩 / オクイシュージ / 茂吕师冈 / 荒川良良 / 皆川猿时 / 松尾铃木 / 西田敏行 官方网站: jinuyo-saraba.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-04-04(日本) 片长: 121分钟(日本) 根据日本漫画人气漫画「かむろば村へ」改编的真人电影「再见金钱，前往贫困村」确定将于2015年4月4日上映，松田龙平、阿部隆史和松隆子都将出演这部电影。 日本人气男星松田龙平确定主演由导演松尾铃木时隔7年执导的新片《再见金钱，前往贫困村》（暂译）。松田曾在导演松尾执导的首部电影《恋之门》（2004）中担当过主演，此次是松田时隔10年再度主演由导演松尾执导的影片。此外，阿部隆史、松隆子、西田敏行、二阶堂富美等人气影星也将有精彩出演。 该片根据漫画家五十岚三喜夫在2007年~2008年推出的人气漫画改编，讲述了对金钱过敏的银行职员高见武晴，为了过上与金钱绝缘的生活，来到位于日本东北部的一个贫穷村落，高见将与一根筋的村民们过上没有钱也能开心生活的日子。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/再见金钱，前往贫困村封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJ7Waz5",
    "yunPassword": "百度网盘(提取码：hjo1)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "日韩电影",
    "name": "拉链（桃色丑闻）",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/拉链 桃色丑闻.jpg",
    "summaryOfMovie": "导演: Mora Stephens 编剧: Mora Stephens / Joel Viertel 主演: 帕特里克·威尔森 / 琳娜·海蒂 / 迪安娜·阿格隆 / 阿丽克丝·布莱肯瑞吉 / 埃莲娜·萨汀 / 约翰·赵 / 理查德·德莱弗斯 / 雷·温斯顿 / 佩内洛普·米契尔 / 克里斯托弗·麦克唐纳 / 克里斯蒂安·奥列佛 / Patrick Kearns / Christopher Heskey / Judd Lormand / Justin Lebrun 类型: 剧情 / 惊悚 制片国家/地区: 美国 语言: 英语 上映日期: 2015-01-27(圣丹斯电影节) 片长: 103分钟 又名: 桃色丑闻 山姆不仅是个即将起步的政坛明星，更是个爱家的好男人，但是当他误闯了一夜情的桃色诱惑里头，原本一手掌握的大好前程，将随着性丑闻流出之后，跟着全面崩盘...。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/拉链 桃色丑闻封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1dDwff6T",
    "yunPassword": "百度网盘(提取码：1du6)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "港台电影",
    "name": "太平轮(下)：彼岸",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/太平轮(下)：彼岸.jpg",
    "summaryOfMovie": "导演: 吴宇森 编剧: 王蕙玲 / 苏照彬 / 陈静慧 主演: 章子怡 / 金城武 / 宋慧乔 / 黄晓明 / 佟大为 / 长泽雅美 / 秦海璐 / 俞飞鸿 / 杨祐宁 / 杨贵媚 / 丛珊 / 吴飞霞 / 于震 / 王千源 / 林保怡 / 林美秀 / 高捷 / 黄柏钧 / 寇家瑞 / 许还幻 / 尤勇 / 刘仪伟 / 黑木瞳 / 寇世勋 类型: 剧情 / 爱情 / 灾难 制片国家/地区: 中国大陆 / 香港 语言: 汉语普通话 / 日语 / 闽南语 / 上海话 上映日期: 2015-07-30(中国大陆) 片长: 131分钟 又名: 太平轮(下)：彼岸 / 太平轮II：惊涛挚爱(台) / 生死恋 / 1949 / The Crossing : Part 2 20世纪40年代，内战快结束之际，台湾医生严泽坤（金城武 饰）频繁往返于台湾通往大陆的邮轮“太平轮”上，以便购买药品。为了维持家庭生计，表面上他风平浪静，内心却一直没有停止思念因战争被迫分离的恋人雅子（长泽雅美 饰），而他的弟弟严泽明（杨佑宁 饰）则一心想去大陆搞革命，苦难家庭风雨飘摇。严泽坤偶遇有过一面之缘的将军雷义方（黄晓明 饰）夫人（宋慧乔 饰），雷将军的通信兵佟大庆（佟大为 饰）念念不忘底层女性于真（章子怡 饰），还有士官（王千源 饰）、夫人（俞飞鸿 饰），众人相逢在最后一班去台湾的“太平轮”上，书写了战乱年代的悲欢离合，命运的齿轮开启，大时代下的小人物该何去何从？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/太平轮(下)：彼岸封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1jGvUJT8",
    "yunPassword": "百度网盘(提取码：7no6)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "418"
  },
  {
    "type": "国产电影",
    "name": "桂宝之爆笑闯宇宙",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/桂宝之爆笑闯宇宙.jpg",
    "summaryOfMovie": "导演: 王云飞 编剧: 王云飞 / 阿桂 / 李亦树 主演: 王云飞 / 阿桂 / 杨天翔 / 山新 / 唐小喜 / 何冠男 / 图特哈蒙 / 阿杰 / 宝木中阳 / 刘校妤 类型: 喜剧 / 科幻 / 动画 制片国家/地区: 中国大陆 / 香港 语言: 汉语普通话 上映日期: 2015-08-06(中国大陆) 片长: 95分钟 又名: 疯了！桂宝 / 桂宝大电影之爆笑闯宇宙 / 桂宝 / Kwai Boo 桂宝（王云飞 配音）生活在蓝鲸市，他是个整天奇思妙想的超级天才，但他的新发明无意间引发了一场大麻烦，蓝鲸市长禁止了桂宝的发明权。正当桂宝失落之际，却收到了一封来自外太空的神秘邮件，竟然是宇宙顶级机器人发明大赛的邀请函。桂宝喜出望外，决定立刻向宇宙进发。与此同时，三位好友阿芹（杨天祥 配音）、阿桃（唐小喜 配音）、春妞（山新 配音）误入桂圆号飞船，他们和桂宝一起来到了大赛的主办星球基美星，基美星的主人拖拉基公爵热情好客，同时来参赛的还有其它外星球的天才们。比赛中，桂宝顺利进入决赛，他发明的超级厨神机器人力克强敌，取得了机器人发明大赛的冠军。就在桂宝等人开心的返回地球的途中，桂宝号突然失灵，危难之际，神秘外星人救了桂宝等人，随之而来的，是这一切背后的真相...... 电影改编自著名漫画家阿桂（桂华政）的经典漫画书《疯了！桂宝》。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/桂宝之爆笑闯宇宙封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1gdJHtjP",
    "yunPassword": "百度网盘(提取码：hhrl)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "日韩电影",
    "name": "思春期游戏",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/思春期游戏.jpg",
    "summaryOfMovie": "导演: 倉本雷大 编剧: マキタカズオミ / 倉本雷大 主演: 未来穂香 / 青山美郷 / 逢泽莉娜 / 伊藤梨沙子 / 荻野可鈴 / 井之上史織 / 本宮初芽 / 浅见姬香 / 真山明大 / 川村雪绘 类型: 剧情 官方网站: www.sishunki-g.com 制片国家/地区: 日本 语言: 日语 上映日期: 2014-08-23(日本) 片长: 90分钟 又名: Finding the Adolescence 在一所远离大都会喧嚣的中学，女孩莲见鹰音（未来穂香 饰）和好友辻泽三佳（青山美乡 饰）正享受着最后的时光。喜爱画画的鹰音志愿报考美术学校，每当三佳阅读业已毕业的校友花冈奈津江（川村ゆきえ 饰）的小说《思春期游戏》时，她便在一旁静静地画下好友的容颜。偶然的一天，三佳在图书馆邂逅担任管理员的奈津江，她为此大喜过望，不仅将这一发现告诉了鹰音，还和憧憬的作家展开了积极的交流。她迷恋小说中对那段禁断之恋的刻画，甚至渐渐模糊了小说和现实的界限。当她最新作家所构建的世界中时，不知不觉间和鹰音渐渐疏远。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/思春期游戏.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mgkvuIk",
    "yunPassword": "百度网盘(提取码：vq4g)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "421"
  },
  {
    "type": "欧美电影",
    "name": "军情五处：利益之爭",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/军情五处：利益之爭.jpg",
    "summaryOfMovie": "导演: Bharat Nalluri 编剧: Jonathan Brackley / Sam Vincent 主演: 基特·哈灵顿 / 詹妮弗·艾莉 / 伊莱耶斯·加贝尔 / 拉娜·普尔弗 / 塔彭丝·米德尔顿 / 大卫·哈雷伍德 / 彼得·弗斯 / 蒂姆·麦克纳尼 / 埃莉诺·松浦 / 罗南·萨莫尔斯 / 拉斯科·阿特金斯 / Michael Wildman / Graham Curry 类型: 剧情 / 动作 / 惊悚 制片国家/地区: 英国 语言: 英语 上映日期: 2015-05-08(英国) 片长: 104分钟 又名: 军情五处电影版 恐怖分子卡西姆(伊莱耶斯·加贝尔饰)在押送过程中逃跑，皮尔斯随后失踪，被怀疑叛变，其门徒威尔(基特·哈灵顿饰演)被组织任命查出真相。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/军情五处：利益之爭封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1hqrpalu",
    "yunPassword": "百度网盘(提取码：tczl)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "华丽上班族",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/华丽上班族.jpg",
    "summaryOfMovie": "导演: 杜琪峰 编剧: 张艾嘉 主演: 周润发 / 张艾嘉 / 陈奕迅 / 汤唯 / 王紫逸 / 郎月婷 / 张兆辉 / 天心 / 车婉婉 / 洪天明 / 朱健钧 / 龚慈恩 类型: 剧情 / 喜剧 / 爱情 / 歌舞 制片国家/地区: 香港 / 中国大陆 语言: 汉语普通话 / 粤语 上映日期: 2015-09-02(中国大陆) / 2015-09-24(香港) 片长: 119分钟 又名: 华丽上班族之生活与生存 / Office / Design for Living 清晨，职场菜鸟李想（王紫逸 饰）踏入众信贸易集团大楼，开始第一天工作。公司里，想结识应聘助理的年轻女孩何琪（郎月婷 饰）。但何琪真正身份是董事长何仲平（周润发 饰）的女儿，更引起同事猜疑，幸得CEO张威（张艾嘉 饰）帮忙渡过难关。张威忙于公司上市，却得知何仲平欲让女儿接手众信，心死之下决定为自身利益盘算，因而联手公司副总王大伟（陈奕迅 饰），实施神秘计划，想更在不知不觉间卷入其中。就在张威逐步推动计划时，王大伟却因沉迷股权交易负债累累，被迫利用情场失意的财务总监苏菲（汤唯 饰），陷张威等人为被动。更意想不到的是，何仲平从头到尾都在掌控一切，一段职场残酷对决，即将上演.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/华丽上班族封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mg1Wmww",
    "yunPassword": "百度网盘(提取码：wamx)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "欧美电影",
    "name": "末日崩塌",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/末日崩塌.jpg",
    "summaryOfMovie": "导演: 布拉德·佩顿 编剧: 卡尔顿·库斯 / 安德烈·法布里齐奥 / 杰里米·帕斯莫尔 主演: 道恩·强森 / 亚历珊德拉·达达里奥 / 卡拉·古奇诺 / 雨果·约翰斯通-伯特 / 雅奇·潘嘉比 / 科尔顿·海恩斯 / 艾恩·格拉法德 / 保罗·吉亚玛提 / 凯莉·米洛 / 李威尹 / 瓦内萨·罗斯 / 马特·杰拉德 / 阿特·帕金森 / 罗宾·阿特金·唐斯 / 艾伦·D·柏温 / 亚历克·乌特戈夫 / 摩根·格莉芬 / 杰米斯·巴特勒 / 艾伦·波普尔顿 类型: 动作 / 冒险 / 灾难 制片国家/地区: 美国 / 澳大利亚 语言: 英语 上映日期: 2015-06-02(中国大陆) / 2015-05-29(美国) 片长: 114分钟 又名: 加州大地震(台) / 圣安地列斯 前美国大兵雷蒙德·盖恩斯（道恩·强森 Dwayne Johnson 饰）在结束硝烟战火的生涯后，而今成为洛杉矶消防局的直升机救援人员。虽然工作中全力以赴，受人敬仰，值得信赖，这些却都无法挽回他失败的婚姻。某次短暂休假后，雷重返岗位，这时在内华达州南部发生了百年不遇的大地震，胡佛水坝在强震中被彻底摧毁。未过多久，又一轮强震从旧金山袭向了洛杉矶，雷在直升机上目睹了繁华城市转眼变成废墟的可怕一幕。 此时他的妻子艾玛（卡拉·古奇诺 Carla Gugino 饰）和女儿布蕾克（亚历珊德拉·达达里奥 Alexandra Daddario 饰）此时分处两座城市，为了拯救最爱的两个人，他只身一人，勇往直前，与地震展开争分夺秒的赛跑.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/末日崩塌封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1hqCnFpy",
    "yunPassword": "百度网盘(提取码：g2gt)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "421"
  },
  {
    "type": "欧美电影",
    "name": "侏罗纪世界",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/侏罗纪世界.jpg",
    "summaryOfMovie": "导演: 科林·特雷沃罗 编剧: 里克·杰法 / 阿曼达·斯尔沃 / 德里克·康纳利 / 科林·特雷沃罗 / 迈克尔·克莱顿 主演: 克里斯·普拉特 / 布莱丝·达拉斯·霍华德 / 文森特·多诺费奥 / 泰·辛普金斯 / 尼克·罗宾森 / 奥玛·赛 / 黄荣亮 / 伊尔凡·可汗 / 朱迪·格雷尔 / 杰克·约翰逊 / 劳伦·拉普库斯 / 凯蒂·麦克格拉思 / 布莱恩·泰 / 埃迪·J.费尔南德斯 / 因德尔·库马尔 / 安迪·巴克利 / 吉米·法伦 类型: 动作 / 科幻 / 冒险 官方网站: www.jurassicworld.com 制片国家/地区: 美国 / 中国大陆 语言: 英语 上映日期: 2015-06-10(中国大陆) / 2015-06-12(美国) 片长: 124分钟 又名: 侏罗纪公园4 / Jurassic Park IV / Jurassic Park 4 21世纪，曾经诞生过第一只恐龙的努布拉岛，在经历了一系列的惨剧之后迎来新的时代，如今这里经马斯拉尼之手建成了规模宏大的主题公园“侏罗纪世界\"，数量繁多的远古生物每天都吸引数以万计的游客前来一饱眼福。为了吸引更多的游客，公司授意创意实验室采用不同动物的基因创造了集力量、速度和智慧于一体的暴虐霸王龙。作为负责人的克莱尔（布莱丝·达拉斯·霍华德 Bryce Dallas Howard 饰）原打算请专门负责迅猛龙的欧文·格雷迪（克里斯·普拉特 Chris Pratt 饰）评估暴虐霸王龙的防护设施，谁知这头可怕的怪物竟然骗过了精密仪器的监视和人类的眼睛，以迅雷不及掩耳的速度逃到了外面，随后对所见的一切生物展开了无差别的血腥屠杀。 原本快乐祥和的公园乱作一团，克莱尔必须深入危险之地救出两个被困的外甥，而欧文则不可避免地带着他的迅猛龙猎人团队迎战史无前例的的可怕对手.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/侏罗纪世界封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1hq52dVI",
    "yunPassword": "百度网盘(提取码：betf)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "终结者：创世纪",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/终结者：创世纪.jpg",
    "summaryOfMovie": "导演: 阿兰·泰勒 编剧: 莱塔·卡罗格里迪斯 / 帕特里克·卢西尔 / 詹姆斯·卡梅隆 / 盖尔·安妮·赫德 主演: 阿诺·施瓦辛格 / 杰森·克拉科 / 艾米莉亚·克拉克 / 杰·科特尼 / J·K·西蒙斯 / 戴奥·奥柯奈伊 / 马特·史密斯 / 考特尼·万斯 / 李秉宪 / 迈克尔·盖拉迪斯 / 何家蓓 / 韦恩·巴斯楚普 / 格雷戈里·艾伦·威廉斯 / 奥托·桑切斯 / 马蒂·费拉罗 / 格里夫·弗斯特 / 伊恩·埃瑟里奇 / 诺兰·格罗斯 / 塞思·梅里韦瑟 / 阿非莫·奥米拉 / 特瑞·韦伯 / 凯莉·奥马利 类型: 动作 / 科幻 / 冒险 官方网站: www.terminatormovie.com 制片国家/地区: 美国 语言: 英语 上映日期: 2015-08-23(中国大陆) / 2015-07-01(美国) 片长: 126分钟 / 120分钟(网络版) 又名: 终结者5 / 未来战士：创世智能(港) / 魔鬼终结者：创世契机(台) / 终结者：创世 / 终结者：造物主 / Terminator 5 / Terminator: Genesis 天网拥有独立意识后，对创造它的人类展开血腥屠杀。此后的岁月，约翰·康纳（杰森·克拉科 Jason Clarke 饰）率领战友和天网的机器人大军进行着旷日持久的战争。在关键的一次战役过后，天网将终结者派往1984年的洛杉矶，企图杀害约翰的妈妈莎拉（艾米莉亚·克拉克 Emilia Clarke 饰）。而约翰则将自己最亲密的战友————同时也是他的生身父亲凯尔·里斯（杰·科特尼 Jai Courtney 饰）派往过去。凯尔刚刚抵达洛杉矶便遭到液态金属终结者T-1000（李秉宪 饰）的袭击。与此同时，“老爹\"（阿诺·施瓦辛格 Arnold Schwarzenegger 饰）则与莎拉联手干掉了终结者T-800（阿诺·施瓦辛格 Arnold Schwarzenegger 饰）。 似乎过去的事情悄然改变，凯尔则从时间旅行中的遭遇得到灵感，与莎拉穿越来至2017年，尝试阻止天网的诞生.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/终结者：创世纪封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1kTtQD3T",
    "yunPassword": "百度网盘(提取码：mgxu)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "421"
  },
  {
    "type": "国产电影",
    "name": "百团大战",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/百团大战.jpg",
    "summaryOfMovie": "导演: 宁海强 / 张玉中 编剧: 董哲 / 刘英学 主演: 唐国强 / 王伍福 / 陶泽如 / 刘之冰 / 印小天 / 吴越 / 宋运成 / 赵晓明 / 平田康之 / 大村波彦 / 邓超 类型: 历史 / 战争 制片国家/地区: 中国大陆 语言: 汉语普通话 / 日语 上映日期: 2015-08-28(中国大陆) 片长: 111分钟 又名: The Hundred Regiments Offensive 1940年，世界反法西斯战场进入最艰难时期。欧洲战场，纳粹军队闪击波兰后，连下荷兰、比利时和卢森堡、挪威。1940年6月14日，号称世界列强之一的法国投降，希特勒在凯旋门前阅兵，叫嚣将实施“海狮行动\"，进攻英国。一直支持中国的苏联，为避免两面受敌，只能和日本签署满蒙边界停火协议。而在中国，正面战场上的国民党军队节节败退，为了抵抗日军的进攻，残酷的枣宜会战中，中将张自忠（邓超 饰）以身殉国，江汉平原以至华中大部又落入日本人之手。 中国陕北延安，在日军轰炸机频繁的轰炸下，毛泽东（唐国强 饰）、朱德（王伍福 饰）等中共领导人为中国的前途命运忧心忡忡。他们决定在这个时候，共产党和所领导的八路军新四军要挺身而出，要打破亡国和投降的论调，要为世界反法西斯战场注入希望，要向侵犯中国的日军打下当头一棒。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/百团大战封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1jGvU6FW",
    "yunPassword": "百度网盘(提取码：laxc)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "碟中谍5：神秘国度",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/碟中谍5：神秘国度.jpg",
    "summaryOfMovie": "导演: 克里斯托弗·麦奎里 编剧: 克里斯托弗·麦奎里 / 德鲁·皮尔斯 / 布鲁斯·盖勒 主演: 汤姆·克鲁斯 / 杰瑞米·雷纳 / 西蒙·佩吉 / 丽贝卡·弗格森 / 文·瑞姆斯 / 西恩·哈里斯 / 西蒙·迈克伯尼 / 张静初 / 汤姆·霍兰德 / 延斯·赫尔腾 / 亚历克·鲍德温 / 亚历克·乌特戈夫 / 赫敏·科菲尔德 / 阿美莉嘉·奥利沃 / 拉斯科·阿特金斯 / 肖恩·克罗宁 / 明格斯·约翰斯顿 类型: 动作 / 惊悚 / 冒险 官方网站: http://www.missionimpossible.com/ 制片国家/地区: 美国 / 香港 / 中国大陆 语言: 英语 / 瑞典语 / 德语 上映日期: 2015-09-08(中国大陆) / 2015-07-31(美国) 片长: 131分钟 又名: 职业特工队5：叛逆帝国(港) / 不可能的任务：失控国度(台) / 碟中谍：失控国度 / 碟中谍5 / Mission: Impossible 5 / M:i 5 资深特工伊森·亨特（汤姆·克鲁斯 Tom Cruise 饰）也有百密一疏时刻，他在接收最新任务时遭到神秘组织“辛迪加\"的暗算落入对方手中。辛迪加是一支由全球各地前特工组成的秘密组织，此前一直被CIA视为空穴来风。在对方成员伊莎·福斯特（丽贝卡·弗格森 Rebecca Ferguson 饰）的帮助下，伊森逃出生天，并及时向威廉·布莱德（杰瑞米·雷纳 Jeremy Renner 饰）汇报了辛迪加确切存在的消息。然而此时布莱德的日子并不好过，他负责的IMF机构因俄罗斯核弹头等事件遭到CIA指控并责令解散。在得知该组织密谋刺杀奥地利总统时，伊森联系上了老搭档班吉·邓恩（西蒙·佩吉 Simon Pegg 饰）展开行动，并于谜样女郎伊莎再度相会。接下来的一连串事件中，辛迪加的真面目逐渐揭开，而他们也终于显露出真实的目的.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/碟中谍5：神秘国度封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnhVHAR",
    "yunPassword": "百度网盘(提取码：r6xw)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "399"
  },
  {
    "type": "国产电影",
    "name": "十二公民",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/十二公民.jpg",
    "summaryOfMovie": "导演: 徐昂 编剧: 李玉娇 / 韩景龙 / 徐昂 主演: 何冰 / 韩童生 / 钱波 / 赵春羊 / 米铁增 / 高冬平 / 张永强 / 李光复 / 王刚 / 班赞 / 刘辉 / 雷佳 类型: 剧情 / 悬疑 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-05-15(中国大陆) / 2014-10-19(罗马电影节) 片长: 106分钟 又名: 12公民 / 十二个中国人 / 12 Citizens 暑期一所政法大学内，未通过英美法课程期末考试的学生迎来补考。他们组成模拟西方法庭，分别担任法官、律师、检察官等角色，审理的正是一桩社会上饱受争议的“20岁富二代弑父\"案。12位学生家长组成了陪审团。这些人来自社会不同阶层，有医生、房地产商、保安、教授、保险推销员等。他们在听取学生法庭审理后，将对本案做出最终“判决\"。 这12名陪审员互不相识，但按照规则，他们必须达成一致，才能结束审判。第一轮投票，就有11人认定“富二代\"有罪，所有人证物证都指向这一结果的情形下，这位年轻的嫌疑犯离舆论上的死亡只有一步之遥。所有的线索都被逐一讨论，随着审判的进行，疑点出现，每个人背后的故事也浮出水面...... 本片改编自《十二怒汉》，获得2014年罗马国际电影节最高奖。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/十二公民封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1hXB7C",
    "yunPassword": "百度网盘(提取码：50cm)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "450"
  },
  {
    "type": "欧美电影",
    "name": "明日世界",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/明日世界.jpg",
    "summaryOfMovie": "导演: 布拉德·伯德 编剧: 布拉德·伯德 / 达蒙·林德洛夫 / 杰夫·詹森 主演: 布丽特·罗伯森 / 乔治·克鲁尼 / 拉菲·卡西迪 / 休·劳瑞 / 托马斯·罗宾逊 / 皮尔斯·加格农 / 蒂姆·麦格罗 / 朱迪·格雷尔 / 凯瑟琳·哈恩 / 科甘·迈克尔·凯 / 洛奇林·莫罗 / 阿莉娅·奥伯里恩 / 达伦·萨赫拉维 / 迈克尔·罗 / 克里斯·鲍尔 / 莫妮卡·甘德顿 / 保罗·麦克吉莱恩 / 艾米·伊斯特尔 / 杰迪代亚·古达克 / 马库斯·罗斯纳 / 马修·麦考尔 / 克林特·卡尔顿 类型: 动作 / 科幻 / 冒险 官方网站: movies.disney.com/tomorrowland/ 制片国家/地区: 美国 / 西班牙 语言: 英语 / 法语 / 日语 上映日期: 2015-05-26(中国大陆) / 2015-05-22(美国) 片长: 130分钟 又名: 未来乐园 / 未来世界 / 1952 / Tomorrowland: A World Beyond / Project T 二十世纪初，爱迪生、巴黎铁塔总设计师埃菲尔、“交流电之父\"尼古拉·特斯拉和其他顶尖的科学家、艺术家组成了一个秘密团体，共同打造一个理想计划————明日世界，传言中，华特·迪士尼也是创办人之一，在他的遗物中有一个黑盒子，装着神秘的机关。可是这个计划却出了意外，“明日世界\"也从此消失。 弗兰克（乔治·克鲁尼 George Clooney 饰）少年时曾亲眼目睹“明日世界\"，但意外之后便过着半隐居的生活，直到聪明的少女凯茜（布丽特·罗伯森 Britt Robertson 饰）找上门，凯茜对科学和生命都充满热情，在无意间发现了神秘的徽章，她需要弗兰克的协助，破解零星线索，找到隐藏在神秘时空里的“明日世界\"，以改变人类的命运.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/明日世界封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntlEWxb",
    "yunPassword": "百度网盘(提取码：f4sy)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "450"
  },
  {
    "type": "日韩电影",
    "name": "暗杀教室",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/暗杀教室.jpg",
    "summaryOfMovie": "导演: 羽住英一郎 编剧: 金沢達也 主演: 山田凉介 / 菅田将晖 / 山本舞香 / 竹富圣花 / 优希美青 / 上原实矩 / 葵若菜 / 知英 / 加藤清史郎 / 高岛政伸 / 椎名桔平 / 二宫和也 类型: 剧情 / 动作 官方网站: ansatsu-movie.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-03-21(日本) 片长: 110分钟 又名: Assassination Classroom 故事以椚丘中学3年E班为舞台，被称为史上最凶恶的超生物“杀老师\"将月球炸掉了七成，并扬言明年要炸掉地球，却以不明目的而担任椚丘中学3年E班的教师。各国首脑将暗杀的重任交给椚丘中学3年E班，配送特制的武器给他们，希望学生们能在一年之内将杀老师杀掉，成功报酬是一百亿日元。在第二学期开始，国家决定成功暗杀的人，个人就得到一百亿日元报酬，其参加的团体可共得三百亿日元报酬。各同学想尽办法杀死这名老师，故事围绕着非日常的校园生活而展开.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/暗杀教室封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bn3AkMz",
    "yunPassword": "百度网盘(提取码：v5cj)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "337"
  },
  {
    "type": "欧美电影",
    "name": "未成年之欲",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/未成年之欲.jpg",
    "summaryOfMovie": "导演: Blaine Thurier 编剧: 杰森·斯通 / Blaine Thurier 主演: 加利·艾尔维斯 / 埃曼妞·沃吉亚 / 达里尔·沙巴拉 / 克里斯汀·鲍尔 / 琼恩·柯 / 乔恩·多尔 / 阿里·塔塔林 / Annie Clark / Hilary Jardine 类型: 喜剧 制片国家/地区: 加拿大 语言: 英语 上映日期: 2014-09-10(多伦多电影节) 片长: 80分钟 又名: 破处之旅 主人公是一名不受欢迎的高中生，为了避免被自己的邪教父母献祭给魔鬼，他必须想方设法地失去处男之身。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/未成年之欲封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3fHzvf",
    "yunPassword": "百度网盘(提取码：9ae7)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "416"
  },
  {
    "type": "欧美电影",
    "name": "堕落色戒",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/堕落色戒.jpg",
    "summaryOfMovie": "导演: Joaquin Rodriguez             编剧: Dias Gomes             主演: Alejandro Estrada / Nataly Uma & ntilde;a / Roberto Palazuelos             类型: 剧情 / 爱情             制片国家 / 地区: 墨西哥             语言: 西班牙语             上映日期: 2014             片长: 93 Mins             Oskar驾车差点撞到Anabel， 之后一直跟她到她工作的地方， 彼此一见锺情， 炽热的浪漫瞬间展开。 Anabel很快就爱上Oskar， 更与他沉迷于性爱游戏。 虽然Anabel愿意尝试和配合， 但Oskar还是不满足， 总是希望得到更多。 最后， 他糜烂的性爱游戏和自毁的倾向， 令他做出伤害Anabel的行为， 破坏二人之间的信任和尊重。 经历悲惨的一夜， Anabel伤痛欲绝， 谁知医生带来的噩耗， 更让她跌进抑郁的深渊， 从此走上不归路。 ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/堕落色戒截图.png",
    "baiduyun": "http://pan.baidu.com/s/1nt3VuDb",
    "yunPassword": "百度网盘(提取码：3jbq)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "524"
  },
  {
    "type": "国产电影",
    "name": "无脚鸟",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/无脚鸟.jpg",
    "summaryOfMovie": "导演: 刘兆东 主演: 戚云鹏 / 徐扬 / 李雨格 类型: 剧情 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-21(中国大陆) / 2013-06-15(上海电影节) 片长: 97分钟 赵卫健和妻子洪丽非常相爱，他们的女儿现在已经6岁了。五年前，洪丽出车祸，身体受了严重创伤，其症状有点象帕金森综合症，就是人们常说的老年痴呆症。赵卫健不得不一边工作一边照顾生病的妻子，原本幸福的三口之家，就此陷入了不堪的生活。 赵卫健对洪丽的照顾还是挺仔细的，洪丽的状态不是很稳定，有时没来由的就大喊大叫，弄得保姆都很害怕。洪丽的状态时好时坏，状态不好时仿佛又回到了以前的状态，眼睛永远看着一个方向。他们的生活就像一只一直飞翔的无脚鸟，谁也不能停下来。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/无脚鸟封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bn6Yb63",
    "yunPassword": "百度网盘(提取码：75n7)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "燃烧的亡魂",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/燃烧的亡魂.jpg",
    "summaryOfMovie": "导演: Residente 编剧: Jeff Miller 主演: 丹尼·特雷霍 / Thomas Downey 类型: 恐怖 制片国家/地区: 美国 语言: 英语 片长: 90 / 83分钟 A sheriff must rescue an estranged family from a mountain during a volcano eruption and fight off a horde of lava-filled zombies brought to life by a curse.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/燃烧的亡魂封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mglGLpI",
    "yunPassword": "百度网盘(提取码：gbz7)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "425"
  },
  {
    "type": "日韩电影",
    "name": "二十",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/二十.jpg",
    "summaryOfMovie": "导演: 李炳宪 编剧: 李炳宪 主演: 金宇彬 / 李俊昊 / 姜河那 / 郑素敏 / 李侑菲 / 闵孝琳 / 郑珠妍 类型: 剧情 / 喜剧 制片国家/地区: 韩国 语言: 韩语 上映日期: 2015-03-25(韩国) 片长: 115分钟 又名: 二十行不行(台) / 二十岁 / 20 / Twenty 该片讲述的是三个二十岁的小伙儿青春年少的故事，金宇彬饰演的是一个不善处理异性关系、冲动热血、游手好闲的家伙。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/二十封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntMS4Db",
    "yunPassword": "百度网盘(提取码：31up)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "418"
  },
  {
    "type": "欧美电影",
    "name": "糟糕的夜晚",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/糟糕的夜晚.jpg",
    "summaryOfMovie": "导演: Chris Riedell Nick 主演: Molly Ringwald June Diane Raphael 类型: 喜剧 制片国家/地区: 美国 语言: 英语 上映日期: 2015-07-21 又名: 囧夜 When Kate and Abby are mistaken for famous art thieves, their fun night out quickly goes from good to bad.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/糟糕的夜晚封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bndRCAj",
    "yunPassword": "百度网盘(提取码：4trm)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "400"
  },
  {
    "type": "国产电影",
    "name": "小西天狄道传奇",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小西天狄道传奇.jpg",
    "summaryOfMovie": "导演: 张忠 编剧: 原瑾鸿 / 李文骏 主演: 乌日根 / 夏晴 / 陈思娜 / 李晓文 / 吴克刚 / 董丹君 / 唐萍 / 杜少杰 / 朱航 类型: 爱情 / 历史 / 古装 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-07(中国大陆) 片长: 95分钟 又名: 狄道传奇 / 西部传奇 / Legend of Didao 唐时大月国王子乌力罕（乌日根 饰）逃到狄道避难，得到狄道兵马使李存山父女的帮助以及卧龙寺高僧索南坚教化，并由此放下仇恨精心修行，不想篡位的叔叔葛格尔并未放过他，还在伺机杀他灭口，被逼无奈的乌力罕逃回大月国着急父亲的旧部复国成功，却又因为爱人李晨轩（夏晴 饰）的离去而迁怒大唐，起兵攻占狄道，险些误将自己的儿子杀死，最后还是在索南坚“以身噬虎\"的精神感召下重新认识了自己，将大月国交给大唐，自己回到卧龙寺出家修行。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小西天狄道传奇封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eQdL0l0",
    "yunPassword": "百度网盘(提取码：p7w4)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "日韩电影",
    "name": "朝鲜名侦探：奴隶的女儿",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/朝鲜名侦探：奴隶的女儿.jpg",
    "summaryOfMovie": "导演: 金锡允 主演: 金明民 / 吴达洙 / 李沇熹 类型: 喜剧 / 犯罪 官方网站: josun-combi2015.kr 制片国家/地区: 韩国 语言: 韩语 上映日期: 2015-02-11(韩国) 片长: 125分钟 又名: 朝鲜名侦探2 该系列的上一部————《朝鲜名侦探：高山乌头花的秘密》于2011年春节档期上映，累计观影人数超过470万人，获得票房成功。而续集从拍摄之初就备受关注。《朝鲜名侦探》改编自金卓焕的历史小说《烈女门的秘密》，新作中剧本更加扎实，规模更加宏大，笑点看点十足，势必超越前作，给观众带来更强的感官体验。新片《朝鲜名侦探：消失的奴隶之女》沿用了原班创作班底，金锡允导演再执导筒，耗时四年打造。从公开的预告片来看，新片的拍摄规模远远超过前作，枪战爆破一样不少，连金闵自制的飞行器也将在片中亮相。 金明民与吴达庶时隔四年再次联手，预告片中已经气势不一般：黑暗中一名男子的身影渐渐浮现，眼神睿智、小胡子棱角分明，此人正是朝鲜的名侦探金闵（金明民 饰）；西弼（吴达庶 饰）出场时轻轻一甩时尚款的护耳帽，眼神表情充满自信。两人摆出姿势试图营造帅气感觉，反而更加具有喜感。金闵和西弼要解决的是不良银块流通事件，出众的头脑和天生的直觉引导他们著追踪背后黑手，制作手笔更高於前作。李沇熹饰演的妙龄女子则让金闵的调查大乱，在预告片中虽一闪而过，却存在感极强。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/朝鲜名侦探：奴隶的女儿封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3k0ShJ",
    "yunPassword": "百度网盘(提取码：zwcm)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "安乐乡",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/安乐乡.jpg",
    "summaryOfMovie": "导演: 利桑德罗·阿隆索             编剧: 利桑德罗· 阿隆索 / Fabian Casas             主演: 维果· 莫腾森 / Diego Roman / Ghita N & oslash;rby / Mariano             Arce / Viilbj & oslash;rk Malling Agger / Misael Saavedra /             Adri & aacute;n Fondari             类型: 剧情             制片国家 / 地区: 美国 / 阿根廷 / 丹麦             语言: 丹麦语 / 西班牙语             上映日期: 2014 - 05 - 18(戛纳电影节)             片长: 109 分钟             又名: 远征 / 丰饶之地 / Land of Plenty             十九世纪七十到八十年代， 曾参加过普丹战争的丹麦军官Gunner Dinesen（ 维果· 莫腾森）， 带着青春期女儿Ingeborg（ Viilbj & oslash;rk             Mollie             Malling） 从丹麦来到阿根廷， 加入阿根廷军队， 参加征服沙漠之战， 女儿却跟一个阿根廷士兵私奔， 生死未卜， 他从此踏上了荒漠里的绝望寻女之路。 ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/安乐乡封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1nwT9k",
    "yunPassword": "百度网盘(提取码：zf9j)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "423"
  },
  {
    "type": "日韩电影",
    "name": "名侦探柯南：业火的向日葵",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/名侦探柯南：业火的向日葵.jpg",
    "summaryOfMovie": "导演: 静野孔文 编剧: 樱井武晴 / 青山刚昌 主演: 高山南 / 小山力也 / 山崎和佳奈 / 山口胜平 / 林原惠美 / 更多... 类型: 动画 / 悬疑 官方网站: www.conan-movie.jp 制片国家/地区: 日本 语言: 日语 上映日期: 2015-10-23(中国大陆) / 2015-04-18(日本) 片长: 113分钟 又名: 名侦探柯南：剧场版第19部 / 名侦探柯南：2015年剧场版 在纽约拍卖会现场，全世界的大富豪汇集一堂，竞拍国际名画这便是，原本应该在日本被烧毁的梵高名画「向日葵」铃木次郎吉以远高于他人的价格·3亿美金 将此画拍下他的目的是集齐散落在世界各地的7幅「向日葵」以此能在日本举办史无前例的大规模展会。这则梦幻大新闻向全世界播 出的同时，柯南与小兰也津津有味的看着转播当正要征集专门保护「向日葵」的7人护卫队“七大武士\"的时候怪盗基德突然出现，撂下了「一定会将此画夺走」的宣战预告明明只偷大型宝石的基德为什么会对名画下手？就在此时，在一片骚动的会场上出现了追随基德而来的高中生侦探·工藤新一的身影！不久之后，在载有「向日葵」的客机飞往日本的途中在空中遭受到了“白色身影\"的突然袭击围绕独一无二的珍宝，谎言与真实交织的艺术推理剧拉开序幕。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/名侦探柯南：业火的向日葵封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qWqYhpq",
    "yunPassword": "百度网盘(提取码：21ue)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "419"
  },
  {
    "type": "欧美电影",
    "name": "掘火者",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/掘火者.jpg",
    "summaryOfMovie": "导演: 乔·斯万博格 编剧: Jake Johnson / Joe Swanberg 主演: 安娜·肯德里克 / 奥兰多·布鲁姆 / 布丽·拉尔森 / Jake Johnson / 山姆·洛克威尔 / 山姆·艾里奥特 / 克里斯·梅西纳 / 珍妮·斯蕾特 类型: 剧情 制片国家/地区: 美国 语言: 英语 上映日期: 2015-08-21(美国) 片长: 85分钟 It's a love story about a husband and wife, played by Jake Johnson and Rosemarie DeWitt. It's about the pleasures and pains of building a family with someone, and maintaining the excitement of a relationship over a long period of time.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/掘火者封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qWN2lKK",
    "yunPassword": "百度网盘(提取码：q3wt)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "港台电影",
    "name": "沙西米",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/沙西米.jpg",
    "summaryOfMovie": "导演: 潘志远 编剧: 潘志远 / 孙法钧 主演: 李康生 / 波多野结衣 / 纪培慧 / 拓也哥 类型: 喜剧 / 爱情 制片国家/地区: 台湾 语言: 汉语普通话 / 日语 上映日期: 2015-04-24(台湾) 又名: Sashimi 《沙西米》由潘志远执导，与亚太影展最佳编剧孙法钧共同编剧，描述日本成人片人气女星夏美（波多野结衣饰）因为长期合作的男优自杀，意外发现他是爱滋病带原者，让她决定到台湾结束被老天爷戏弄的人生。夏美在台湾遇见日本料理师傅振明（李康生饰），振明因为夏美和失联多时的妻子非常相像，对她产生好感，但也引发守候在身旁的小敏（纪培慧）反感。导演潘志远透露，《沙西米》的主题可以用“食色性也\"四个字贯穿，深刻探讨人的欲望，因此李康生分别将和波多野结衣与纪培慧有多场尺度大胆的情欲戏。 蔡明亮非常乐见李康生与其他导演合作，说自己看过《沙西米》的剧本，相信李康生能在这部片中有很好的发挥。李康生说，这次《沙西米》的尺度依然很大，但他一向“尺度无上限\"，对情欲戏早已驾轻就熟。他也透露，“沙西米\"（生鱼片）和过往蔡明亮作品中的“高丽菜\"和“西瓜\"一样，也有情欲暗示，同时也提到，为了演生鱼片师父而学切生鱼片的难度，和生吃高丽菜（注：电影《郊游》中，李康生曾有生吃高丽菜的戏份）差不多。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/沙西米封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o66BmGE",
    "yunPassword": "百度网盘(提取码：9ymv)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "419"
  },
  {
    "type": "国产电影",
    "name": "七月半之恐怖宿舍",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/七月半之恐怖宿舍.jpg",
    "summaryOfMovie": "导演: 杜潇傲 编剧: 云漠漠 / 贝宝 / 杨柳 主演: 余心恬 / 翟子陌 / 马元 / 付曼 / 陈美行 / 徐歉 / 孔铭 / 戴子翔 / 彭骞 / 梁立文 类型: 悬疑 / 惊悚 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-14(中国大陆) 片长: 93分钟 又名: 七月半 / 七月半之幽灵女舍 / Mid-July Days 传说每年农历七月半前后，死去的孤魂野鬼都会游走人间，去他们生前熟悉的地方，唤起尘封已久的孤魂孽怨...... 大一新生安澜（余心恬 饰）与室友一同入住了一间尘封多年、死过人且闹过鬼的宿舍314房间后，诡异事件就接二连三的发生，中元节后这几位青春靓丽的女大学生开始遭受着无孔不入的惊吓，甚至开始一个个离奇而恐怖地死去，安澜在找寻谜底时才发现，始终逃不开鬼节“七月半\"的宿命。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/七月半之恐怖宿舍封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3APhMP",
    "yunPassword": "百度网盘(提取码：oagk)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "欧美电影",
    "name": "狐狸猎手",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/猎狐捕手.jpg",
    "summaryOfMovie": "导演: 贝尼特·米勒 编剧: E·马克斯·弗莱 / 丹·福特曼 主演: 史蒂夫·卡瑞尔 / 查宁·塔图姆 / 马克·鲁弗洛 / 西耶娜·米勒 / 瓦妮莎·雷德格瑞夫 类型: 剧情 / 传记 / 运动 制片国家/地区: 美国 语言: 英语 上映日期: 2014-05-19(戛纳电影节) / 2015-01-16(美国) 片长: 134分钟 又名: 猎狐捕手(港) / 暗黑冠军路(台) / 狐狸捕手 / Mark v. Du Pont: The True Story of a Shocking Murder 马克（查宁·塔图姆 Channing Tatum 饰）是一名职业摔跤手，在过去的职业生涯中，他也曾有过辉煌的胜利，然而，如今，一切光芒都已经散去，他不过只一个碌碌无为的无名小卒。马克的哥哥大卫（马克·鲁法洛 Mark Ruffalo 饰）也是一名摔跤手，兄弟两人彼此之间关系十分要好，可是，马克明白，大卫有自己的家庭和事业，而自己却只有摔跤。 某日，马克意外受到了一位名为约翰（史蒂夫·卡瑞尔 Steve Carell 饰）的神秘富商的邀请，希望马克能够成为他所组建的摔跤队中的一员，在约翰的摔跤队中，马克找到了自己的价值所在，深受约翰重用的他成为了约翰唯一的朋友，然而，随着时间的推移，当大卫也加入了摔跤队后，一切都开始改变。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/狐狸猎手封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1nt7tfIh",
    "yunPassword": "百度网盘(提取码：zz2g)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "426"
  },
  {
    "type": "欧美电影",
    "name": "六年之痒",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/六年之痒.jpg",
    "summaryOfMovie": "导演: Hannah Fidell 编剧: Hannah Fidell 主演: 泰莎·法米加 / Ben Rosenfield / Lindsay Burdge 类型: 剧情 / 爱情 制片国家/地区: 美国 语言: 英语 上映日期: 2015-08-18 片长: 85分钟 A young couple's relationship gets bumpy as the end of their college life approaches.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/六年之痒截图.png",
    "baiduyun": "http://pan.baidu.com/s/1eQ4P48E",
    "yunPassword": "百度网盘(提取码：i089)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "日韩电影",
    "name": "聚会的目的",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/聚会的目的.jpg",
    "summaryOfMovie": "导演: 정대만 主演: 조인우 / 김유연 类型: 剧情 制片国家/地区: 韩国 语言: 韩语 上映日期: 2015-07-22(韩国) 片长: 100分钟 又名: Purpose of Reunion 韩国妹子的全新演出，不用想了就是那样的任性，你一定会被他们漂亮的外表所吸引，这一次如何完美的释放自己的激情，最后一定会发现原来还有这样出色的妹子，机会属于有准备的人，那么最漂亮的机会一定会等待着你的观看，这样的聚会，这样的目的，最后就让他看到了非常精彩的一刻！             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/聚会的目的截图.png",
    "baiduyun": "http://pan.baidu.com/s/1jGpis8u",
    "yunPassword": "百度网盘(提取码：xbwb)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "400"
  },
  {
    "type": "欧美电影",
    "name": "12回合3：致命禁闭",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/12回合3：致命禁闭.jpg",
    "summaryOfMovie": "导演: Stephen Reynolds 编剧: Nathan Brookes / Bobby Lee Darby 主演: 丹尼尔·库德摩尔 / 洛奇林·莫罗 / 罗杰·R.克劳斯 / 瑞贝卡·马绍尔 / 马修·哈里逊 / Toby Levins / Kirby Morrow 类型: 动作 制片国家/地区: 美国 语言: 英语 上映日期: 2015-09-11 片长: 90分钟 又名: Lockdown Lockdown Follows a police officer who returns to duty after recovering from a gun shot wound to discover incriminating evidence of illegal activities against those closest to him. He quickly finds himself trapped inside his own precinct, hunted and in search of the truth, as the crooked cops stop at nothing to recover the evidence.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/12回合3：致命禁闭封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1gdffa5X",
    "yunPassword": "百度网盘(提取码：qky5)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "欧美电影",
    "name": "公主夜游记",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/公主夜游记.jpg",
    "summaryOfMovie": "导演: 朱里安·杰拉德 编剧: Trevor De Silva / Kevin Hood 主演: 莎拉·加顿 / Bel Powley / 艾米丽·沃森 / 鲁伯特·艾弗雷特 / nm2930503 Jack Reynor / 罗杰·阿拉姆 / 杰克·拉斯基 / Anastasia Harrold / 鲁斯·西恩 / nm2807846 Jack Gordon / Sophia Di Martino / Laurence Spellman / Geoffrey Streatfeild / Shonn Gregory / Maria Lee Metheringham 类型: 剧情 / 爱情 制片国家/地区: 英国 语言: 英语 上映日期: 2015-05-15(英国) 片长: 97分钟 又名: 皇家公主出走记(港) / Girls' Night Out 1945年的一天，英国公主玛格丽特和妹妹伊丽莎白被批准可以离开白金汉宫一夜。于是她们在这一夜经历了浪漫邂逅，也遭遇了各种危险。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/公主夜游记封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnbPxPt",
    "yunPassword": "百度网盘(提取码：wr3c)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "426"
  },
  {
    "type": "日韩电影",
    "name": "闪烁的爱情",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/闪烁的爱情.jpg",
    "summaryOfMovie": "导演: 广木隆一 编剧: 咲坂伊绪 主演: 有村架纯 / 福士苍汰 / 山田裕贵 / 佐藤亚璃纱 / 入江甚仪 / 黑岛结菜 类型: 剧情 / 爱情 官方网站: www.strobe-movie.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-03-14(日本) 又名: Sutorobo ejji / Strobe Edge 电影《闪烁的爱情》改编自2007年开始在《别册玛格丽特》上连载的同名少女漫画，故事讲述木下仁菜子(有村架纯饰演)是直率文静的高中生，目前还没谈过恋爱。可是有一天，仁菜子在回家的电车上遇到了在学校里超受欢迎的男生一之濑莲(福士苍汰饰演)，两人屈指可数的对话，还有莲的笑容，都让仁菜子感受到不曾有的悸动，这种感情到底是什么呢？仁菜子真正的初恋即将开始了。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/闪烁的爱情封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1wQj0q",
    "yunPassword": "百度网盘(提取码：mfkd)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "国产电影",
    "name": "捉妖记",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/捉妖记.jpg",
    "summaryOfMovie": "导演: 许诚毅 编剧: 袁锦麟 主演: 白百何 / 井柏然 / 姜武 / 金燕玲 / 钟汉良 / 曾志伟 / 吴君如 / 汤唯 / 姚晨 / 闫妮 / 保剑锋 / 王栎鑫 / 郭晓冬 / 李菁菁 / 田雨橙 / 张悦轩 类型: 喜剧 / 奇幻 / 古装 制片国家/地区: 中国大陆 / 香港 语言: 汉语普通话 上映日期: 2015-07-16(中国大陆) 片长: 118分钟 又名: 聊斋之宅妖 / 聊斋之捉妖记 / Monster Hunt 山雄伟，海辽阔，经奇幻。自古以来人妖共存于世，人欲主天下，妖遂被驱逐入山。其后历朝，妖偶有越界，皆由捉妖天师秘密处理。老妖王辞世，妖界大乱，众妖越界流窜，一时间世间人妖难辨。在偏安深山的永宁村中，村长宋天荫（井柏然 饰）偶遇一路逐妖而来的菜鸟天师霍小岚（白百何 饰），在意外共度一夜后，被妖后托胎，随即生下了小妖王胡巴。为了自己的私心，小岚带着天荫一路同行前往顺天府，保护他躲过各种妖怪，也渐渐与天荫及胡巴产生了感情。然而为时已晚，胡巴已落入坏人之手，为营救胡巴，小岚与天荫在众人的帮助下勇闯登仙楼，与大反派葛千户（钟汉良 饰）展开一场殊死对决...... 人妖相克，究竟谁主天下？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/捉妖记封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1sjGEo5f",
    "yunPassword": "百度网盘(提取码：naxo)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "国产电影",
    "name": "煎饼侠",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/煎饼侠.jpg",
    "summaryOfMovie": "导演: 董成鹏 编剧: 董成鹏 / 苏彪 主演: 董成鹏 / 袁姗姗 / 柳岩 / 吴君如 / 曾志伟 / 岳云鹏 / 衣云鹤 / 梁超 / 潘斌龙 / 崔志佳 / 乔杉 / 郭采洁 / 邓超 / 尚格·云顿 / 小沈阳 / 宋小宝 / 刘晓光 / 王小利 / 陈思诚 / 林更新 / 陈羽凡 / 胡海泉 / 韩寒 / 陈赫 / 郑恺 / 包贝尔 / 郑伊健 / 陈小春 / 谢天华 / 林晓峰 类型: 喜剧 制片国家/地区: 中国大陆 语言: 汉语普通话 / 英语 / 粤语 上映日期: 2015-07-17(中国大陆) 片长: 113分钟 又名: 屌丝男士大电影 / Jian Bing Man 人气偶像大鹏（董成鹏 饰）遭遇了意外事件，令其跌入人生谷底，女友采洁（郭采洁 饰）也离他而去，只剩助理董成龙（潘斌龙 饰）和红颜知己柳岩（柳岩 饰）对他不离不弃。大鹏草率签下电影合约，却因资金问题一筹莫展，还遭到了黑道大哥王老板（梁超 饰）的威胁。无奈之下大鹏只得找来小 明星杜潇潇（袁姗姗 饰）、群头马涛（衣云鹤 饰）、狗仔摄影师胡来（崔志佳 饰）组成一个临时摄制组，准备拍摄一部全明星阵容的大片，而拍摄方式也是前所未有的尝试，邓超、吴君如、曾志伟、东北F4等一线大咖能否顺利出演？逼入绝境的大鹏将遭遇什么样的困难？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/煎饼侠截图.png",
    "baiduyun": "http://pan.baidu.com/s/1pJmqr6j",
    "yunPassword": "百度网盘(提取码：rx49)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "日韩电影",
    "name": "火影忍者剧场版：终章",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/火影忍者剧场版：终章.jpg",
    "summaryOfMovie": "导演: 小林常夫 编剧: 岸本齐史 主演: 竹内顺子 / 中村千绘 / 水树奈奈 / 井上和彦 / 杉山纪彰 / 森久保祥太郎 / 日野聪 / 福山润 类型: 喜剧 / 动作 / 动画 / 冒险 官方网站: naruto-movie.com 制片国家/地区: 日本 语言: 日语 / 英语 上映日期: 2014-12-06(日本) 片长: 111分钟 又名: 火影忍者剧场版10：完结篇 / Gekijouban Naruto: The Last / 劇場版 NARUTO -ナルト- ザ・ラスト 第四次忍界大战结束的两年后，此时此刻的漩涡鸣人（竹内顺子 配音）早已成为盖世英雄一般的人物，无论他走到哪里都受到女孩子和小朋友的喜爱与追捧，他似乎也有其享受这样喧嚣欢闹的氛围。与之相对，壁花小姐日向雏田（水树奈奈 配音）则始终站在角落里，默默注视着这个她喜欢了多年的男孩子。雏田亲手为鸣人织了围巾，怎奈无法鼓足勇气交给对方，喜欢的话语更难以说出口。某个夜晚，雏田的妹妹花火（浅井清己 配音）遭到不明身份之人劫持，带火的陨石则落在附近的山坡之上。为了救回花火，阻止地球毁灭，鸣人、雏田、小樱（中村千绘 配音）、鹿丸（森久保祥太郎 配音）和佐井奉命前去调查舍人（福山润 配音）的真身。在此过程中，鸣人不小心知晓了雏田的心意。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/火影忍者剧场版：终章截图.png",
    "baiduyun": "http://pan.baidu.com/s/1dnuhC",
    "yunPassword": "百度网盘(提取码：jnp9)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "411"
  },
  {
    "type": "欧美电影",
    "name": "心在彼处",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/心在彼处.jpg",
    "summaryOfMovie": "导演: 扎克·布拉夫 编剧: 扎克·布拉夫 / Adam J. Braff 主演: 扎克·布拉夫 / 凯特·哈德森 / 曼迪·帕廷金 / 乔伊·金 / 麦克利·米勒 / 迈克尔·温斯顿 / 吉姆·帕森斯 类型: 剧情 / 喜剧 制片国家/地区: 美国 语言: 英语 上映日期: 2016-05-06(中国大陆) / 2014-07-25(美国) 片长: 106分钟 又名: B咖的幸福剧本(台) / 希望我在这儿 / 笑笑小家庭(港) 35岁的艾丹是一名籍籍无名的演员，拖家带口的他依然在各个剧组间跑龙套打零工。当他的父亲告诉他，自己再也负担不了孙儿们的私校学费时，艾丹不得不把两个孩子带回家。因为儿时阴影，他不愿意把孩子们送去公立学校，可是在家自己教又谈何容易？而父亲的突然过世让艾丹发现了自己身上以前不愿意正视的部分。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/心在彼处封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qWj6uRy",
    "yunPassword": "百度网盘(提取码：7aog)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "425"
  },
  {
    "type": "日韩电影",
    "name": "青春之旅 真人版",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/青春之旅 真人版.jpg",
    "summaryOfMovie": "导演: 三木孝浩 编剧: 吉田智子 / 咲坂伊緒(原作) 主演: 本田翼 / 东出昌大 / 新川优爱 / 吉泽亮 / 藤本泉 / 小柳友 / 千叶雄大 / 高畑充希 / 板垣瑞生 / 田爪爱里 类型: 爱情 官方网站: www.aoha-movie.com 制片国家/地区: 日本 语言: 日语 上映日期: 2014-12-13(日本) 片长: 121分钟 又名: 闪烁的青春 真人版 / Youth Ride / Ao Haru Ride 高中女孩吉冈双叶（本田翼 饰）刻意让自己显得不修边幅，以避免成为其他女生攻击的对象，每天都不得不为此小心应付，殚精竭虑。某天，她意外重逢了曾在初中时代有过交集的男孩田中洸（东出昌大 饰）。当初田中搬家到了长崎，此番重逢后不仅将姓改成了马渕，性格似乎也发生巨大的变化。以班级活动为契机，双叶、马渕、马渕的好友小凑亚耶（吉泽亮 饰）、特立独行的高冷女村尾修子（新川优爱 饰）以及因过于可爱而遭到孤立的槙田悠里（藤本泉 饰）聚到了一起。原本他们的情感便彼此交错，而隔壁班的天才帅哥菊池冬马（千叶雄大 饰）、教师田中阳一（小柳友 饰）以及马渕在长崎的旧友成海唯（高畑充希 饰）又让男孩女孩们的关系更为复杂，于是平添了无数的烦恼。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/青春之旅 真人版截图.png",
    "baiduyun": "http://pan.baidu.com/s/1qWCCBvQ",
    "yunPassword": "百度网盘(提取码：5wqp)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "欧美电影",
    "name": "这里的黎明静悄悄",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/这里的黎明静悄悄.jpg",
    "summaryOfMovie": "导演: 列纳特·达夫列吉亚罗夫 编剧: 列纳特·达夫列吉亚罗夫 / 尤里·库洛托科夫 主演: 彼得·费奥多罗夫 / 阿纳斯塔西娅·米库尔钦娜 / 叶夫根尼娅·马拉霍娃 / 雅戈尼娅·库兹涅佐娃 / 索菲娅·列别杰娃 / 克里斯蒂娜·阿斯姆斯 / 叶卡捷琳娜·维柯娃 / 阿纳托利·比利 / 达里娅·莫罗 / 马克西姆·德罗兹德 / 维克托·普罗斯库林 / 伊利娅·阿列克谢耶夫 / 本杰明·施皮勒 / 奥尔加·罗蒙诺索娃 / 斯蒂芬·韦尔克 类型: 剧情 / 战争 官方网站: www.zori-film.ru 制片国家/地区: 俄罗斯 语言: 俄语 / 德语 上映日期: 2015-08-25(中国大陆) / 2015-04-30(俄罗斯) 片长: 115分钟(中国大陆) / 120分钟(俄罗斯) 又名: A zori zdes tikhie... / The Dawns Here Are Quiet 1942年之夏，瓦斯柯夫准尉（彼得·费奥多罗夫 Pyotr Fyodorov 饰）带领两个班的女机枪手驻扎在一个靠近小车站的村子里。一天，班长丽达（阿纳斯塔西娅·米库尔钦娜 Anastasia Mikulchina 饰）在不远的树林里发现了两个空降的德军计划要袭击苏联腹地的军事设施。瓦斯柯夫带领一支小分队去搜查敌军，成员包括丽萨（索菲娅·列别杰娃 Sofya Lebedeva 饰）、迦尔卡（克里斯蒂娜·阿斯姆斯 Kristina Asmus 饰）、丽达、索妮娅（雅戈尼娅·库兹涅佐娃 Agniya Kuznetsova 饰）、冉妮娅（叶夫根尼娅·马拉霍娃 Zhenya Malakhova 饰）等五个姑娘。但敌人的力量与自然环境的恶劣远比她们想得要残酷，这些美丽的苏联女战士，不得不在丛林中与人数众多的敌军反复周旋。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/这里的黎明静悄悄封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntCIF25",
    "yunPassword": "百度网盘(提取码：k71q)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "406"
  },
  {
    "type": "欧美电影",
    "name": "开战日",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/开战日.jpg",
    "summaryOfMovie": "导演: Roni Ezra             主演: Pilou Asb & aelig;k / Lars Mikkelsen / Gustav Dyekj & aelig;r             Giese             类型: 剧情 / 战争             制片国家 / 地区: 丹麦             语言: 丹麦语             上映日期: 2015 - 03 - 12(丹麦)             片长: 93 分钟             1940 年4月9日清晨， 德国军队穿过国界进入丹麦境内。 丹麦日德兰岛的自行车连队和摩托车连队是最先抵御德军进攻的丹麦部队。 ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/开战日封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eQ4Pwmm",
    "yunPassword": "百度网盘(提取码：9hat)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "日韩电影",
    "name": "唇上之歌",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/唇上之歌.jpg",
    "summaryOfMovie": "导演: 三木孝浩 编剧: 持地佑季子 / 登米裕一 / 中田永一 / 乙一 主演: 新垣结衣 / 木村文乃 / 桐谷健太 / 恒松祐里 / 下田翔大 / 葵若菜 / 柴田杏花 / 山口麻友 / 佐野勇斗 / 室井響 / 渡边大知 / 真岛秀和 / 石田光 / 木村多江 / 小木茂光 / 角替和枝 / 井川比佐志 类型: 剧情 官方网站: kuchibiru.jp 制片国家/地区: 日本 语言: 日语 上映日期: 2015-02-28(日本) 片长: 132分钟 又名: 再会吧 ! 青春小鸟(台) / Have a Song on Your Lips 该片根据日本混血歌手安吉拉·亚纪的名曲《写信拜启给十五岁的你》为轴衍生出的青春物语，讲述了天才美女钢琴家柏木由利（新垣结衣饰），回到故乡长崎县五岛列岛的中学当起了临时老师，为了让学校的合唱部参加音乐会演，柏木向学生们提出“写一封信给15年后的自己\"的课题，通过阅读学生们的信，令柏木了解到15岁少男少女各自心中隐藏的秘密，描绘出乡下女教师与学生之间的纯粹感动物语，被誉为现代版的《二十四只眼睛》。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/唇上之歌截图.png",
    "baiduyun": "http://pan.baidu.com/s/1nt7sWOh",
    "yunPassword": "百度网盘(提取码：jave)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "有一个地方只有我们知道",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/有一个地方只有我们知道.jpg",
    "summaryOfMovie": "导演: 徐静蕾 编剧: 王朔 / 徐静蕾 / 十庆 / 王芸 / 赵梦 / 梁青儿 / 司徒芃丽 主演: 吴亦凡 / 王丽坤 / 徐静蕾 / 戈登·亚历山大 / 丛珊 / 张超 / 热依扎 类型: 爱情 制片国家/地区: 中国大陆 语言: 汉语普通话 / 英语 上映日期: 2015-02-10(中国大陆) 片长: 109分钟 又名: Somewhere Only We Know “你永远也不知道，两通没有接到的电话，竟会失去两个最爱的人，人生从此发生改变。\"美丽女孩金天（王丽坤 饰）遭到未婚夫背叛，而她在这个世上的唯一亲人奶奶陈兰心（徐静蕾 饰）也因病去世。这个万念俱灰的女孩顿时失去人生的方向，彷徨间她拉起行李箱，乘飞机来到了浪漫都市布拉格。至于为什么来到这里她没有确切的原因，或许是因为这是奶奶年轻时曾生活过的地方。金天不愿再像从前那样浑浑噩噩，她尝试着做一些不平凡的事情，于是便在某个喧嚣的舞厅结识了英俊帅气的大提琴手彭泽阳（吴亦凡 饰）。以爱情的名义，金天仿佛和去世的奶奶建立了某种联系，数十年前发生在兰心身上的恋情似乎又以别样的方式重演。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/有一个地方只有我们知道封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnHMIf1",
    "yunPassword": "百度网盘(提取码：wuft)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "星际迷航：叛徒",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/星际迷航：叛徒.jpg",
    "summaryOfMovie": "导演: 蒂姆·罗斯 编剧: Ethan H. Calk / Sky Douglas Conway 主演: 艾德丽安·威尔金森 / 沃尔特·凯尼格 / 肖恩·杨 / Manu Intiraymi 类型: 动作 / 科幻 / 冒险 制片国家/地区: 美国 语言: 英语 蒂姆·罗斯2015年导演的美国科幻片电影《星际迷航:叛徒》[高清中文字幕]由艾德丽安·威尔金森 沃尔特·凯尼格 肖恩·杨 Manu Intiraymi主演。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/星际迷航：叛徒截图.png",
    "baiduyun": "http://pan.baidu.com/s/1i3D6JdV",
    "yunPassword": "百度网盘(提取码：hord)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "395"
  },
  {
    "type": "国产电影",
    "name": "我是大熊猫之熊猫大侠",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是大熊猫之熊猫大侠.jpg",
    "summaryOfMovie": "导演: 吴佳 / 汤继业 编剧: 孙晓松 主演: 张艾 / 杨侃 / 姜业婷 / 龚菲 / 夏莹 / 杨倪 / 王寅 类型: 动画 / 冒险 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-15(中国大陆) 片长: 81分钟 又名: 我是大熊猫2之熊猫大侠 / Happy Panda 2: Panda Hero Legend / Leaders of Panda Heroes 熊猫一族，已在地球上生活了800万年，被世人称为“活化石\"。传说，熊猫的祖先————熊猫大侠一身本领，锄强扶弱，为熊猫一族赢得了崇高地位，带领族人隐居于世外竹林，更在去世前耗尽心血布下无人能破解的八卦熊猫阵抵御外敌。 哈比，众多熊猫中的一只，平生最爱三件事————爱吃、爱耍宝、爱扮大侠！最大的梦想就是变成自己最崇拜的熊猫大侠。然而，面对其他熊猫小伙伴的嘲笑、巾帼女熊猫茜茜的日益强大、护族长老的偏心，让哈比“大侠梦碎\"一气之下偷了秘籍跑进森林，以熊猫大侠的名义招摇过市，还真让自己成为了“闹翻天\"组合等动物心目中的偶像。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是大熊猫之熊猫大侠封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mgrLY5M",
    "yunPassword": "百度网盘(提取码：svyx)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "破风",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/破风.jpg",
    "summaryOfMovie": "导演: 林超贤 编剧: 林超贤 / 林逢 / 侯颖桁 / 郑善瑜 主演: 彭于晏 / 窦骁 / 崔始源 / 王珞丹 / 陈家乐 / 欧阳娜娜 / 连凯 类型: 剧情 / 运动 制片国家/地区: 香港 / 中国大陆 语言: 汉语普通话 / 韩语 / 英语 / 意大利语 上映日期: 2015-08-07(中国大陆) 片长: 126分钟 又名: To The Fore 郑知元（崔始源 饰）是世界闻名的赛车手，在目睹了他精彩绝伦的技巧和速度之后，初出茅庐的车手王仇铭（彭于晏 饰）和邱田（窦骁 饰）心甘情愿地成为了他的“破风手\"，并以三人之间的绝佳默契打败了强敌。然而，胜利是属于“冲线手\"的，无论怎样努力，“破风手\"不过只是默默无闻的陪衬，在明白了这一道理之后，王仇铭和邱田选择了离开，两人成为了“冲线手\"，在一次又一次的挑战之中试图击败郑知元。 与此同时，王仇铭和邱田同时爱上了名为黄诗瑶（王珞丹 饰）的美丽女孩，危险的三角关系让三人之间的友谊走到了尽头，最终，王仇铭失去了邱田的音讯。多年以后，王仇铭和邱田再度重逢，这一次，他们之间又会发生怎样的故事呢？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/破风截图.png",
    "baiduyun": "http://pan.baidu.com/s/1eQ0LCOi",
    "yunPassword": "百度网盘(提取码：2ve1)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "神奇四侠2015-韩版",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神奇4侠.jpg",
    "summaryOfMovie": "导演: 乔什·特兰克 编剧: 西蒙·金伯格 / 杰克·科比 / 斯坦·李 / 乔什·特兰克 / 杰里米·斯莱特 主演: 迈尔斯·特勒 / 凯特·玛拉 / 迈克尔·B·乔丹 / 杰米·贝尔 / 蒂姆·布雷克·尼尔森 / 托比·凯贝尔 / 雷格·E.凯蒂 / 玛丽·蕾切尔·达德利 / 唐·耶索 / 兰斯·E·尼克尔斯 / 马科·圣约翰 / 安东尼·雷诺兹 / 切特·汉克斯 / 韦恩·佩雷 类型: 动作 / 科幻 / 冒险 官方网站: www.fantasticfourmovie.com 制片国家/地区: 美国 / 英国 / 德国 语言: 英语 上映日期: 2015-08-07(美国) 片长: 100分钟 / 106分钟(法国) 又名: 新神奇四侠 / 神奇4侠(港) / 惊奇4超人(台) / Fant4stic 四位原本过着平凡生活的年轻人，被传送到一个危机四伏的宇宙时空，四人的外貌身形都发生了巨大的变化，并拥有了强大而独特的超能力：“神奇先生\"（迈尔斯·特勒 Miles Teller 饰）的身体能屈能伸，“隐形女\"（凯特·玛拉 Kate Mara 饰）拥有变透明的能力，“霹雳火\"（迈克尔·B·乔丹 Michael B. Jordan 饰）可以喷火飞天，“石头人\"（杰米·贝尔 Jamie Bell 饰）肤如岩石无坚不摧，他们组成了“神奇四侠\"。 “神奇四侠\"需要学习，并善用他们的超能力，并肩作战以抵御外敌，保护即将遭敌军破坏殆尽的地球家园，意想不到的是，他们所要对抗的竟是昔日挚友。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神奇四侠2015截图.png",
    "baiduyun": "http://pan.baidu.com/s/1i3EmGDZ",
    "yunPassword": "百度网盘(提取码：jvdc)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "415"
  },
  {
    "type": "国产电影",
    "name": "一路向前",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/一路向前.jpg",
    "summaryOfMovie": "导演: 侯亮 编剧: 侯亮 主演: 陈赫 / 姚星彤 / 常远 / 陆海涛 / 张颂文 / 张佑赫 / 赵奕欢 类型: 喜剧 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-08-06(中国大陆) 片长: 90分钟 又名: 职场菜鸟指南 / Love in the Office 碌碌无为的普通青年牛顿（陈赫 饰） 是一个刚刚毕业一年的职场菜鸟， 默默暗恋着女同事姚姚（姚星彤 饰） 。 准备胎牛顿一直费劲心思想要讨好女神， 无奈自己却并没有任何出彩的地方。 正在此时， 公司突然有了公派纽约工作的机会，所有员工都跃跃欲试。 牛顿在极品损友卡耐基（常远 饰） 的建议下不择手段跟踪处长以此要挟获得进修机会， 而姚姚却因为与男友分手意外失去竞争机会...... 在爱情和工作面前， 牛顿究竟该何去何从？ 是选择无量前途， 亦或是携手一生的伴侣？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/一路向前截图.png",
    "baiduyun": "http://pan.baidu.com/s/1eQjkEDc",
    "yunPassword": "百度网盘(提取码：5jaq)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "日韩电影",
    "name": "生缝寸尺心",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/生缝寸尺心.jpg",
    "summaryOfMovie": "导演: 三岛有纪子 编剧: 池辺葵(原作) 主演: 中谷美纪 / 三浦贵大 / 片桐入 / 黑木华 / 杉咲花 / 更多... 官方网站: tsukuroi.gaga.ne.jp 制片国家/地区: 日本 语言: 日语 上映日期: 2015-01-31(日本) 片长: 104分钟 又名: 裁缝师的美丽人生(台) / 裁缝 / Tsukuroi tatsu hito / A Stitch of Life 继承祖母裁缝人店“南洋裁店\"第2代店主市江（中谷美纪 饰），凭借使用缝纫机制作西装而远近闻名，但市江从不接受大批量的工服订单，以及品牌的设立，而是专为老顾客手工制作满足他们需求的衣服。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/生缝寸尺心封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mgkuwkg",
    "yunPassword": "百度网盘(提取码：0mxl)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "426"
  },
  {
    "type": "国产电影",
    "name": "命中注定(国语.中英字幕)",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/命中注定.jpg",
    "summaryOfMovie": "导演: 张皓 编剧: 赵硕 / 黛安·德雷克 主演: 汤唯 / 廖凡 / 苏岩 / 方芳 / 刘韬 / 谢东燊 类型: 喜剧 / 爱情 制片国家/地区: 中国大陆 / 香港 / 美国 语言: 汉语普通话 / 意大利语 / 英语 上映日期: 2015-07-24(中国大陆) 片长: 113分钟 又名: Only You 　　少女时期的方圆（汤唯 饰）经历了两次算命结果命中注定她未来的爱人叫宋昆明（廖凡 饰）。长大成年后的方圆在即将与谢明江结婚前却意外接到宋昆明的电话。于是，方圆不顾一切地追到意大利，随后在异国他乡展开了一段充满戏剧性的寻爱之旅。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/命中注定截图.png",
    "baiduyun": "http://pan.baidu.com/share/init?shareid=4164124490",
    "yunPassword": "3idd",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "宅女侦探桂香",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/宅女侦探桂香.jpg",
    "summaryOfMovie": "导演: 彭顺 编剧: 伍臻祥 主演: 王珞丹 / 周渝民 / 任达华 / 鲍起静 / 天心 / 石修 / 邵美琪 类型: 喜剧 / 爱情 / 悬疑 制片国家/地区: 中国大陆 / 香港 / 台湾 语言: 汉语普通话 上映日期: 2015-08-13(中国大陆) 片长: 98分钟 又名: Detective Lady / Detective Gui 宅女桂香（王珞丹 饰）3岁识字、7岁抓小偷、13岁帮警察破案，从小到达成功破获无数起凶杀悬案，是远近闻名的天才侦探。然而高智商的桂香却有情商缺陷，不但惨遭男友抛弃，还无法走出情伤。就在桂香终日沉浸在失恋伤感中时，一起碎尸案发生在她面前，并将她卷入到另外一宗更离奇的案件中去。在寻找真凶的过程中，桂香遇到看似无害却总是跟她作对的刑警阿哲（周渝民 饰），两个人展开了一场智力角逐，也离真相越来越近。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/宅女侦探桂香封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntKQcOx",
    "yunPassword": "百度网盘(提取码：og2r)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "401"
  },
  {
    "type": "日韩电影",
    "name": "发誓不会忘记你",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/发誓不会忘记你.jpg",
    "summaryOfMovie": "导演: 堀江慶 编剧: おかざきさとこ / 堀江慶 主演: 村上虹郎 / 早见明里 / 市川喜一 / 渡边佑太朗 / 大沢ひかる / 山崎树范 / 二阶堂智 / ちはる / 池端レイナ / 五十岚信次郎 类型: 爱情 官方网站: wasuboku.com 制片国家/地区: 日本 语言: 日语 上映日期: 2015-03-28(日本) 片长: 94分钟 又名: Wasurenai to chikatta boku ga ita / There Was Me Who Vowed Not To Forget 日本新生代男星村上虹郎与女星早见明里共同主演的爱情片《发誓不会忘记你》确定将于2015年3月在日本公映。影片主题歌选自摇滚组合creephyp的新歌《2LDK》，观众将通过曝光的预告片欣赏到这首充满青春正能量的歌曲。 该片根据平山瑞穗的同名小说改编，导演由《吻与伤》、《自杀人生》的导演堀江庆掌镜。男主角村上虹郎是著名男演员村上淳与女歌手UA的儿子，该片是村上继《第二扇窗》（导演河濑直美）之后主演的第2部电影。村上将与女主角早见共同谱写一段唯美虐心的爱情物语。 高中3年级男生叶山鹰志（村上虹郎饰）对少女织部梓（早见明里饰）一见钟情，某天，梓突然对鹰志说“和我见过面的所有人，都会在数小时之后失去对我的记忆。\"对于这个奇妙的告白，鹰志起初不敢相信，当他真正意识到自己逐渐失去记忆之后，鹰志试图通过日记以及视频影像来唤醒对梓的记忆。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/发誓不会忘记你封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1ntksoA1",
    "yunPassword": "百度网盘(提取码：wel4)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "423"
  },
  {
    "type": "国产电影",
    "name": "张震讲故事之鬼迷心窍",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/张震讲鬼故事之鬼迷心窍.jpg",
    "summaryOfMovie": "导演: 徐正超 编剧: 徐正超 主演: 张翰 / 张俪 / 李心艾 / 张皓然 / 朱晓辉 / 孔维 / 范植伟 类型: 悬疑 / 惊悚 制片国家/地区: 中国大陆 语言: 汉语普通话 上映日期: 2015-07-03(中国大陆) 片长: 87分钟 又名: 张振讲故事之鬼迷心窍 / 张震讲故事大电影 / Chang Chen Ghost Stories / Be Possessed By Ghosts 男主角钟宇一直暗恋女主角晓来，却不幸遭钟宇的师傅插足。紧接着，鬼影、幻想、失踪、绑架等恐怖事件袭来，谁是操控者，或者这些事件因何而生，没有人知道...... 此系列电影，改编自上世纪九十年代起风靡全国高校的电台恐怖故事集“张震讲故事\"。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/张震讲故事之鬼迷心窍截图.png",
    "baiduyun": "http://pan.baidu.com/s/1sjzJfUd",
    "yunPassword": "百度网盘(提取码：s3l8)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "谍影特工(十一月杀手)",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/谍影特工 十一月杀手.jpg",
    "summaryOfMovie": "导演: 罗杰·唐纳森 编剧: 迈克尔·芬奇 / 卡尔·盖杜谢克 / 比尔·格兰杰 主演: 皮尔斯·布鲁斯南 / 欧嘉·柯瑞兰寇 / 卡特琳娜·斯柯松 / 威尔·帕顿 / 比尔·斯米托洛维奇 / 伊莉萨·泰勒-科特尔 / 拉扎尔·里斯托夫斯基 / 帕特里克·肯尼迪 / 卢克·布雷西 类型: 惊悚 制片国家/地区: 美国 语言: 英语 上映日期: 2014-08-27(美国) 片长: 108分钟 又名: 十一月杀手 / 谍网暗战(港) / 特务交锋(台) / 没有间谍 影片改编自比尔·格兰杰1987年的小说《没有间谍》（There Are No Spies），讲述一名前任CIA特工，卷入一场与美国政府和俄罗斯总统有关的阴谋之中，与自己昔日的弟子成为对手的故事。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/谍影特工 十一月杀手封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1c0g6McS",
    "yunPassword": "百度网盘(提取码：ltnj)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "419"
  },
  {
    "type": "欧美电影",
    "name": "查泰莱夫人的情人",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/查泰莱夫人的情人.jpg",
    "summaryOfMovie": "导演: 贾斯特·杰克金 编剧: Christopher Wicking / 贾斯特·杰克金 主演: 西尔维娅·克里斯蒂 / 谢恩·布赖恩特 / 尼古拉斯·克莱 / 安·米切尔 类型: 剧情 / 爱情 / 情色 制片国家/地区: 法国 / 英国 / 西德 语言: 英语 上映日期: 1981-06-29 片长: 104 分钟 又名: 查泰来夫人的情人 故事发生在等级制度森严的英国，年轻的康妮（西尔维娅·克里斯蒂 Sylvia Kristel 饰）终于等来了与自己分别多时的丈夫克利福特（Shane Briant 饰），但同时也等来了丈夫下半身永久瘫痪的噩耗。面对残酷的现实，善良的康妮只得默默接受。 一次偶然中，康妮邂逅了庄园的看林人米尔斯（尼古拉斯·克莱 Nicholas Clay 饰），后者健壮结实的躯体让康妮的内心激动难耐。一来二往之下，康妮和米尔斯发生了关系，尽管粗鲁的情人大字不识一个，但康妮依旧在他的身上找到了久违的满足与热情。纸终究包不住火，康妮和米尔斯之间的奸情败露，令克利福特大为火光，同时，在英国已经无法生存的米尔斯决定前往加拿大开辟新的天地，究竟该留下还是离开，康妮面临着严峻的选择。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/查泰莱夫人的情人封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1kTs3Okn",
    "yunPassword": "百度网盘(提取码：4c1z)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "日韩电影",
    "name": "深情触摸",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/深情触摸.jpg",
    "summaryOfMovie": "导演: 金豪俊 类型: 喜剧 / 爱情 制片国家/地区: 韩国 语言: 韩语 上映日期: 2015-04-30(韩国) 片长: 75分钟 又名: Touch By Touch 善美（Koo朴智星）手中的名片给珠喜（哈京）是谁要结婚了，说她永远不会在能够感受到的性满足，如。珠熙去体验新的东西，开始表达自己的情绪的上升到她的未婚夫，尽管时间和地点。与珠熙是谁享受这，民宇是累了。他试图满足她自己最大的能力甚至要从朋友的意见但这是不够的。那个地方，她倒想这是什么？             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/深情触摸截图.png",
    "baiduyun": "http://pan.baidu.com/s/1qWKdOew",
    "yunPassword": "百度网盘(提取码：8v4c)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "欧美电影",
    "name": "复仇者联盟2：奥创纪元",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/复仇者联盟2：奥创纪元.png",
    "summaryOfMovie": "导演: 乔斯·韦登 编剧: 乔斯·韦登 / 斯坦·李 / 杰克·科比 主演: 小罗伯特·唐尼 / 克里斯·海姆斯沃斯 / 马克·鲁弗洛 / 克里斯·埃文斯 / 斯嘉丽·约翰逊 / 杰瑞米·雷纳 / 詹姆斯·斯派德 / 塞缪尔·杰克逊 / 唐·钱德尔 / 亚伦·泰勒-约翰逊 / 伊丽莎白·奥尔森 / 保罗·贝坦尼 / 寇碧·史莫德斯 / 安东尼·麦凯 / 海莉·阿特维尔 / 伊德里斯·艾尔巴 / 斯特兰·斯卡斯加德 / 金秀贤 / 托马斯·克莱舒曼 / 安迪·瑟金斯 / 朱莉·德尔佩 / 斯坦·李 / 亨利·古德曼 / 多米尼克·普罗沃斯特-切克利 / 艾萨克·安德鲁斯 类型: 动作 / 科幻 / 奇幻 / 冒险 官方网站: marvel.com/avengers 制片国家/地区: 美国 语言: 英语 / 韩语 上映日期: 2015-05-12(中国大陆) / 2015-05-01(美国) 片长: 142分钟 又名: 复仇者联盟2 / 复仇者联盟：奥创时代 / 复仇者联盟：奥创年代 / 复联2 / Marvel Avengers: Age of Ultron / The Avengers 2 / After Party 托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）试图重启一个已经废弃的维和项目，不料该项目却成为危机导火索。世上最强大的超级英雄————钢铁侠、美国队长（克里斯·埃文斯 Chris Evans 饰）、雷神（克里斯·海姆斯沃斯 Chris Hemsworth 饰）、绿巨人（马克·鲁弗洛 Mark Ruffalo 饰）、黑寡妇（斯嘉丽·约翰逊 Scarlett Johansson 饰）和鹰眼（杰瑞米·雷纳 Jeremy Renner 饰），不得不接受终极考验，拯救危在旦夕的地球。神秘反派奥创（詹姆斯·斯派德 James Spader 配音）逐渐崛起，超级英雄们必须重新集结，竭力阻止奥创实施人类灭绝计划。战斗中，复仇者联盟成员们还遇到了两个新人物————旺达·马克西莫夫（伊丽莎白·奥尔森 Elizabeth Olsen 饰）和皮特罗·马克西莫。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/复仇者联盟2：奥创纪元截图.png",
    "baiduyun": "http://pan.baidu.com/s/1eQm8nHS",
    "yunPassword": "百度网盘(提取码：cxv7)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "欧美电影",
    "name": "少年透明人",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/少年透明人.jpg",
    "summaryOfMovie": "导演: 加布里埃尔·萨瓦特瑞斯 主演: 卢多维科·吉拉尔德罗/Ludovico Girardello / 瓦莱莉·高利诺 类型: 科幻 / 奇幻 制片国家/地区: 意大利 语言: 意大利语 上映日期: 2014-09-18 片长: 100分钟 又名: The Invisible Boy 情介绍：13岁男孩迈克尔一次偶然在一家古董店穿上了一件超级英雄的戏服，不料却真的获得了隐身的能力，因此引发一串神奇事件，迈克尔也因此了解了自己的真正身世。本片由曾获意大利金球奖最佳导演的加布里埃尔·萨瓦特瑞斯（《有你我不怕》）执导，充满天马行空的奇幻色彩与肆意汪洋的英雄大片气质，八十年代意大利银幕女神、威尼斯影后瓦莱莉·高利诺（《爱情故事》）出演主角的母亲，在片中容颜不老、英姿飒爽，为喜欢她的资深影迷们带来意外惊喜。 看点：英雄少年与女神妈妈引爆银幕火花。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/少年透明人封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3s7HZn",
    "yunPassword": "百度网盘(提取码：vb67)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "神秘感染：第二阶段",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神秘感染：第二阶段.jpg",
    "summaryOfMovie": "导演: Josh Forbes 编剧: Craig Walendziak 主演: Najarra Townsend / Marianna Palka / Alice Macdonald / Adam Robitel / Anna Lore / Matt Mercer / Peter Cilella 类型: 剧情 / 惊悚 / 恐怖 制片国家/地区: 美国 语言: 英语 上映日期: 2015-07-05(瑞士) / 2015-09-04 片长: 78 min Riley searches for a cure to the virus that took over Samantha before it consumes him and the entire world.             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神秘感染：第二阶段封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnuLOuz",
    "yunPassword": "百度网盘(提取码：otrp)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "412"
  },
  {
    "type": "欧美电影",
    "name": "弗雷斯诺",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/弗雷斯诺.jpg",
    "summaryOfMovie": "导演: 詹米·巴比特 编剧: 卡莉·多内托 主演: 娜塔莎·雷昂 / 克里·杜瓦尔 / 奥布瑞·普拉扎 / 朱迪·格雷尔 / 弗莱德·阿米森 类型: 喜剧 制片国家/地区: 美国 语言: 英语 上映日期: 2015-03-14(美国) Shannon（朱迪·格雷尔）是一个缺乏自控的性瘾患者，常常做出各种不考虑后果的行为，而她的妹妹Martha（娜塔莎·雷昂）是一个生活寂寞而坚忍的同性恋。她们在弗雷斯诺的旅店做女佣，并有着不太健康的共生关系。某天在清理旅馆房间时，她们不小心杀死了一位客人，并随之引出了一系列啼笑皆非的事件。 这部电影是导演詹米·巴比特、演员娜塔莎·雷昂和克里·杜瓦尔在1999年的《啦啦队长》之后的首次重聚。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/弗雷斯诺封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1t1Sb8",
    "yunPassword": "百度网盘(提取码：900l)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  },
  {
    "type": "欧美电影",
    "name": "糟糕的兄弟情",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/糟糕的兄弟情.jpg",
    "summaryOfMovie": "导演: Andrew Mogel / Jarrad Paul 编剧: Andrew Mogel / Jarrad Paul 主演: 詹姆斯·麦斯登 / 凯瑟琳·哈恩 / 杰克·布莱克 / 杰弗里·塔伯 / 麦克·怀特 / 凯尔·柏海莫 / 亨利·泽布罗夫斯基 / 约翰·阿米乔 / 玛丽安娜·宝拉·韦森特 / Steffie Grote 类型: 喜剧 制片国家/地区: 美国 语言: 英语 上映日期: 2015-01-23(圣丹斯电影节) / 2015-05-08(美国) 片长: 97分钟 又名: D号列车 / Bad Bromance 丹·兰斯曼是高中校友会主席，也是众人的笑柄。为了重振校友聚会的人气，也为了赢得大家的认可与尊重，丹前往洛杉矶与昔日同班同学、如今的电视广告明星奥利弗套近乎。为了换取奥利弗不牢靠的友谊，丹与妻子、儿子和老板的关系纷纷陷入僵局。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/糟糕的兄弟情封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJvJo0N",
    "yunPassword": "百度网盘(提取码：ahkq)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "423"
  },
  {
    "type": "欧美电影",
    "name": "非我",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/非我.jpg",
    "summaryOfMovie": "导演: 塔西姆·辛 编剧: 大卫·帕斯特尔 / 亚历克斯·帕斯特尔 主演: 瑞恩·雷诺兹 / 本·金斯利 / 马修·古迪 / 娜塔丽·马丁内兹 / 米歇尔·道克瑞 / 德里克·卢克 / 维克多·加博 / 玛丽安娜·宝拉·韦森特 / 山姆·佩吉 / 特瑞·韦伯 / 格里夫·弗斯特 / 艾米莉·特里梅因 / 加里·维克斯 类型: 科幻 / 悬疑 / 惊悚 官方网站: selflessmovie.tumblr.com 制片国家/地区: 美国 语言: 英语 上映日期: 2015-07-10(美国) 片长: 117分钟 又名: 换命法则(台) / 换命游戏 / 无我 / Selfless 未来社会，人类科技已经可以将人的意识移植到新的身体，从而使人获得新生。身患癌症、濒临死亡的纽约富豪戴米恩（本·金斯利 Ben Kingsley 饰）就尝试了这项技术，将自己的意识转换到一个健康的年轻男子体内，并使用别名“爱德华\"（瑞恩·雷诺兹 Ryan Reynolds 饰）继续生活。他沉浸在重获新生的喜悦中，却也逐渐发现了这具躯体深藏的一些危险秘密。             ",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/非我封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJOj407",
    "yunPassword": "百度网盘(提取码：4sh1)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "日韩电影",
    "name": "烈性摔跤",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/烈性摔跤.jpg",
    "summaryOfMovie": "导演: 金豪俊             编剧: 金豪俊             主演: 崔成国 / 宋恩彩 / 许娜京             类型: 喜剧             制片国家 / 地区: 韩国             语言: 韩语             上映日期: 2014 - 09 - 11(韩国)             片长: 85 分钟             又名: 扭斗 / Wrestling   崔成国饰演的老师和一名女学生同居了，中间一直保持着距离没有发生关系，崔成国一再用尽手段无济于事，后来崔成国移情别恋的喜欢上了一位新来的女老师，爆笑开始了....",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/烈性摔跤封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnmEjkr",
    "yunPassword": "百度网盘(提取码：lbas)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "399"
  },
  {
    "type": "日韩电影",
    "name": "恋爱的味道",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恋爱的味道.jpg",
    "summaryOfMovie": "导演: 金亚伦主演: 吴智昊/姜艺媛/河珠熙类型: 喜剧/爱情制片国家/地区: 韩国语言: 韩语上映日期: 2015-05-07(韩国)片长: 101分钟又名: 恋爱之味/LoveClinic讲述的是吴智昊饰演的妇产科帅男医生和姜艺媛饰演的泌尿科美女医生在同一栋楼里开诊所并展开一场患者争夺战的故事。吴智昊饰演的是非常了解女人内在构造却不了解女人内心的妇产科专家医生“王圣基\"，虽然长得帅但也会被女人讨厌而被泼一脸酒。而姜艺媛饰演的是泌尿科医生，看过很多男人的“尺寸\"，却从来没有谈过恋爱的“吉申雪\"。从一开始相看两生厌到后来成为把酒言欢的朋友，两人都将展现令人爆笑不已的喜剧演技。吴智昊对于姜艺媛饰演的老处女讽刺道：“从专家的立场来看，都到了那么大年龄，别人都做的事你不做，也是一种病\"，而后来姜艺媛在酒桌上也反问吴智昊：“你对恋爱没有自信么？\"。另外影片的尺度也令观众非常好奇，预告片中就由姜艺媛检查男患者身体的剧情，以及姜艺媛抱着一大堆安全套散落一地被吴智昊目睹的“惨剧\"。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恋爱的味道封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1foAMa",
    "yunPassword": "百度网盘(提取码：zrd2)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "国产电影",
    "name": "恐怖游泳馆",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恐怖游泳馆.jpg",
    "summaryOfMovie": "导演: 袁杰编剧: 黄炎主演: 张蓝艺/丁汇宇/杜菁/闫薇儿/姚雨鑫/杜乔/钟超/蒋羽熙类型: 惊悚制片国家/地区: 中国大陆语言: 汉语普通话上映日期: 2015-07-31(中国大陆)片长: 90分钟又名: WhointhePool一个朋友的死，让小蝶一直自责，甚至出现了间歇性失忆、幻想等病症。莫凡策划了一个恐怖订婚礼，故意让小蝶经历一次恐怖，想以此治愈小蝶的病。可是订婚礼的当天，事情的进展失去了控制，朋友们一个接一个消失。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/恐怖游泳馆封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJmpDCv",
    "yunPassword": "百度网盘(提取码：nu12)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "日韩电影",
    "name": "渴望",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/渴望.jpg",
    "summaryOfMovie": "导演: 中岛哲也编剧: 中岛哲也/门间宣裕/唯野未步子/深町秋生主演: 役所广司/小松菜奈/妻夫木聪/清水寻也/二阶堂富美/桥本爱/高杉真宙/星野仁/森川葵/国村隼/黑泽明日香/青木崇高/小田切让/中谷美纪类型: 悬疑官方网站: kawaki.gaga.ne.jp制片国家/地区: 日本语言: 日语上映日期: 2014-06-27(日本)片长: 118分钟又名: 渴罪(港)/渴望(台)/渴求/Kawaki/TheWorldofKanako颓废堕落的中年人藤岛昭和（役所广司饰）也曾拥有幸福美满的家庭，身为刑警的他因暴打前妻桐子（黑泽明日香饰）的情人而被迫提前退休。在看不见未来的最低端，他接到桐子打来的电话，原来藤岛的女儿加奈子（小松菜奈饰）已失踪多日。出于复杂的感情，这个粗鲁凶暴的男人风风火火展开调查，他走访了加奈子身边的人，包括高中同学森下（桥本爱饰）和长野（森川葵饰）、班主任东里惠（中谷美纪饰）以及精神科医生辻村（国村隼饰），从这些人的口中，却发现女儿天使般的外表下似乎住着一个可以让所有人堕落乃至遭遇不幸的魔鬼。藤岛全速奔跑，另一伙危险的人马也介入进来。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/渴望封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eQEsoNo",
    "yunPassword": "百度网盘(提取码：bv6p)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "破发点",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/破发点.jpg",
    "summaryOfMovie": "导演: JayKaras编剧: GeneHong/JeremySisto主演: AmySmart/DavidWalton/JeremySisto类型: 喜剧制片国家/地区: 美国语言: 英语上映日期: 2015-07-21(美国)片长: 90分钟Twoestrangedbrothersreunitetomakeanimprobablerunatagrandslamtennistournament.",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/破发点封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJHxHc3",
    "yunPassword": "百度网盘(提取码：l9ye)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  },
  {
    "type": "国产电影",
    "name": "王朝的女人·杨贵妃",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/王朝的女人·杨贵妃.jpg",
    "summaryOfMovie": "导演: 十庆编剧: 十庆/吴楠/卞智弘主演: 范冰冰/黎明/吴尊/陈冲/宁静/吴刚/金昊/陈宝国/文章/秦怡/屠洪刚/吴樾类型: 爱情/古装制片国家/地区: 中国大陆语言: 汉语普通话/英语上映日期: 2015-07-30(中国大陆)片长: 122分钟又名: 杨贵妃/盛唐危机/LadyoftheDynasty少女杨玉环（范冰冰饰）为国丧领舞，翩若惊鸿，唐明皇（黎明饰）不觉倾心。宠妃武惠妃担心潜在的威胁，谎称杨玉环是她为儿子寿王（吴尊饰）选定的王妃。杨玉环成了寿王的妻子、皇上的儿媳。这个只需要情感和艺术的女子对政治毫无兴趣，然而，她的周围只有政治。武惠妃设计陷害太子谋反，致使三个皇子被浇注成三尊雕塑。很快，武惠妃阴谋败露，自刎身亡。寿王无法面对父皇对杨玉环的爱慕，下毒药致玉环流产。心如死灰的杨玉环被送入道观。唐明皇被杨玉环拒绝，恼怒中宣布强娶杨玉环。然而，新婚之夜，唐明皇并没有勉强杨玉环。两人的感情在政治斗争的压力和宫廷日常生活中越走越近，杨玉环终于爱上了唐明皇。“安史之乱\"爆发。这场叛乱使得杨贵妃的两任丈夫————寿王和唐明皇父子和解，寿王悲壮地战死疆场；而无心政治的杨玉环也成为帝国最高政治斗争的核心。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/王朝的女人·杨贵妃封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1eQhinQi",
    "yunPassword": "百度网盘(提取码：7fwv)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "430"
  },
  {
    "type": "国产电影",
    "name": "男人制造",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/男人制造.jpg",
    "summaryOfMovie": "导演: 陶盟喜编剧: 姚伟明主演: 罗家英/涓子/郭金杰/赵雅淇/刘骐/陈市/王飞鸿类型: 喜剧制片国家/地区: 中国大陆语言: 汉语普通话上映日期: 2015-07-31(中国大陆)片长: 90分钟又名: 灵魂的温度/TheMakingOfAMan故事讲述罗家英饰演的富豪华侨，携巨资归国回报家乡，一路上，这位神通广大老好人展现出他千变万化的招数，与涓子饰演的记者，还有郭金杰饰演的工程公司老板，上演各种爆笑桥段。资金大事尚未落定前，突如其来的变数又打乱了工程公司老板的所有算盘，各路牛鬼蛇神的加入，混乱场面里又生出不少笑话。而最终的故事将怎样发展，事情还是未知之数。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/男人制造封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1dD2iWQd",
    "yunPassword": "百度网盘(提取码：3y7e)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "国产电影",
    "name": "等爱归来",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/等爱归来.jpg",
    "summaryOfMovie": "导演: 康宁编剧: 毛毛主演: 陈志朋/张定涵/谢芳/张迪/洪乙心/曹力/胡悦/午马/孙玮伦/孙子皓/李佑安类型: 喜剧/爱情/悬疑制片国家/地区: 中国大陆语言: 汉语普通话上映日期: 2015-07-28(中国大陆)片长: 95分钟又名: 盗爱/LoveWillBeBack元末战乱，中华大地满目疮痍。明朝初年，朱元璋一统天下，为巩固统治，下令移民。大槐树下，青壮百姓哭别父母，骨肉分离，被迫押解移民...1949年悲怆情景再次上演，大槐树下，国民党士兵与父母妻小挥泪惜别，溃逃台湾......时光荏苒，六十余载转眼即逝，李晋楠（张定涵饰）年迈失智的奶奶（谢芳饰）每日坐于大槐树下，举目眺望，直至黄昏。谁也说不清问不明，老人究竟等的是谁，又对谁望眼欲穿。台商陈孝义（陈志朋饰）为保护下属马云禄（曹力饰），将未婚妻李晋楠所赠予的传世官窑瓷抵押于日本文物收藏商久代子（胡悦饰），却无意卷入一场惊世阴谋。李晋楠误解陈孝义，伤心离去。为了挽留爱人，风水大师贲放（张迪饰）带领陈孝义前去拜见师傅（午马饰），讨教破解之法。贲放的决策触动了马云禄的敏感神经。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/等爱归来封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1hqIXPOw",
    "yunPassword": "百度网盘(提取码：k7a4)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "424"
  },
  {
    "type": "日韩电影",
    "name": "危险的传言",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/危险的传言.jpg",
    "summaryOfMovie": "导演: 金光植编剧: 金光植主演: 金康宇/朴圣雄/安圣基/郑镇荣/高昌锡/高媛熙类型: 剧情/犯罪制片国家/地区: 韩国语言: 韩语上映日期: 2014-02-20(韩国)片长: 121分钟又名: 危险的传闻/八卦：危险的传闻/TabloidTruth热血勤奋的天才经纪人宇坤（金康宇饰），为了捧红一起共事的女演员崔美珍（高媛熙饰），所有事都竭尽全力，亲力亲为。而一则如小广告般散播开来的证券丑闻竟致使女演员丧命。失去一切的宇坤决心要找出消息散播的始作俑者。通过记者出身、现在以发送小广告为主业的朴社长（郑镇荣饰）和窃听高手百闻（高昌锡饰），宇坤了解到了制作、散播和消费小广告的幕后隐秘，并帮助其渐渐接近时间真相，但同时宇坤。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/危险的传言封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1jGlJL5s",
    "yunPassword": "百度网盘(提取码：0jlz)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "魔力麦克2",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/魔力麦克2.jpg",
    "summaryOfMovie": "导演: 格里高利·雅各布编剧: 雷德·卡罗林/查宁·塔图姆主演: 查宁·塔图姆/马特·波莫/乔·曼根尼罗/安布尔·赫德/贾达·萍克·史密斯/伊丽莎白·班克斯/安迪·麦克道威尔/加布里埃尔·伊格莱西亚斯/迈克尔·斯特拉罕/克丽丝特尔·亨特/简·麦克尼尔/唐纳德·格洛弗/凯文·纳什/亚当·罗德里格兹/史蒂芬·布斯/罗达·格里菲丝/金柏莉·德拉蒙德/瑞克·佛莱尔/胡安·彼德拉伊塔类型: 剧情/喜剧/音乐官方网站: www.magicmikemovie.com制片国家/地区: 美国语言: 英语上映日期: 2015-07-01(美国)片长: 115分钟又名: 巨揪舞壮士(港)/舞力麦克：尺度极限XXL(台)/魔力麦克XXL/MagicMike2麦克（查宁·塔图姆ChanningTatum饰）在脱衣舞男生涯的颠峰之时，急流勇退，远离了舞男的生活。后来，其他的舞男同伴也准备洗手不干。不过在收山之前，他们想要在美特尔海滩，展开一场盛大的告别秀，并邀请“魔力麦克\"重出江湖。麦克与伙伴们上路，中途在小镇杰克逊维尔及萨凡纳短暂停留，与老友重聚，也结识了许多新朋友，还学到新的舞技。在他们的最后一场大秀中，绝对会有让人大开眼界的劲爆演出。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/魔力麦克2截图.png",
    "baiduyun": "http://pan.baidu.com/s/1jGAgqdK",
    "yunPassword": "百度网盘(提取码：wnw5)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "港台电影",
    "name": "谜城",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/谜城.jpg",
    "summaryOfMovie": "导演: 林岭东编剧: 林岭东主演: 古天乐/余文乐/佟丽娅/张孝全/谢天华/元秋/李璨琛/伍允龙/姜皓文/林子善/任达华/高捷/马浴柯/谭炳文类型: 动作/惊悚/犯罪制片国家/地区: 中国大陆/香港语言: 汉语普通话/粤语/闽南语上映日期: 2015-07-30(中国大陆)/2015-08-20(香港)片长: 105分钟又名: 迷城/暴走迷城/WildCity小酒吧老板天民（古天乐饰）把醉酒女孩小云（佟丽娅饰）送回家时云见到男友George（谢天华饰）竟拼命挣扎，哀求天民带走她。无奈天民只得将其送往干妈家中休息。翌日，小云请求天民和其弟少聪（余文乐饰）帮忙向George取回证件欲离开香港，两人答应帮忙，期间却遭黑帮（张孝全饰）埋伏，三人只好一同逃命。事发之后，天民酒吧被黑帮骚扰、少聪的士也被恶意破坏，两人无可奈何，更不知道自己已被卷入涉及巨额黑金的斗争之中，只能奋力一战。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/谜城封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1dD8o87J",
    "yunPassword": "百度网盘(提取码：t3nu)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "429"
  },
  {
    "type": "欧美电影",
    "name": "神探巴克希",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神探巴克希.jpg",
    "summaryOfMovie": "导演: 迪巴卡尔·班纳吉编剧: SaradinduBandopaddhyay主演: 苏尚特·辛格·拉吉普特/菊池隆则/AnandTiwari/SwastikaMukherjee类型: 悬疑/惊悚制片国家/地区: 印度语言: 印地语上映日期: 2015-04-03(印度)又名: 皇家孟加拉侦探在当代解读战争蹂躏的加尔各答在1940年代，这部电影讲述byomkesh第一冒险（SushantSinghRajput），刚从大学毕业，他坑了自己对一个邪恶的天才是谁摧毁世界。这是他的智慧对抗最邪恶的罪魁祸首世界已经看到，在一个世界的谋杀案，国际政治阴谋和诱惑。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/神探巴克希封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o67WkeI",
    "yunPassword": "百度网盘(提取码：y0fk)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "437"
  },
  {
    "type": "欧美电影",
    "name": "阿提克斯研究所",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/阿提克斯研究所.jpg",
    "summaryOfMovie": "导演: 克里斯·斯帕林编剧: 克里斯·斯帕林主演: 莱亚·吉斯特德/威廉·麦鲍瑟/莎朗·摩翰/约翰·鲁宾斯坦/HannahCowley/RobKerkovich/杰拉德·迈克库劳奇/TrishaRaeStahl/JulianAcosta/AntonNarinskiy/阿隆·克拉文/安妮·贝坦克特/KarenE.Wright/ErichLane/BrianChenoweth类型: 剧情/惊悚/恐怖制片国家/地区: 美国语言: 英语上映日期: 2015-01-20片长: 92分钟20世纪50、60年代，亨利·韦斯特博士（威廉·麦鲍瑟WilliamMapother饰）创建了灵学实验室阿提克斯研究所，针对超能力、透视、读心术、隔空取物等边缘学科展开研究。虽然遭遇了无数的挫折与嘲笑，但是韦斯特博士仍坚持不懈朝着目标前进。1975年，他的实验室因某起骗局而被迫关闭，就在此时一个略显神经质的女人朱迪思·温斯黛德（莱亚·吉斯特德RyaKihlstedt饰）被送到实验室。她之前因伤而拥有了超能力，而其看似货真价实的超能力迅速令见多识广的科学家们大为折服。在这一过程中，朱迪思的能力不断加强，甚至已经到了失控的程度。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/阿提克斯研究所封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnyjn6f",
    "yunPassword": "百度网盘(提取码：clwq)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "希望生长的地方",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/希望生长的地方.jpg",
    "summaryOfMovie": "导演: ChrisDowling编剧: ChrisDowling主演: 克里斯托弗·普拉哈/DavidDeSanctis/DanicaMcKellar类型: 剧情制片国家/地区: 美国语言: 英语上映日期: 2015-05-15片长: 95分钟又名: 茁壮新希望(台)/希望补给站(台)/在希望成长的地方/希望在哪里成长本片讲述KristofferPolaha饰演的棒球运动员因为个人问题，遗憾地结束了职业生涯。沮丧的他意外结识了在当地杂货店工作的小伙儿。慢慢的，他与这位患有唐氏综合症但乐观善良的打工仔成为朋友，并在他的帮助下，日渐走出人生低谷。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/希望生长的地方封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnmDOmV",
    "yunPassword": "百度网盘(提取码：mawa)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  },
  {
    "type": "欧美电影",
    "name": "小叮当：永无兽传奇",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小叮当：永无兽传奇.jpg",
    "summaryOfMovie": "导演: SteveLoter编剧: SteveLoter/TomRogers主演: 金妮弗·古德温/梅·惠特曼/刘玉玲/安杰丽卡·休斯顿/雷文-西蒙尼/帕梅拉·阿德龙/托马斯·列农/杰西·麦卡尼/梅根·希尔提类型: 动画/家庭/冒险制片国家/地区: 美国语言: 英语上映日期: 2014-12-19(美国)片长: 76分钟又名: Clochetteetlacréaturelégendaire小叮当的朋友芳雯结识了强大又神秘的永无兽，并与它成为了朋友。但是其它仙子并不认可永无兽，芳雯会如何解决这次信任危机呢？",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小叮当：永无兽传奇截图.png",
    "baiduyun": "http://pan.baidu.com/s/1kTmx547",
    "yunPassword": "百度网盘(提取码：sjk1)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "400"
  },
  {
    "type": "日韩电影",
    "name": "东京婚约",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/东京婚约.jpg",
    "summaryOfMovie": "导演: StefanLiberski编剧: StefanLiberski/AmélieNothomb主演: 波林·艾蒂安/TaichiInoue/朱莉·勒布勒东制片国家/地区: 比利时/加拿大/法国语言: 法语/日语/英语片长: 100分钟又名: 东京未婚妻(港)出生在日本的比利时女孩艾蜜莉，回到了童年的故乡东京，并梦想在此生活。艾蜜莉认为学日文最有效的方法就是教法文，因此认识了凛吏，一个正在学习法文的大二学生。两人从师生渐成朋友而成恋人。文化差异使两人的相处充满趣味：艾蜜莉喜爱尝日本食物，而凛吏却喜爱西方食物。凛吏为艾蜜莉准备日式食物，自己却一口都不吃。爱蜜莉赞叹的日本事物，凛吏却无兴趣。凛吏带着艾蜜莉重温对日本的记忆。艾蜜莉因凛吏而日文进步神速，凛吏的法文也是如此。但爱情是否能让这对一国恋人白头偕老呢？还有多少未知的考验在等待两人。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/东京婚约封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1pJN3glP",
    "yunPassword": "百度网盘(提取码：qj3d)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "413"
  },
  {
    "type": "欧美电影",
    "name": "布朗夫人的儿子们大电影",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/布朗夫人的儿子们大电影.jpg",
    "summaryOfMovie": "导演: BenKellett编剧: BrendanO'Carroll主演: DavidArmand/RichardAttlee/RobertBathurst制片国家/地区: 英国语言: 英语上映日期: 2014-06-27(英国)片长: 94分钟布朗夫人经营这一个水果摊，继续过着怡然自得的生活，然而很快，她的水果摊所在的地皮被开发商看中，她们面临着被赶走的危险。布朗夫人立刻把朋友召集到一起商量对策，大家达成一致，要跟开发商抗争到底，面对着开发商咄咄逼人的气势，布朗夫人丝毫没有畏惧。为了吸引公众的注意力，她甚至找来了各路媒体，进行铺天盖地的报道宣传，她还来到了法院，跟开发商对薄公堂，布朗夫人用自己的三寸不烂之舌为自己赢得了优势，在这个过程中上演了一系列捧腹搞笑的戏码。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/布朗夫人的儿子们大电影封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1gdpn3yV",
    "yunPassword": "百度网盘(提取码：ht7m)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "406"
  },
  {
    "type": "欧美电影",
    "name": "爱与慈悲",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/爱与慈悲.jpg",
    "summaryOfMovie": "导演: 比尔·波拉德编剧: 欧伦·穆弗曼主演: 约翰·库萨克/保罗·达诺/伊丽莎白·班克斯/保罗·吉亚玛提/约翰尼·斯尼德/杰克·阿贝尔/比尔·坎普/布莱特·达文/肯尼·沃莫尔德/艾琳·达克/迪·沃伦斯/格雷厄姆·罗杰斯/乔安娜·高茵/泰森·里特类型: 剧情/音乐/传记官方网站: loveandmercyfilm.com制片国家/地区: 美国语言: 英语上映日期: 2014-09-07(多伦多电影节)/2015-06-05(美国)片长: 121分钟又名: 迷失巨声(港)/爱与宽容(台)/LoveandMercy上世纪六十年代著名迷幻摇滚乐队“海滩男孩\"（TheBeachBoys）队长布莱恩·威尔逊（约翰·库萨克JohnCusack饰），词曲创作、和声以及编曲样样精通，创作才华惊人，他带领“海滩男孩\"走向事业巅峰。布莱恩虽打造出影响全世界的畅销专辑，但却因压力过大导致精神崩溃，直到他遇到饱受争议的心理医生尤金·兰迪（保罗·吉亚玛提PaulGiamatti饰）。尤金·兰迪的治疗方法极其激进并富有对抗性，在他的治疗下，布莱恩的病情有所好转，于此同时，布莱恩的生活和事业也被他操控......本片改编自曾荣获格莱美终身成就奖的传奇摇滚乐队“海滩男孩\"中的成员布莱恩·威尔逊的真实经历。约翰·库萨克（JohnCusack）与保罗·达诺（PaulDano）分别饰演中年布莱恩与青年布莱恩。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/爱与慈悲封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1gd2eCy3",
    "yunPassword": "百度网盘(提取码：3fv0)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "450"
  },
  {
    "type": "欧美电影",
    "name": "故事的故事",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/故事的故事.jpg",
    "summaryOfMovie": "导演: 马提欧·加洛尼编剧: GiambattistaBasile/马提欧·加洛尼/EdoardoAlbinati/UgoChiti/MassimoGaudioso主演: 萨尔玛·海耶克/文森特·卡索/约翰·C·赖利/托比·琼斯/雪莉·亨德森/更多...类型: 历史/奇幻制片国家/地区: 意大利/法国/英国语言: 英语/意大利语上映日期: 2015-05-14(意大利)片长: 125分钟又名: TheTaleofTales影片由“女王\"（TheQueen）、“两个老妇人\"（TheTwoOldWomen）及“跳蚤\"（TheFlea）多个单元组成。改编自17世纪由吉姆巴地斯达·巴西耳创作出版的那不勒斯语童话故事集《五日谈》（Pentamerone）。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/故事的故事封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bn16Os3",
    "yunPassword": "百度网盘(提取码：fm2i)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "442"
  },
  {
    "type": "欧美电影",
    "name": "祭坛",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/祭坛.jpg",
    "summaryOfMovie": "导演: 尼克·维林编剧: 尼克·维林主演: OliviaWilliams/马修·莫迪恩/AntoniaClarke/AdamThomasWright/理查德·迪兰/HowardLee/JonathanJaynes/RebeccaCalder/SteveOram/DavidJ.Peel类型: 悬疑/恐怖制片国家/地区: 英国语言: 英语上映日期: 2014-12-27(英国)片长: 89分钟又名: TheHauntingofRadcliffeHouse汉密尔顿一家去修复老房子，不料惊动了房子里的老鬼们，且看他们如何趁夜逃脱老鬼们的迫害。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/祭坛截图.png",
    "baiduyun": "http://pan.baidu.com/s/1c0AYlwO",
    "yunPassword": "百度网盘(提取码：kpne)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "400"
  },
  {
    "type": "欧美电影",
    "name": "蓝调女王",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/蓝调女王.jpg",
    "summaryOfMovie": "导演: 迪·里斯编剧: ChrisCleveland/BettinaGilois/迪·里斯主演: 迈克尔·威廉姆斯/提卡·森普特/奎恩·拉提法/布莱恩·格林伯格/奥利弗·普莱特/坎蒂·亚历山大/迈克·艾普斯/莫妮克/查尔斯·达顿/ToryKittles/L.WarrenYoung/JimR.Coleman/TerenceRosemore/MarieL.Burke/JoeKnezevich类型: 剧情/音乐/传记制片国家/地区: 美国语言: 英语上映日期: 2015-05-16片长: 112分钟饶舌女歌手皇后拉蒂法女王饰演传奇蓝调歌手贝西史密丝,她精采而深刻的诠释贝西史密丝从努力奋斗的年轻歌手慢慢成为\"蓝调天后\"的心路历程。贝西是20世纪最成功的歌手之一，时至今日她的影响力仍然无远弗届。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/蓝调女王封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1mg8FUdE",
    "yunPassword": "百度网盘(提取码：l6a6)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  },
  {
    "type": "国产电影",
    "name": "坏姐姐之拆婚联盟",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/坏姐姐之拆婚联盟.jpg",
    "summaryOfMovie": "导演: 金泰均编剧: 柏邦妮主演: 陈意涵/池珍熙/陈学冬/钟丽缇/齐溪/李昕芸/禹惠林/刘仪伟/谢东燊/刘循子墨类型: 喜剧/爱情制片国家/地区: 中国大陆/韩国语言: 汉语普通话上映日期: 2014-11-28(中国大陆)片长: 108分钟又名: 拆婚联盟/BadSister黄二珊（陈意涵饰）是一名职业占星师，某日，她得知身处韩国的弟弟黄一峰（陈学冬饰）即将和女友步入婚姻的殿堂，而那个女孩在星盘上却是黄一峰的克星，心急如焚的黄二珊想都没想就登上了驶往异国的飞机，势必要将两人拆散。在飞机上，喝醉的黄二珊邂逅了名为朴俊昊（池珍熙饰）的男子，误打误撞之中，她竟然将自己的“毁婚\"计划对朴俊昊和盘托出，哪知道这位深藏不露的大叔的真实身份竟然就是自己准弟媳妇的父亲。让黄二珊没有想到的是，朴俊昊竟然加入了自己的毁婚行动之中。在吵吵闹闹之间，两颗寂寞的心灵渐渐靠近，碰撞出了灿烂的爱情火花。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/坏姐姐之拆婚联盟封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i3GnBBv",
    "yunPassword": "百度网盘(提取码：gop5)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "日韩电影",
    "name": "嘘！禁止想象！Nineteen",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/嘘！禁止想象！Nineteen.jpg",
    "summaryOfMovie": "导演: 卢镇秀主演: ChoiWon-joon(최원준)/HanSe-i(한세이)/KimMin-gi(김민기)/LeeJae-in(이재인)/KimCheong-soon(김청순)/JangMoon-yeong(장문영)/HwangJi-hoo(황지후)/YooJi-hyeon(유지현)/ChaBo-seong(차보성)/ParkJeong-yoon(박정윤)/SeoSeung-hyeon(서승현)/So-ra(소라)类型: 喜剧/情色制片国家/地区: 韩国语言: 韩语上映日期: 2015-04-20(韩国)片长: 57分钟(韩国)又名: Nineteen: Shh!NoImagining!一个聪明的手指电影成人额定浪漫的年轻男性和女性谁在SNS总控制之间。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/嘘！禁止想象！Nineteen封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1kTCLCqz",
    "yunPassword": "百度网盘(提取码：gj0d)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "394"
  },
  {
    "type": "国产电影",
    "name": "我是路人甲",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是路人甲.jpg",
    "summaryOfMovie": "导演: 尔冬升编剧: 尔冬升主演: 万国鹏/王婷/沈凯/徐小琴/林晨/魏星/蒿怡帆/蒿怡菲/覃培军/王昭/张文斌/林俭/耿立树/张喜来/周鹏/寇骏/姜涛/袁咏仪/方中信/刘伟强/冯德伦/吴彦祖/尔冬升/麦兆辉/庄文强/方平/张静初/许鞍华/林更新/蒋梦婕/陆剑明类型: 剧情/喜剧制片国家/地区: 中国大陆语言: 汉语普通话/粤语/浙江方言上映日期: 2015-07-03(中国大陆)片长: 134分钟又名: IAmSomebody大学毕业后，怀揣着成为一名演员的梦想的万国鹏（万国鹏饰）孤身一人背井离乡，远赴大名鼎鼎的浙江横店，希望能够在这里打拼出一片属于自己的天地。然而，现实远比想象之中要残酷得多，在这个弱肉强食的世界里，空有一份对于梦想的热情还远远不够，在经历了无数挫折和失败后，万国鹏总算混出了点名堂，成为了一名专业的群众演员。在横店，万国鹏见到了无数和他极为相似的年轻人，他们中，有人最终获得了成功实现了梦想，有人误入歧途人生毁于一旦，但更多的，是经历了千辛万苦却放弃了梦想，回归了平淡的生活。一次偶然中，万国鹏结识了名为王婷（王婷饰）的女孩，她仿佛一束光，照亮了王国鹏的前路。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/我是路人甲封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qWrCIM4",
    "yunPassword": "百度网盘(提取码：chw1)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "国产电影",
    "name": "奥拉星：进击圣殿",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/奥拉星：进击圣殿.jpg",
    "summaryOfMovie": "导演: 钟智行编剧: 张炭/李哲睿主演: 张安琪/张琦/李正翔/周帅/刘北辰/金锋/赵路/詹佳/孟祥龙类型: 动画/儿童/奇幻/冒险制片国家/地区: 中国大陆语言: 汉语普通话上映日期: 2015-07-23(中国大陆)片长: 92分钟又名: 奥拉星大电影/奥拉星：至暗的启示/AolaStar主角东皇太一（李正翔配音）是上古神殿的守护者，当上古神殿遭遇入侵时，临危受命带着“天道无极\"逃往奥拉星，遭遇重创之后失去记忆，变为萌态亚比，被奥拉星人“兰丁（张安琪配音）\"收留，取名“太二\".太二（张琦配音）逐渐适应了奥拉星的生活并认识一些小伙伴，他们发现黑暗势力的阴谋，努力守护奥拉星，过程中，太二也开始恢复记忆，肩负起光复神殿的艰巨使命。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/奥拉星：进击圣殿封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1i34co53",
    "yunPassword": "百度网盘(提取码：yg2y)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "428"
  },
  {
    "type": "欧美电影",
    "name": "末日崩塌",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/末日崩塌.jpg",
    "summaryOfMovie": "导演: 布拉德·佩顿编剧: 卡尔顿·库斯/安德烈·法布里齐奥/杰里米·帕斯莫尔主演: 道恩·强森/亚历珊德拉·达达里奥/卡拉·古奇诺/雨果·约翰斯通-伯特/雅奇·潘嘉比/科尔顿·海恩斯/艾恩·格拉法德/保罗·吉亚玛提/凯莉·米洛/李威尹/瓦内萨·罗斯/马特·杰拉德/阿特·帕金森/罗宾·阿特金·唐斯/艾伦·D·柏温/亚历克·乌特戈夫/摩根·格莉芬/杰米斯·巴特勒/艾伦·波普尔顿类型: 动作/冒险/灾难制片国家/地区: 美国/澳大利亚语言: 英语上映日期: 2015-06-02(中国大陆)/2015-05-29(美国)片长: 114分钟又名: 加州大地震(台)/圣安地列斯雷·盖恩斯（道恩·强森DwayneJohnson饰）正驱车前往旧金山，随着一声巨响，周围的树木与电线杆变得七扭八歪，紧急刹车查看状况的盖恩斯被眼前的景象“惊呆了\": 公路被一条深不见底的裂隙截断，甚至错位，加油站被裂成两半隔着“峡谷\"遥遥相对。随着这场超级地震毫无预兆的来袭，整个城市浓烟滚滚、火光冲天，高楼大厦相继倒塌，到处都是惊慌失措的市民。更要命的是，如此强烈的地震，“摧枯拉朽\"般粉碎了坚实的大坝，洪水如猛兽一般涌向已经水深火热的城市，“天崩地陷\"的景象犹如“末日\"已然来临.",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/末日崩塌封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1bnjpFg7",
    "yunPassword": "百度网盘(提取码：4ioa)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "421"
  },
  {
    "type": "欧美电影",
    "name": "小黄人大眼萌",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小黄人大眼萌.jpg",
    "summaryOfMovie": "导演: 凯尔·巴尔达/皮埃尔·科芬编剧: 布莱恩·林奇主演: 桑德拉·布洛克/乔恩·哈姆/迈克尔·基顿/艾莉森·珍妮/史蒂夫·库根/珍妮弗·桑德斯/杰弗里·拉什/史蒂夫·卡瑞尔/皮埃尔·科芬/凯蒂·米克松/迈克尔·贝亚蒂/真田广之/大卫·罗森鲍姆/亚历克斯·道丁/保罗·索恩利类型: 喜剧/动画官方网站: www.minionsmovie.com制片国家/地区: 美国语言: 英语上映日期: 2015-09-13(中国大陆)/2015-07-10(美国)片长: 91分钟又名: 小黄人/迷你兵团(港)/小小兵(台)/小黄人大电影从地球诞生之初，一种奇怪的生物便出现在这颗蓝色的星球上。他们不断进化、蜕变，终于成为我们所熟悉的小黄人的模样。小黄人们毕生寻找邪恶的老大，以成为他的部属为荣，但是千百万年来的努力最终化成一场空。经历了一段长久的沉寂，名叫凯文的小黄人决定再度上路，他带着热爱音乐的斯图尔特、成事不足败事有余的鲍勃，漂洋过海来到了1968年的美国。三个小家伙偶然听说奥兰多即将召开“恶人大会\"，于是忙不迭地赶了过去，并且阴差阳错成为女魔头斯嘉丽·杀人狂（桑德拉·布洛克SandraBullock配音）的随从。很快斯嘉丽交给他们一个任务，那就是窃取英国女王的王冠。不知轻重的小家伙们笑嘻嘻地出征，等待他们的将是前所未有的大冒险。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/小黄人大眼萌封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1o6Bt9G2",
    "yunPassword": "百度网盘(提取码：9mmi)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "420"
  },
  {
    "type": "欧美电影",
    "name": "7分钟",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/7分钟.jpg",
    "summaryOfMovie": "导演: JayMartin编剧: JayMartin主演: 卢克·米切尔/莱文·兰宾/杰森·雷特/克里斯·克里斯托佛森/乔尔·默里/凯文·盖奇/赞恩·霍尔茨/拉塞尔·霍奇金森/ChrisSoldevilla/布兰登·哈代斯蒂/DylanArnold/RichMorris/JessicaMartin/MarielNeto/RosalieMiller类型: 惊悚/犯罪制片国家/地区: 美国语言: 英语上映日期: 2015-06-26(美国)又名: SevenMinutes在欠债一毒枭后，三个绝望的年轻人被迫实施公然抢劫。开始作为一个简单的计划：“在七分钟\"迅速升级为一个危险的游戏，生或死。作为抢劫的每分钟运转的，真正的动机是揭示和意想不到的曲折加大赌注一个激动人心的高潮。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/7分钟封面.jpg",
    "baiduyun": "http://pan.baidu.com/s/1qWj5g08",
    "yunPassword": "百度网盘(提取码：w61s)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "404"
  },
  {
    "type": "欧美电影",
    "name": "成人初学者",
    "imageOfMovie": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/成人初学者.jpg",
    "summaryOfMovie": "导演: 罗斯·卡兹编剧: 尼克·克罗尔/JeffCox/LizFlahive主演: 尼克·克罗尔/萝丝·拜恩/鲍比·坎纳瓦尔/乔尔·麦克哈尔/凯特琳·菲茨杰拉德/鲍拉·加茜丝/乔西·查尔斯/简·科拉克斯基/鲍比·莫伊尼汉/迈克·比尔比利亚/杰森·曼兹沃克斯类型: 剧情/喜剧制片国家/地区: 美国语言: 英语上映日期: 2014-09-08(多伦多电影节)/2015-04-24(美国)片长: 90分钟又名: Brother'sKeeper故事创意来自影片男主角，喜剧演员尼克·科罗尔，讲述一个年轻、自恋的企业家（科罗尔饰），自己的公司在即将大展宏图的前夜忽然崩溃。生活陷入一团混乱的他，不得不离开曼哈顿，搬到郊区，与疏远多年的姐姐，她的丈夫————现实生活中的夫妻萝丝·拜恩与鲍比·坎纳瓦尔出演————以及自己3岁的外甥同住。在照顾小外甥的过程中，他开始发现生命的意义，以及作为一个成年人，如何重新开始。",
    "printscreen": "http://abben-picture.oss-cn-shenzhen.aliyuncs.com/成人初学者截图.png",
    "baiduyun": "http://pan.baidu.com/s/1kT5tV6Z",
    "yunPassword": "百度网盘(提取码：fvrp)",
    "imageOfMovieHeight": "600",
    "imageOfMovieWidth": "405"
  }
]