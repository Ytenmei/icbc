const list3 = [
	{
		value: '1',
		name: '上海市',
		parent: '0'
	},
	{
		value: '2',
		name: '北京市',
		parent: '0'
	},
	{
		value: '3',
		name: '天津市',
		parent: '0'
	},
	{
		value: '4',
		name: '河北省',
		parent: '0'
	},
	{
		value: '5',
		name: '江苏省',
		parent: '0'
	},
	{
		value: '6',
		name: '浙江省',
		parent: '0'
	},
	{
		value: '7',
		name: '重庆市',
		parent: '0'
	},
	{
		value: '8',
		name: '内蒙古自治区',
		parent: '0'
	},
	{
		value: '9',
		name: '辽宁省',
		parent: '0'
	},
	{
		value: '10',
		name: '吉林省',
		parent: '0'
	},
	{
		value: '11',
		name: '黑龙江省',
		parent: '0'
	},
	{
		value: '12',
		name: '四川省',
		parent: '0'
	},
	{
		value: '13',
		name: '安徽省',
		parent: '0'
	},
	{
		value: '14',
		name: '福建省',
		parent: '0'
	},
	{
		value: '15',
		name: '江西省',
		parent: '0'
	},
	{
		value: '16',
		name: '山东省',
		parent: '0'
	},
	{
		value: '17',
		name: '河南省',
		parent: '0'
	},
	{
		value: '18',
		name: '湖北省',
		parent: '0'
	},
	{
		value: '19',
		name: '湖南省',
		parent: '0'
	},
	{
		value: '20',
		name: '广东省',
		parent: '0'
	},
	{
		value: '21',
		name: '广西壮族自治区',
		parent: '0'
	},
	{
		value: '22',
		name: '海南省',
		parent: '0'
	},
	{
		value: '23',
		name: '贵州省',
		parent: '0'
	},
	{
		value: '24',
		name: '云南省',
		parent: '0'
	},
	{
		value: '25',
		name: '西藏自治区',
		parent: '0'
	},
	{
		value: '26',
		name: '陕西省',
		parent: '0'
	},
	{
		value: '27',
		name: '甘肃省',
		parent: '0'
	},
	{
		value: '28',
		name: '青海省',
		parent: '0'
	},
	{
		value: '29',
		name: '新疆维吾尔自治区',
		parent: '0'
	},
	{
		value: '30',
		name: '宁夏回族自治区',
		parent: '0'
	},
	{
		value: '32',
		name: '山西省',
		parent: '0'
	},
	{
		value: '332',
		name: '渭南市',
		parent: '26'
	},
	{
		value: '333',
		name: '汉中市',
		parent: '26'
	},
	{
		value: '334',
		name: '咸阳市',
		parent: '26'
	},
	{
		value: '335',
		name: '榆林市',
		parent: '26'
	},
	{
		value: '336',
		name: '商洛市',
		parent: '26'
	},
	{
		value: '337',
		name: '兰州市',
		parent: '27'
	},
	{
		value: '338',
		name: '金昌市',
		parent: '27'
	},
	{
		value: '339',
		name: '嘉峪关市',
		parent: '27'
	},
	{
		value: '340',
		name: '白银市',
		parent: '27'
	},
	{
		value: '341',
		name: '天水市',
		parent: '27'
	},
	{
		value: '342',
		name: '武威市',
		parent: '27'
	},
	{
		value: '343',
		name: '张掖市',
		parent: '27'
	},
	{
		value: '344',
		name: '酒泉市',
		parent: '27'
	},
	{
		value: '345',
		name: '庆阳市',
		parent: '27'
	},
	{
		value: '346',
		name: '平凉市',
		parent: '27'
	},
	{
		value: '347',
		name: '定西市',
		parent: '27'
	},
	{
		value: '348',
		name: '陇南市',
		parent: '27'
	},
	{
		value: '349',
		name: '临夏回族自治州',
		parent: '27'
	},
	{
		value: '350',
		name: '甘南藏族自治州',
		parent: '27'
	},
	{
		value: '351',
		name: '西宁市',
		parent: '28'
	},
	{
		value: '352',
		name: '海东地区',
		parent: '28'
	},
	{
		value: '353',
		name: '海北藏族自治州',
		parent: '28'
	},
	{
		value: '354',
		name: '黄南藏族自治州',
		parent: '28'
	},
	{
		value: '355',
		name: '海南藏族自治州',
		parent: '28'
	},
	{
		value: '356',
		name: '果洛藏族自治州',
		parent: '28'
	},
	{
		value: '357',
		name: '玉树藏族自治州',
		parent: '28'
	},
	{
		value: '358',
		name: '海西蒙古族藏族自治州',
		parent: '28'
	},
	{
		value: '359',
		name: '乌鲁木齐市',
		parent: '29'
	},
	{
		value: '360',
		name: '克拉玛依市',
		parent: '29'
	},
	{
		value: '361',
		name: '吐鲁番地区',
		parent: '29'
	},
	{
		value: '362',
		name: '哈密地区',
		parent: '29'
	},
	{
		value: '363',
		name: '和田地区',
		parent: '29'
	},
	{
		value: '364',
		name: '阿克苏地区',
		parent: '29'
	},
	{
		value: '365',
		name: '喀什地区',
		parent: '29'
	},
	{
		value: '366',
		name: '克孜勒苏柯尔克孜自治州',
		parent: '29'
	},
	{
		value: '367',
		name: '巴音郭楞蒙古自治州',
		parent: '29'
	},
	{
		value: '368',
		name: '昌吉回族自治州',
		parent: '29'
	},
	{
		value: '369',
		name: '博尔塔拉蒙古自治州',
		parent: '29'
	},
	{
		value: '370',
		name: '伊犁哈萨克自治州',
		parent: '29'
	},
	{
		value: '371',
		name: '塔城地区',
		parent: '29'
	},
	{
		value: '372',
		name: '阿勒泰地区',
		parent: '29'
	},
	{
		value: '373',
		name: '石河子市',
		parent: '29'
	},
	{
		value: '374',
		name: '阿拉尔市',
		parent: '29'
	},
	{
		value: '375',
		name: '图木舒克市',
		parent: '29'
	},
	{
		value: '376',
		name: '五家渠市',
		parent: '29'
	},
	{
		value: '377',
		name: '银川市',
		parent: '30'
	},
	{
		value: '378',
		name: '石嘴山市',
		parent: '30'
	},
	{
		value: '379',
		name: '吴忠市',
		parent: '30'
	},
	{
		value: '380',
		name: '固原市',
		parent: '30'
	},
	{
		value: '381',
		name: '中卫市',
		parent: '30'
	},
	{
		value: '382',
		name: '高雄市',
		parent: '31'
	},
	{
		value: '383',
		name: '基隆市',
		parent: '31'
	},
	{
		value: '384',
		name: '台南市',
		parent: '31'
	},
	{
		value: '385',
		name: '台中市',
		parent: '31'
	},
	{
		value: '386',
		name: '台北市',
		parent: '31'
	},
	{
		value: '387',
		name: '太原市',
		parent: '32'
	},
	{
		value: '388',
		name: '晋中市',
		parent: '32'
	},
	{
		value: '389',
		name: '运城市',
		parent: '32'
	},
	{
		value: '390',
		name: '大同市',
		parent: '32'
	},
	{
		value: '391',
		name: '阳泉市',
		parent: '32'
	},
	{
		value: '392',
		name: '临汾市',
		parent: '32'
	},
	{
		value: '393',
		name: '吕梁市',
		parent: '32'
	},
	{
		value: '394',
		name: '朔州市',
		parent: '32'
	},
	{
		value: '395',
		name: '长治市',
		parent: '32'
	},
	{
		value: '396',
		name: '晋城市',
		parent: '32'
	},
	{
		value: '397',
		name: '忻州市',
		parent: '32'
	},
	{
		value: '398',
		name: '莱芜市',
		parent: '16'
	},
	{
		value: '303',
		name: '昆明市',
		parent: '24'
	},
	{
		value: '304',
		name: '曲靖市',
		parent: '24'
	},
	{
		value: '305',
		name: '玉溪市',
		parent: '24'
	},
	{
		value: '306',
		name: '保山市',
		parent: '24'
	},
	{
		value: '307',
		name: '昭通市',
		parent: '24'
	},
	{
		value: '308',
		name: '丽江市',
		parent: '24'
	},
	{
		value: '309',
		name: '普洱市',
		parent: '24'
	},
	{
		value: '310',
		name: '临沧市',
		parent: '24'
	},
	{
		value: '311',
		name: '文山壮族苗族自治州',
		parent: '24'
	},
	{
		value: '312',
		name: '红河哈尼族彝族自治州',
		parent: '24'
	},
	{
		value: '313',
		name: '西双版纳傣族自治州',
		parent: '24'
	},
	{
		value: '314',
		name: '楚雄彝族自治州',
		parent: '24'
	},
	{
		value: '315',
		name: '大理白族自治州',
		parent: '24'
	},
	{
		value: '316',
		name: '德宏傣族景颇族自治州',
		parent: '24'
	},
	{
		value: '317',
		name: '怒江傈僳族自治州',
		parent: '24'
	},
	{
		value: '318',
		name: '迪庆藏族自治州',
		parent: '24'
	},
	{
		value: '320',
		name: '拉萨市',
		parent: '25'
	},
	{
		value: '321',
		name: '昌都地区',
		parent: '25'
	},
	{
		value: '322',
		name: '山南地区',
		parent: '25'
	},
	{
		value: '323',
		name: '日喀则地区',
		parent: '25'
	},
	{
		value: '324',
		name: '那曲地区',
		parent: '25'
	},
	{
		value: '325',
		name: '阿里地区',
		parent: '25'
	},
	{
		value: '326',
		name: '林芝地区',
		parent: '25'
	},
	{
		value: '327',
		name: '西安市',
		parent: '26'
	},
	{
		value: '328',
		name: '铜川市',
		parent: '26'
	},
	{
		value: '329',
		name: '延安市',
		parent: '26'
	},
	{
		value: '330',
		name: '安康市',
		parent: '26'
	},
	{
		value: '331',
		name: '宝鸡市',
		parent: '26'
	},
	{
		value: '1',
		name: '上海市',
		parent: '1'
	},
	{
		value: '23',
		name: '天津市',
		parent: '3'
	},
	{
		value: '25',
		name: '石家庄市',
		parent: '4'
	},
	{
		value: '26',
		name: '邢台市',
		parent: '4'
	},
	{
		value: '27',
		name: '邯郸市',
		parent: '4'
	},
	{
		value: '28',
		name: '张家口市',
		parent: '4'
	},
	{
		value: '29',
		name: '保定市',
		parent: '4'
	},
	{
		value: '30',
		name: '承德市',
		parent: '4'
	},
	{
		value: '31',
		name: '唐山市',
		parent: '4'
	},
	{
		value: '32',
		name: '秦皇岛市',
		parent: '4'
	},
	{
		value: '33',
		name: '沧州市',
		parent: '4'
	},
	{
		value: '34',
		name: '衡水市',
		parent: '4'
	},
	{
		value: '35',
		name: '廊坊市',
		parent: '4'
	},
	{
		value: '37',
		name: '南京市',
		parent: '5'
	},
	{
		value: '38',
		name: '无锡市',
		parent: '5'
	},
	{
		value: '39',
		name: '徐州市',
		parent: '5'
	},
	{
		value: '40',
		name: '常州市',
		parent: '5'
	},
	{
		value: '41',
		name: '苏州市',
		parent: '5'
	},
	{
		value: '42',
		name: '南通市',
		parent: '5'
	},
	{
		value: '43',
		name: '连云港市',
		parent: '5'
	},
	{
		value: '44',
		name: '淮安市',
		parent: '5'
	},
	{
		value: '45',
		name: '盐城市',
		parent: '5'
	},
	{
		value: '46',
		name: '扬州市',
		parent: '5'
	},
	{
		value: '47',
		name: '镇江市',
		parent: '5'
	},
	{
		value: '48',
		name: '泰州市',
		parent: '5'
	},
	{
		value: '49',
		name: '宿迁市',
		parent: '5'
	},
	{
		value: '50',
		name: '杭州市',
		parent: '6'
	},
	{
		value: '51',
		name: '宁波市',
		parent: '6'
	},
	{
		value: '52',
		name: '温州市',
		parent: '6'
	},
	{
		value: '53',
		name: '嘉兴市',
		parent: '6'
	},
	{
		value: '54',
		name: '湖州市',
		parent: '6'
	},
	{
		value: '55',
		name: '绍兴市',
		parent: '6'
	},
	{
		value: '56',
		name: '金华市',
		parent: '6'
	},
	{
		value: '57',
		name: '衢州市',
		parent: '6'
	},
	{
		value: '58',
		name: '舟山市',
		parent: '6'
	},
	{
		value: '59',
		name: '台州市',
		parent: '6'
	},
	{
		value: '60',
		name: '丽水市',
		parent: '6'
	},
	{
		value: '61',
		name: '重庆市',
		parent: '7'
	},
	{
		value: '62',
		name: '呼和浩特市',
		parent: '8'
	},
	{
		value: '63',
		name: '包头市',
		parent: '8'
	},
	{
		value: '64',
		name: '乌海市',
		parent: '8'
	},
	{
		value: '65',
		name: '赤峰市',
		parent: '8'
	},
	{
		value: '66',
		name: '通辽市',
		parent: '8'
	},
	{
		value: '67',
		name: '鄂尔多斯市',
		parent: '8'
	},
	{
		value: '68',
		name: '呼伦贝尔市',
		parent: '8'
	},
	{
		value: '69',
		name: '巴彦淖尔市',
		parent: '8'
	},
	{
		value: '70',
		name: '乌兰察布市',
		parent: '8'
	},
	{
		value: '71',
		name: '兴安盟',
		parent: '8'
	},
	{
		value: '72',
		name: '锡林郭勒盟',
		parent: '8'
	},
	{
		value: '73',
		name: '阿拉善盟',
		parent: '8'
	},
	{
		value: '74',
		name: '沈阳市',
		parent: '9'
	},
	{
		value: '75',
		name: '大连市',
		parent: '9'
	},
	{
		value: '76',
		name: '鞍山市',
		parent: '9'
	},
	{
		value: '77',
		name: '丹东市',
		parent: '9'
	},
	{
		value: '78',
		name: '营口市',
		parent: '9'
	},
	{
		value: '79',
		name: '锦州市',
		parent: '9'
	},
	{
		value: '80',
		name: '阜新市',
		parent: '9'
	},
	{
		value: '81',
		name: '抚顺市',
		parent: '9'
	},
	{
		value: '82',
		name: '辽阳市',
		parent: '9'
	},
	{
		value: '83',
		name: '本溪市',
		parent: '9'
	},
	{
		value: '84',
		name: '铁岭市',
		parent: '9'
	},
	{
		value: '85',
		name: '盘锦市',
		parent: '9'
	},
	{
		value: '86',
		name: '朝阳市',
		parent: '9'
	},
	{
		value: '87',
		name: '葫芦岛市',
		parent: '9'
	},
	{
		value: '88',
		name: '长春市',
		parent: '10'
	},
	{
		value: '89',
		name: '辽源市',
		parent: '10'
	},
	{
		value: '90',
		name: '通化市',
		parent: '10'
	},
	{
		value: '91',
		name: '白山市',
		parent: '10'
	},
	{
		value: '92',
		name: '松原市',
		parent: '10'
	},
	{
		value: '93',
		name: '吉林市',
		parent: '10'
	},
	{
		value: '94',
		name: '四平市',
		parent: '10'
	},
	{
		value: '95',
		name: '白城市',
		parent: '10'
	},
	{
		value: '96',
		name: '延边州',
		parent: '10'
	},
	{
		value: '97',
		name: '哈尔滨市',
		parent: '11'
	},
	{
		value: '98',
		name: '佳木斯市',
		parent: '11'
	},
	{
		value: '100',
		name: '齐齐哈尔市',
		parent: '11'
	},
	{
		value: '101',
		name: '鸡西市',
		parent: '11'
	},
	{
		value: '102',
		name: '牡丹江市',
		parent: '11'
	},
	{
		value: '103',
		name: '七台河市',
		parent: '11'
	},
	{
		value: '104',
		name: '绥化市',
		parent: '11'
	},
	{
		value: '105',
		name: '伊春市',
		parent: '11'
	},
	{
		value: '106',
		name: '鹤岗市',
		parent: '11'
	},
	{
		value: '107',
		name: '大庆市',
		parent: '11'
	},
	{
		value: '108',
		name: '黑河市',
		parent: '11'
	},
	{
		value: '109',
		name: '双鸭山市',
		parent: '11'
	},
	{
		value: '110',
		name: '大兴安岭地区',
		parent: '11'
	},
	{
		value: '111',
		name: '成都市',
		parent: '12'
	},
	{
		value: '112',
		name: '自贡市',
		parent: '12'
	},
	{
		value: '113',
		name: '攀枝花市',
		parent: '12'
	},
	{
		value: '114',
		name: '泸州市',
		parent: '12'
	},
	{
		value: '115',
		name: '德阳市',
		parent: '12'
	},
	{
		value: '116',
		name: '绵阳市',
		parent: '12'
	},
	{
		value: '117',
		name: '广元市',
		parent: '12'
	},
	{
		value: '118',
		name: '遂宁市',
		parent: '12'
	},
	{
		value: '119',
		name: '内江市',
		parent: '12'
	},
	{
		value: '120',
		name: '乐山市',
		parent: '12'
	},
	{
		value: '121',
		name: '南充市',
		parent: '12'
	},
	{
		value: '122',
		name: '宜宾市',
		parent: '12'
	},
	{
		value: '123',
		name: '广安市',
		parent: '12'
	},
	{
		value: '124',
		name: '达州市',
		parent: '12'
	},
	{
		value: '125',
		name: '眉山市',
		parent: '12'
	},
	{
		value: '126',
		name: '雅安市',
		parent: '12'
	},
	{
		value: '127',
		name: '巴中市',
		parent: '12'
	},
	{
		value: '128',
		name: '资阳市',
		parent: '12'
	},
	{
		value: '129',
		name: '阿坝藏族羌族自治州',
		parent: '12'
	},
	{
		value: '130',
		name: '甘孜藏族自治州',
		parent: '12'
	},
	{
		value: '131',
		name: '凉山彝族自治州',
		parent: '12'
	},
	{
		value: '133',
		name: '合肥市',
		parent: '13'
	},
	{
		value: '134',
		name: '淮北市',
		parent: '13'
	},
	{
		value: '135',
		name: '马鞍山市',
		parent: '13'
	},
	{
		value: '136',
		name: '宣城市',
		parent: '13'
	},
	{
		value: '137',
		name: '芜湖市',
		parent: '13'
	},
	{
		value: '138',
		name: '安庆市',
		parent: '13'
	},
	{
		value: '139',
		name: '六安市',
		parent: '13'
	},
	{
		value: '140',
		name: '铜陵市',
		parent: '13'
	},
	{
		value: '141',
		name: '池州市',
		parent: '13'
	},
	{
		value: '142',
		name: '阜阳市',
		parent: '13'
	},
	{
		value: '143',
		name: '淮南市',
		parent: '13'
	},
	{
		value: '144',
		name: '蚌埠市',
		parent: '13'
	},
	{
		value: '145',
		name: '黄山市',
		parent: '13'
	},
	{
		value: '146',
		name: '滁州市',
		parent: '13'
	},
	{
		value: '147',
		name: '宿州市',
		parent: '13'
	},
	{
		value: '148',
		name: '巢湖市',
		parent: '13'
	},
	{
		value: '149',
		name: '亳州市',
		parent: '13'
	},
	{
		value: '150',
		name: '福州市',
		parent: '14'
	},
	{
		value: '151',
		name: '厦门市',
		parent: '14'
	},
	{
		value: '152',
		name: '莆田市',
		parent: '14'
	},
	{
		value: '153',
		name: '三明市',
		parent: '14'
	},
	{
		value: '154',
		name: '泉州市',
		parent: '14'
	},
	{
		value: '155',
		name: '漳州市',
		parent: '14'
	},
	{
		value: '156',
		name: '南平市',
		parent: '14'
	},
	{
		value: '157',
		name: '龙岩市',
		parent: '14'
	},
	{
		value: '158',
		name: '宁德市',
		parent: '14'
	},
	{
		value: '159',
		name: '南昌市',
		parent: '15'
	},
	{
		value: '160',
		name: '景德镇市',
		parent: '15'
	},
	{
		value: '161',
		name: '萍乡市',
		parent: '15'
	},
	{
		value: '162',
		name: '九江市',
		parent: '15'
	},
	{
		value: '163',
		name: '新余市',
		parent: '15'
	},
	{
		value: '164',
		name: '鹰潭市',
		parent: '15'
	},
	{
		value: '165',
		name: '赣州市',
		parent: '15'
	},
	{
		value: '166',
		name: '吉安市',
		parent: '15'
	},
	{
		value: '167',
		name: '宜春市',
		parent: '15'
	},
	{
		value: '168',
		name: '抚州市',
		parent: '15'
	},
	{
		value: '169',
		name: '上饶市',
		parent: '15'
	},
	{
		value: '170',
		name: '济南市',
		parent: '16'
	},
	{
		value: '171',
		name: '青岛市',
		parent: '16'
	},
	{
		value: '172',
		name: '淄博市',
		parent: '16'
	},
	{
		value: '173',
		name: '枣庄市',
		parent: '16'
	},
	{
		value: '174',
		name: '东营市',
		parent: '16'
	},
	{
		value: '175',
		name: '烟台市',
		parent: '16'
	},
	{
		value: '176',
		name: '潍坊市',
		parent: '16'
	},
	{
		value: '177',
		name: '威海市',
		parent: '16'
	},
	{
		value: '178',
		name: '济宁市',
		parent: '16'
	},
	{
		value: '179',
		name: '泰安市',
		parent: '16'
	},
	{
		value: '180',
		name: '日照市',
		parent: '16'
	},
	{
		value: '181',
		name: '临沂市',
		parent: '16'
	},
	{
		value: '182',
		name: '德州市',
		parent: '16'
	},
	{
		value: '183',
		name: '聊城市',
		parent: '16'
	},
	{
		value: '184',
		name: '滨州市',
		parent: '16'
	},
	{
		value: '185',
		name: '菏泽市',
		parent: '16'
	},
	{
		value: '187',
		name: '郑州市',
		parent: '17'
	},
	{
		value: '188',
		name: '开封市',
		parent: '17'
	},
	{
		value: '189',
		name: '洛阳市',
		parent: '17'
	},
	{
		value: '190',
		name: '平顶山市',
		parent: '17'
	},
	{
		value: '191',
		name: '焦作市',
		parent: '17'
	},
	{
		value: '192',
		name: '鹤壁市',
		parent: '17'
	},
	{
		value: '193',
		name: '安阳市',
		parent: '17'
	},
	{
		value: '194',
		name: '漯河市',
		parent: '17'
	},
	{
		value: '195',
		name: '周口市',
		parent: '17'
	},
	{
		value: '196',
		name: '新乡市',
		parent: '17'
	},
	{
		value: '197',
		name: '濮阳市',
		parent: '17'
	},
	{
		value: '198',
		name: '三门峡市',
		parent: '17'
	},
	{
		value: '199',
		name: '驻马店市',
		parent: '17'
	},
	{
		value: '200',
		name: '许昌市',
		parent: '17'
	},
	{
		value: '201',
		name: '信阳市',
		parent: '17'
	},
	{
		value: '202',
		name: '商丘市',
		parent: '17'
	},
	{
		value: '203',
		name: '南阳市',
		parent: '17'
	},
	{
		value: '204',
		name: '济源市',
		parent: '17'
	},
	{
		value: '205',
		name: '武汉市',
		parent: '18'
	},
	{
		value: '206',
		name: '黄石市',
		parent: '18'
	},
	{
		value: '207',
		name: '襄阳市',
		parent: '18'
	},
	{
		value: '208',
		name: '十堰市',
		parent: '18'
	},
	{
		value: '209',
		name: '荆州市',
		parent: '18'
	},
	{
		value: '210',
		name: '宜昌市',
		parent: '18'
	},
	{
		value: '211',
		name: '荆门市',
		parent: '18'
	},
	{
		value: '212',
		name: '黄冈市',
		parent: '18'
	},
	{
		value: '213',
		name: '咸宁市',
		parent: '18'
	},
	{
		value: '214',
		name: '随州市',
		parent: '18'
	},
	{
		value: '215',
		name: '鄂州市',
		parent: '18'
	},
	{
		value: '216',
		name: '孝感市',
		parent: '18'
	},
	{
		value: '217',
		name: '恩施土家族苗族自治州',
		parent: '18'
	},
	{
		value: '218',
		name: '仙桃市',
		parent: '18'
	},
	{
		value: '219',
		name: '潜江市',
		parent: '18'
	},
	{
		value: '220',
		name: '天门市',
		parent: '18'
	},
	{
		value: '221',
		name: '神农架林区',
		parent: '18'
	},
	{
		value: '222',
		name: '长沙市',
		parent: '19'
	},
	{
		value: '223',
		name: '株洲市',
		parent: '19'
	},
	{
		value: '224',
		name: '湘潭市',
		parent: '19'
	},
	{
		value: '225',
		name: '衡阳市',
		parent: '19'
	},
	{
		value: '226',
		name: '邵阳市',
		parent: '19'
	},
	{
		value: '227',
		name: '岳阳市',
		parent: '19'
	},
	{
		value: '228',
		name: '常德市',
		parent: '19'
	},
	{
		value: '229',
		name: '张家界市',
		parent: '19'
	},
	{
		value: '230',
		name: '益阳市',
		parent: '19'
	},
	{
		value: '231',
		name: '郴州市',
		parent: '19'
	},
	{
		value: '232',
		name: '永州市',
		parent: '19'
	},
	{
		value: '233',
		name: '怀化市',
		parent: '19'
	},
	{
		value: '234',
		name: '娄底市',
		parent: '19'
	},
	{
		value: '235',
		name: '湘西土家族苗族自治州',
		parent: '19'
	},
	{
		value: '237',
		name: '广州市',
		parent: '20'
	},
	{
		value: '238',
		name: '深圳市',
		parent: '20'
	},
	{
		value: '239',
		name: '珠海市',
		parent: '20'
	},
	{
		value: '240',
		name: '汕头市',
		parent: '20'
	},
	{
		value: '241',
		name: '韶关市',
		parent: '20'
	},
	{
		value: '242',
		name: '佛山市',
		parent: '20'
	},
	{
		value: '243',
		name: '江门市',
		parent: '20'
	},
	{
		value: '244',
		name: '湛江市',
		parent: '20'
	},
	{
		value: '245',
		name: '茂名市',
		parent: '20'
	},
	{
		value: '246',
		name: '肇庆市',
		parent: '20'
	},
	{
		value: '247',
		name: '惠州市',
		parent: '20'
	},
	{
		value: '248',
		name: '梅州市',
		parent: '20'
	},
	{
		value: '249',
		name: '汕尾市',
		parent: '20'
	},
	{
		value: '250',
		name: '河源市',
		parent: '20'
	},
	{
		value: '251',
		name: '阳江市',
		parent: '20'
	},
	{
		value: '252',
		name: '清远市',
		parent: '20'
	},
	{
		value: '253',
		name: '东莞市',
		parent: '20'
	},
	{
		value: '254',
		name: '中山市',
		parent: '20'
	},
	{
		value: '255',
		name: '潮州市',
		parent: '20'
	},
	{
		value: '256',
		name: '揭阳市',
		parent: '20'
	},
	{
		value: '257',
		name: '云浮市',
		parent: '20'
	},
	{
		value: '258',
		name: '南宁市',
		parent: '21'
	},
	{
		value: '259',
		name: '柳州市',
		parent: '21'
	},
	{
		value: '260',
		name: '桂林市',
		parent: '21'
	},
	{
		value: '261',
		name: '梧州市',
		parent: '21'
	},
	{
		value: '262',
		name: '北海市',
		parent: '21'
	},
	{
		value: '263',
		name: '防城港市',
		parent: '21'
	},
	{
		value: '264',
		name: '钦州市',
		parent: '21'
	},
	{
		value: '265',
		name: '贵港市',
		parent: '21'
	},
	{
		value: '266',
		name: '玉林市',
		parent: '21'
	},
	{
		value: '267',
		name: '百色市',
		parent: '21'
	},
	{
		value: '268',
		name: '贺州市',
		parent: '21'
	},
	{
		value: '269',
		name: '河池市',
		parent: '21'
	},
	{
		value: '270',
		name: '来宾市',
		parent: '21'
	},
	{
		value: '271',
		name: '崇左市',
		parent: '21'
	},
	{
		value: '274',
		name: '海口市',
		parent: '22'
	},
	{
		value: '275',
		name: '三亚市',
		parent: '22'
	},
	{
		value: '276',
		name: '文昌市',
		parent: '22'
	},
	{
		value: '277',
		name: '琼海市',
		parent: '22'
	},
	{
		value: '278',
		name: '万宁市',
		parent: '22'
	},
	{
		value: '279',
		name: '五指山市',
		parent: '22'
	},
	{
		value: '280',
		name: '东方市',
		parent: '22'
	},
	{
		value: '281',
		name: '儋州市',
		parent: '22'
	},
	{
		value: '282',
		name: '临高县',
		parent: '22'
	},
	{
		value: '283',
		name: '澄迈县',
		parent: '22'
	},
	{
		value: '284',
		name: '定安县',
		parent: '22'
	},
	{
		value: '285',
		name: '屯昌县',
		parent: '22'
	},
	{
		value: '286',
		name: '昌江黎族自治县',
		parent: '22'
	},
	{
		value: '287',
		name: '白沙黎族自治县',
		parent: '22'
	},
	{
		value: '288',
		name: '琼中黎族苗族自治县',
		parent: '22'
	},
	{
		value: '289',
		name: '陵水黎族自治县',
		parent: '22'
	},
	{
		value: '290',
		name: '保亭黎族苗族自治县',
		parent: '22'
	},
	{
		value: '291',
		name: '乐东黎族自治县',
		parent: '22'
	},
	{
		value: '292',
		name: '三沙市',
		parent: '22'
	},
	{
		value: '294',
		name: '贵阳市',
		parent: '23'
	},
	{
		value: '295',
		name: '六盘水市',
		parent: '23'
	},
	{
		value: '296',
		name: '遵义市',
		parent: '23'
	},
	{
		value: '297',
		name: '安顺市',
		parent: '23'
	},
	{
		value: '298',
		name: '铜仁市',
		parent: '23'
	},
	{
		value: '299',
		name: '毕节市',
		parent: '23'
	},
	{
		value: '300',
		name: '黔西南布依族苗族自治州',
		parent: '23'
	},
	{
		value: '301',
		name: '黔东南苗族侗族自治州',
		parent: '23'
	},
	{
		value: '302',
		name: '黔南布依族苗族自治州',
		parent: '23'
	},
	{
		value: '1000',
		name: '北京市',
		parent: '2'
	},
	{
		value: '2199',
		name: '华容县',
		parent: '227'
	},
	{
		value: '2200',
		name: '湘阴县',
		parent: '227'
	},
	{
		value: '2201',
		name: '平江县',
		parent: '227'
	},
	{
		value: '2203',
		name: '武陵区',
		parent: '228'
	},
	{
		value: '2204',
		name: '鼎城区',
		parent: '228'
	},
	{
		value: '2205',
		name: '津市市',
		parent: '228'
	},
	{
		value: '2206',
		name: '安乡县',
		parent: '228'
	},
	{
		value: '2207',
		name: '汉寿县',
		parent: '228'
	},
	{
		value: '2208',
		name: '澧县',
		parent: '228'
	},
	{
		value: '2209',
		name: '临澧县',
		parent: '228'
	},
	{
		value: '2210',
		name: '桃源县',
		parent: '228'
	},
	{
		value: '2211',
		name: '石门县',
		parent: '228'
	},
	{
		value: '2213',
		name: '永定区',
		parent: '229'
	},
	{
		value: '2214',
		name: '武陵源区',
		parent: '229'
	},
	{
		value: '2215',
		name: '慈利县',
		parent: '229'
	},
	{
		value: '2216',
		name: '桑植县',
		parent: '229'
	},
	{
		value: '2218',
		name: '赫山区',
		parent: '230'
	},
	{
		value: '2219',
		name: '资阳区',
		parent: '230'
	},
	{
		value: '2220',
		name: '沅江市',
		parent: '230'
	},
	{
		value: '2221',
		name: '南县',
		parent: '230'
	},
	{
		value: '2222',
		name: '桃江县',
		parent: '230'
	},
	{
		value: '2223',
		name: '安化县',
		parent: '230'
	},
	{
		value: '2225',
		name: '北湖区',
		parent: '231'
	},
	{
		value: '2226',
		name: '苏仙区',
		parent: '231'
	},
	{
		value: '2227',
		name: '资兴市',
		parent: '231'
	},
	{
		value: '2228',
		name: '桂阳县',
		parent: '231'
	},
	{
		value: '2229',
		name: '永兴县',
		parent: '231'
	},
	{
		value: '2230',
		name: '宜章县',
		parent: '231'
	},
	{
		value: '2231',
		name: '嘉禾县',
		parent: '231'
	},
	{
		value: '2232',
		name: '临武县',
		parent: '231'
	},
	{
		value: '2233',
		name: '汝城县',
		parent: '231'
	},
	{
		value: '2234',
		name: '桂东县',
		parent: '231'
	},
	{
		value: '2235',
		name: '安仁县',
		parent: '231'
	},
	{
		value: '2237',
		name: '冷水滩区',
		parent: '232'
	},
	{
		value: '2238',
		name: '零陵区',
		parent: '232'
	},
	{
		value: '2239',
		name: '东安县',
		parent: '232'
	},
	{
		value: '2240',
		name: '道县',
		parent: '232'
	},
	{
		value: '2241',
		name: '宁远县',
		parent: '232'
	},
	{
		value: '2242',
		name: '江永县',
		parent: '232'
	},
	{
		value: '2243',
		name: '蓝山县',
		parent: '232'
	},
	{
		value: '2244',
		name: '新田县',
		parent: '232'
	},
	{
		value: '2245',
		name: '双牌县',
		parent: '232'
	},
	{
		value: '2246',
		name: '祁阳县',
		parent: '232'
	},
	{
		value: '2247',
		name: '江华瑶族自治县',
		parent: '232'
	},
	{
		value: '2249',
		name: '鹤城区',
		parent: '233'
	},
	{
		value: '2250',
		name: '洪江市',
		parent: '233'
	},
	{
		value: '2251',
		name: '沅陵县',
		parent: '233'
	},
	{
		value: '2252',
		name: '辰溪县',
		parent: '233'
	},
	{
		value: '2253',
		name: '溆浦县',
		parent: '233'
	},
	{
		value: '2254',
		name: '中方县',
		parent: '233'
	},
	{
		value: '2255',
		name: '会同县',
		parent: '233'
	},
	{
		value: '2256',
		name: '麻阳苗族自治县',
		parent: '233'
	},
	{
		value: '2257',
		name: '新晃侗族自治县',
		parent: '233'
	},
	{
		value: '2258',
		name: '芷江侗族自治县',
		parent: '233'
	},
	{
		value: '2259',
		name: '靖州苗族侗族自治县',
		parent: '233'
	},
	{
		value: '2260',
		name: '通道侗族自治县',
		parent: '233'
	},
	{
		value: '2262',
		name: '娄星区',
		parent: '234'
	},
	{
		value: '2263',
		name: '冷水江市',
		parent: '234'
	},
	{
		value: '2264',
		name: '涟源市',
		parent: '234'
	},
	{
		value: '2265',
		name: '双峰县',
		parent: '234'
	},
	{
		value: '2266',
		name: '新化县',
		parent: '234'
	},
	{
		value: '2268',
		name: '吉首市',
		parent: '235'
	},
	{
		value: '2269',
		name: '泸溪县',
		parent: '235'
	},
	{
		value: '2270',
		name: '凤凰县',
		parent: '235'
	},
	{
		value: '2271',
		name: '花垣县',
		parent: '235'
	},
	{
		value: '2272',
		name: '保靖县',
		parent: '235'
	},
	{
		value: '2273',
		name: '古丈县',
		parent: '235'
	},
	{
		value: '2274',
		name: '永顺县',
		parent: '235'
	},
	{
		value: '2275',
		name: '龙山县',
		parent: '235'
	},
	{
		value: '2288',
		name: '增城市',
		parent: '237'
	},
	{
		value: '2298',
		name: '香洲区',
		parent: '239'
	},
	{
		value: '2299',
		name: '斗门区',
		parent: '239'
	},
	{
		value: '2300',
		name: '金湾区',
		parent: '239'
	},
	{
		value: '2302',
		name: '金平区',
		parent: '240'
	},
	{
		value: '2303',
		name: '濠江区',
		parent: '240'
	},
	{
		value: '2304',
		name: '龙湖区',
		parent: '240'
	},
	{
		value: '2305',
		name: '潮阳区',
		parent: '240'
	},
	{
		value: '2306',
		name: '潮南区',
		parent: '240'
	},
	{
		value: '2307',
		name: '澄海区',
		parent: '240'
	},
	{
		value: '2308',
		name: '南澳县',
		parent: '240'
	},
	{
		value: '2310',
		name: '浈江区',
		parent: '241'
	},
	{
		value: '2311',
		name: '武江区',
		parent: '241'
	},
	{
		value: '2312',
		name: '曲江区',
		parent: '241'
	},
	{
		value: '2313',
		name: '乐昌市',
		parent: '241'
	},
	{
		value: '2314',
		name: '南雄市',
		parent: '241'
	},
	{
		value: '2315',
		name: '始兴县',
		parent: '241'
	},
	{
		value: '2316',
		name: '仁化县',
		parent: '241'
	},
	{
		value: '2317',
		name: '翁源县',
		parent: '241'
	},
	{
		value: '2318',
		name: '新丰县',
		parent: '241'
	},
	{
		value: '2319',
		name: '乳源瑶族自治县',
		parent: '241'
	},
	{
		value: '2321',
		name: '禅城区',
		parent: '242'
	},
	{
		value: '2322',
		name: '南海区',
		parent: '242'
	},
	{
		value: '2323',
		name: '顺德区',
		parent: '242'
	},
	{
		value: '2324',
		name: '三水区',
		parent: '242'
	},
	{
		value: '2325',
		name: '高明区',
		parent: '242'
	},
	{
		value: '2327',
		name: '江海区',
		parent: '243'
	},
	{
		value: '2328',
		name: '蓬江区',
		parent: '243'
	},
	{
		value: '2110',
		name: '崇阳县',
		parent: '213'
	},
	{
		value: '2111',
		name: '通山县',
		parent: '213'
	},
	{
		value: '2113',
		name: '曾都区',
		parent: '214'
	},
	{
		value: '2114',
		name: '广水市',
		parent: '214'
	},
	{
		value: '3',
		name: '黄浦区',
		parent: '1'
	},
	{
		value: '12',
		name: '卢湾区',
		parent: '1'
	},
	{
		value: '16',
		name: '徐汇区',
		parent: '1'
	},
	{
		value: '29',
		name: '长宁区',
		parent: '1'
	},
	{
		value: '39',
		name: '静安区',
		parent: '1'
	},
	{
		value: '44',
		name: '普陀区',
		parent: '1'
	},
	{
		value: '2006',
		name: '宁陵县',
		parent: '202'
	},
	{
		value: '2007',
		name: '睢县',
		parent: '202'
	},
	{
		value: '2008',
		name: '夏邑县',
		parent: '202'
	},
	{
		value: '2009',
		name: '柘城县',
		parent: '202'
	},
	{
		value: '2011',
		name: '卧龙区',
		parent: '203'
	},
	{
		value: '2012',
		name: '宛城区',
		parent: '203'
	},
	{
		value: '2013',
		name: '邓州市',
		parent: '203'
	},
	{
		value: '2014',
		name: '南召县',
		parent: '203'
	},
	{
		value: '2015',
		name: '方城县',
		parent: '203'
	},
	{
		value: '2016',
		name: '西峡县',
		parent: '203'
	},
	{
		value: '2017',
		name: '镇平县',
		parent: '203'
	},
	{
		value: '2018',
		name: '内乡县',
		parent: '203'
	},
	{
		value: '2019',
		name: '淅川县',
		parent: '203'
	},
	{
		value: '2020',
		name: '社旗县',
		parent: '203'
	},
	{
		value: '2021',
		name: '唐河县',
		parent: '203'
	},
	{
		value: '2022',
		name: '新野县',
		parent: '203'
	},
	{
		value: '2023',
		name: '桐柏县',
		parent: '203'
	},
	{
		value: '2024',
		name: '济源市',
		parent: '204'
	},
	{
		value: '2026',
		name: '江岸区',
		parent: '205'
	},
	{
		value: '2027',
		name: '江汉区',
		parent: '205'
	},
	{
		value: '2028',
		name: '硚口区',
		parent: '205'
	},
	{
		value: '2029',
		name: '汉阳区',
		parent: '205'
	},
	{
		value: '2030',
		name: '武昌区',
		parent: '205'
	},
	{
		value: '2031',
		name: '青山区',
		parent: '205'
	},
	{
		value: '2032',
		name: '洪山区',
		parent: '205'
	},
	{
		value: '2033',
		name: '东西湖区',
		parent: '205'
	},
	{
		value: '2034',
		name: '汉南区',
		parent: '205'
	},
	{
		value: '2035',
		name: '蔡甸区',
		parent: '205'
	},
	{
		value: '2036',
		name: '江夏区',
		parent: '205'
	},
	{
		value: '2037',
		name: '黄陂区',
		parent: '205'
	},
	{
		value: '2038',
		name: '新洲区',
		parent: '205'
	},
	{
		value: '2040',
		name: '黄石港区',
		parent: '206'
	},
	{
		value: '2041',
		name: '西塞山区',
		parent: '206'
	},
	{
		value: '2042',
		name: '下陆区',
		parent: '206'
	},
	{
		value: '2043',
		name: '铁山区',
		parent: '206'
	},
	{
		value: '2044',
		name: '大冶市',
		parent: '206'
	},
	{
		value: '2045',
		name: '阳新县',
		parent: '206'
	},
	{
		value: '2047',
		name: '襄城区',
		parent: '207'
	},
	{
		value: '2048',
		name: '樊城区',
		parent: '207'
	},
	{
		value: '2049',
		name: '襄阳区',
		parent: '207'
	},
	{
		value: '2050',
		name: '老河口市',
		parent: '207'
	},
	{
		value: '2051',
		name: '枣阳市',
		parent: '207'
	},
	{
		value: '2052',
		name: '宜城市',
		parent: '207'
	},
	{
		value: '2053',
		name: '南漳县',
		parent: '207'
	},
	{
		value: '2054',
		name: '谷城县',
		parent: '207'
	},
	{
		value: '2055',
		name: '保康县',
		parent: '207'
	},
	{
		value: '2057',
		name: '张湾区',
		parent: '208'
	},
	{
		value: '2058',
		name: '茅箭区',
		parent: '208'
	},
	{
		value: '2059',
		name: '丹江口市',
		parent: '208'
	},
	{
		value: '2060',
		name: '郧县',
		parent: '208'
	},
	{
		value: '2061',
		name: '竹山县',
		parent: '208'
	},
	{
		value: '2062',
		name: '房县',
		parent: '208'
	},
	{
		value: '2063',
		name: '郧西县',
		parent: '208'
	},
	{
		value: '2064',
		name: '竹溪县',
		parent: '208'
	},
	{
		value: '2066',
		name: '沙市区',
		parent: '209'
	},
	{
		value: '2067',
		name: '荆州区',
		parent: '209'
	},
	{
		value: '2068',
		name: '石首市',
		parent: '209'
	},
	{
		value: '2069',
		name: '洪湖市',
		parent: '209'
	},
	{
		value: '2070',
		name: '松滋市',
		parent: '209'
	},
	{
		value: '2071',
		name: '江陵县',
		parent: '209'
	},
	{
		value: '2072',
		name: '公安县',
		parent: '209'
	},
	{
		value: '2073',
		name: '监利县',
		parent: '209'
	},
	{
		value: '2075',
		name: '西陵区',
		parent: '210'
	},
	{
		value: '2076',
		name: '伍家岗区',
		parent: '210'
	},
	{
		value: '2077',
		name: '点军区',
		parent: '210'
	},
	{
		value: '2078',
		name: '猇亭区',
		parent: '210'
	},
	{
		value: '2079',
		name: '夷陵区',
		parent: '210'
	},
	{
		value: '2080',
		name: '枝江市',
		parent: '210'
	},
	{
		value: '2081',
		name: '宜都市',
		parent: '210'
	},
	{
		value: '2082',
		name: '当阳市',
		parent: '210'
	},
	{
		value: '2083',
		name: '远安县',
		parent: '210'
	},
	{
		value: '2084',
		name: '兴山县',
		parent: '210'
	},
	{
		value: '2085',
		name: '秭归县',
		parent: '210'
	},
	{
		value: '2086',
		name: '长阳土家族自治县',
		parent: '210'
	},
	{
		value: '2087',
		name: '五峰土家族自治县',
		parent: '210'
	},
	{
		value: '2089',
		name: '东宝区',
		parent: '211'
	},
	{
		value: '2090',
		name: '掇刀区',
		parent: '211'
	},
	{
		value: '2091',
		name: '钟祥市',
		parent: '211'
	},
	{
		value: '2092',
		name: '沙洋县',
		parent: '211'
	},
	{
		value: '2093',
		name: '京山县',
		parent: '211'
	},
	{
		value: '2095',
		name: '黄州区',
		parent: '212'
	},
	{
		value: '2096',
		name: '麻城市',
		parent: '212'
	},
	{
		value: '2097',
		name: '武穴市',
		parent: '212'
	},
	{
		value: '2098',
		name: '红安县',
		parent: '212'
	},
	{
		value: '2099',
		name: '罗田县',
		parent: '212'
	},
	{
		value: '2100',
		name: '英山县',
		parent: '212'
	},
	{
		value: '2101',
		name: '浠水县',
		parent: '212'
	},
	{
		value: '2102',
		name: '蕲春县',
		parent: '212'
	},
	{
		value: '2103',
		name: '黄梅县',
		parent: '212'
	},
	{
		value: '2104',
		name: '团风县',
		parent: '212'
	},
	{
		value: '2106',
		name: '咸安区',
		parent: '213'
	},
	{
		value: '2107',
		name: '赤壁市',
		parent: '213'
	},
	{
		value: '2108',
		name: '嘉鱼县',
		parent: '213'
	},
	{
		value: '2109',
		name: '通城县',
		parent: '213'
	},
	{
		value: '1887',
		name: '洛宁县',
		parent: '189'
	},
	{
		value: '1888',
		name: '伊川县',
		parent: '189'
	},
	{
		value: '2116',
		name: '鄂城区',
		parent: '215'
	},
	{
		value: '2117',
		name: '梁子湖区',
		parent: '215'
	},
	{
		value: '2118',
		name: '华容区',
		parent: '215'
	},
	{
		value: '2120',
		name: '孝南区',
		parent: '216'
	},
	{
		value: '2121',
		name: '应城市',
		parent: '216'
	},
	{
		value: '2122',
		name: '安陆市',
		parent: '216'
	},
	{
		value: '2123',
		name: '汉川市',
		parent: '216'
	},
	{
		value: '2124',
		name: '孝昌县',
		parent: '216'
	},
	{
		value: '2125',
		name: '大悟县',
		parent: '216'
	},
	{
		value: '2126',
		name: '云梦县',
		parent: '216'
	},
	{
		value: '2128',
		name: '恩施市',
		parent: '217'
	},
	{
		value: '2129',
		name: '利川市',
		parent: '217'
	},
	{
		value: '2130',
		name: '建始县',
		parent: '217'
	},
	{
		value: '2131',
		name: '巴东县',
		parent: '217'
	},
	{
		value: '2132',
		name: '宣恩县',
		parent: '217'
	},
	{
		value: '2133',
		name: '咸丰县',
		parent: '217'
	},
	{
		value: '2134',
		name: '来凤县',
		parent: '217'
	},
	{
		value: '2135',
		name: '鹤峰县',
		parent: '217'
	},
	{
		value: '2136',
		name: '仙桃市',
		parent: '218'
	},
	{
		value: '2137',
		name: '潜江市',
		parent: '219'
	},
	{
		value: '2138',
		name: '天门市',
		parent: '220'
	},
	{
		value: '2139',
		name: '神农架林区',
		parent: '221'
	},
	{
		value: '2141',
		name: '岳麓区',
		parent: '222'
	},
	{
		value: '2142',
		name: '芙蓉区',
		parent: '222'
	},
	{
		value: '2143',
		name: '天心区',
		parent: '222'
	},
	{
		value: '2144',
		name: '开福区',
		parent: '222'
	},
	{
		value: '2145',
		name: '雨花区',
		parent: '222'
	},
	{
		value: '2146',
		name: '浏阳市',
		parent: '222'
	},
	{
		value: '2147',
		name: '长沙县',
		parent: '222'
	},
	{
		value: '2148',
		name: '望城区',
		parent: '222'
	},
	{
		value: '2149',
		name: '宁乡县',
		parent: '222'
	},
	{
		value: '2151',
		name: '荷塘区',
		parent: '223'
	},
	{
		value: '2152',
		name: '芦淞区',
		parent: '223'
	},
	{
		value: '2153',
		name: '石峰区',
		parent: '223'
	},
	{
		value: '2154',
		name: '天元区',
		parent: '223'
	},
	{
		value: '2155',
		name: '醴陵市',
		parent: '223'
	},
	{
		value: '2156',
		name: '株洲县',
		parent: '223'
	},
	{
		value: '2157',
		name: '攸县',
		parent: '223'
	},
	{
		value: '2158',
		name: '茶陵县',
		parent: '223'
	},
	{
		value: '2159',
		name: '炎陵县',
		parent: '223'
	},
	{
		value: '2161',
		name: '岳塘区',
		parent: '224'
	},
	{
		value: '2162',
		name: '雨湖区',
		parent: '224'
	},
	{
		value: '2163',
		name: '湘乡市',
		parent: '224'
	},
	{
		value: '2164',
		name: '韶山市',
		parent: '224'
	},
	{
		value: '2165',
		name: '湘潭县',
		parent: '224'
	},
	{
		value: '2167',
		name: '雁峰区',
		parent: '225'
	},
	{
		value: '2168',
		name: '珠晖区',
		parent: '225'
	},
	{
		value: '2169',
		name: '石鼓区',
		parent: '225'
	},
	{
		value: '2170',
		name: '蒸湘区',
		parent: '225'
	},
	{
		value: '2171',
		name: '南岳区',
		parent: '225'
	},
	{
		value: '2172',
		name: '常宁市',
		parent: '225'
	},
	{
		value: '2173',
		name: '耒阳市',
		parent: '225'
	},
	{
		value: '2174',
		name: '衡阳县',
		parent: '225'
	},
	{
		value: '2175',
		name: '衡南县',
		parent: '225'
	},
	{
		value: '2176',
		name: '衡山县',
		parent: '225'
	},
	{
		value: '2177',
		name: '衡东县',
		parent: '225'
	},
	{
		value: '2178',
		name: '祁东县',
		parent: '225'
	},
	{
		value: '2180',
		name: '双清区',
		parent: '226'
	},
	{
		value: '2181',
		name: '大祥区',
		parent: '226'
	},
	{
		value: '2182',
		name: '北塔区',
		parent: '226'
	},
	{
		value: '2183',
		name: '武冈市',
		parent: '226'
	},
	{
		value: '2184',
		name: '邵东县',
		parent: '226'
	},
	{
		value: '2185',
		name: '邵阳县',
		parent: '226'
	},
	{
		value: '2186',
		name: '新邵县',
		parent: '226'
	},
	{
		value: '2187',
		name: '隆回县',
		parent: '226'
	},
	{
		value: '2188',
		name: '洞口县',
		parent: '226'
	},
	{
		value: '2189',
		name: '绥宁县',
		parent: '226'
	},
	{
		value: '2190',
		name: '新宁县',
		parent: '226'
	},
	{
		value: '2191',
		name: '城步苗族自治县',
		parent: '226'
	},
	{
		value: '2193',
		name: '岳阳楼区',
		parent: '227'
	},
	{
		value: '2194',
		name: '君山区',
		parent: '227'
	},
	{
		value: '2195',
		name: '云溪区',
		parent: '227'
	},
	{
		value: '2196',
		name: '汨罗市',
		parent: '227'
	},
	{
		value: '2197',
		name: '临湘市',
		parent: '227'
	},
	{
		value: '2198',
		name: '岳阳县',
		parent: '227'
	},
	{
		value: '1823',
		name: '茌平县',
		parent: '183'
	},
	{
		value: '1824',
		name: '东阿县',
		parent: '183'
	},
	{
		value: '1825',
		name: '冠县',
		parent: '183'
	},
	{
		value: '1826',
		name: '高唐县',
		parent: '183'
	},
	{
		value: '1828',
		name: '滨城区',
		parent: '184'
	},
	{
		value: '1829',
		name: '惠民县',
		parent: '184'
	},
	{
		value: '1830',
		name: '阳信县',
		parent: '184'
	},
	{
		value: '1831',
		name: '无棣县',
		parent: '184'
	},
	{
		value: '1832',
		name: '沾化县',
		parent: '184'
	},
	{
		value: '1833',
		name: '博兴县',
		parent: '184'
	},
	{
		value: '1834',
		name: '邹平县',
		parent: '184'
	},
	{
		value: '1836',
		name: '牡丹区',
		parent: '185'
	},
	{
		value: '1837',
		name: '曹县',
		parent: '185'
	},
	{
		value: '1838',
		name: '定陶县',
		parent: '185'
	},
	{
		value: '1839',
		name: '成武县',
		parent: '185'
	},
	{
		value: '1840',
		name: '单县',
		parent: '185'
	},
	{
		value: '1841',
		name: '巨野县',
		parent: '185'
	},
	{
		value: '1842',
		name: '郓城县',
		parent: '185'
	},
	{
		value: '1843',
		name: '鄄城县',
		parent: '185'
	},
	{
		value: '1844',
		name: '东明县',
		parent: '185'
	},
	{
		value: '1847',
		name: '金水区',
		parent: '187'
	},
	{
		value: '1848',
		name: '二七区',
		parent: '187'
	},
	{
		value: '1849',
		name: '中原区',
		parent: '187'
	},
	{
		value: '1850',
		name: '管城回族区',
		parent: '187'
	},
	{
		value: '1851',
		name: '回族区',
		parent: '187'
	},
	{
		value: '1852',
		name: '郎山区',
		parent: '187'
	},
	{
		value: '1854',
		name: '上街区',
		parent: '187'
	},
	{
		value: '1855',
		name: '惠济区',
		parent: '187'
	},
	{
		value: '1856',
		name: '新郑市',
		parent: '187'
	},
	{
		value: '1857',
		name: '登封市',
		parent: '187'
	},
	{
		value: '1858',
		name: '新密市',
		parent: '187'
	},
	{
		value: '1859',
		name: '巩义市',
		parent: '187'
	},
	{
		value: '1860',
		name: '荥阳市',
		parent: '187'
	},
	{
		value: '1861',
		name: '中牟县',
		parent: '187'
	},
	{
		value: '1863',
		name: '鼓楼区',
		parent: '188'
	},
	{
		value: '1864',
		name: '龙亭区',
		parent: '188'
	},
	{
		value: '1865',
		name: '顺河回族区',
		parent: '188'
	},
	{
		value: '1866',
		name: '禹王台区',
		parent: '188'
	},
	{
		value: '1867',
		name: '金明区',
		parent: '188'
	},
	{
		value: '1868',
		name: '杞县',
		parent: '188'
	},
	{
		value: '1869',
		name: '通许县',
		parent: '188'
	},
	{
		value: '1870',
		name: '尉氏县',
		parent: '188'
	},
	{
		value: '1871',
		name: '开封县',
		parent: '188'
	},
	{
		value: '1872',
		name: '兰考县',
		parent: '188'
	},
	{
		value: '1874',
		name: '西工区',
		parent: '189'
	},
	{
		value: '1875',
		name: '老城区',
		parent: '189'
	},
	{
		value: '1876',
		name: '瀍河回族区',
		parent: '189'
	},
	{
		value: '1877',
		name: '涧西区',
		parent: '189'
	},
	{
		value: '1878',
		name: '吉利区',
		parent: '189'
	},
	{
		value: '1879',
		name: '洛龙区',
		parent: '189'
	},
	{
		value: '1880',
		name: '偃师市',
		parent: '189'
	},
	{
		value: '1881',
		name: '孟津县',
		parent: '189'
	},
	{
		value: '1882',
		name: '新安县',
		parent: '189'
	},
	{
		value: '1883',
		name: '栾川县',
		parent: '189'
	},
	{
		value: '1884',
		name: '嵩县',
		parent: '189'
	},
	{
		value: '1885',
		name: '汝阳县',
		parent: '189'
	},
	{
		value: '1886',
		name: '宜阳县',
		parent: '189'
	},
	{
		value: '1890',
		name: '新华区',
		parent: '190'
	},
	{
		value: '1891',
		name: '卫东区',
		parent: '190'
	},
	{
		value: '1892',
		name: '湛河区',
		parent: '190'
	},
	{
		value: '1893',
		name: '石龙区',
		parent: '190'
	},
	{
		value: '1894',
		name: '舞钢市',
		parent: '190'
	},
	{
		value: '1895',
		name: '汝州市',
		parent: '190'
	},
	{
		value: '1896',
		name: '宝丰县',
		parent: '190'
	},
	{
		value: '1897',
		name: '叶县',
		parent: '190'
	},
	{
		value: '1898',
		name: '鲁山县',
		parent: '190'
	},
	{
		value: '1899',
		name: '郏县',
		parent: '190'
	},
	{
		value: '1901',
		name: '解放区',
		parent: '191'
	},
	{
		value: '1902',
		name: '中站区',
		parent: '191'
	},
	{
		value: '1903',
		name: '马村区',
		parent: '191'
	},
	{
		value: '1904',
		name: '山阳区',
		parent: '191'
	},
	{
		value: '1905',
		name: '沁阳市',
		parent: '191'
	},
	{
		value: '1906',
		name: '孟州市',
		parent: '191'
	},
	{
		value: '1907',
		name: '修武县',
		parent: '191'
	},
	{
		value: '1908',
		name: '博爱县',
		parent: '191'
	},
	{
		value: '1909',
		name: '武陟县',
		parent: '191'
	},
	{
		value: '1910',
		name: '温县',
		parent: '191'
	},
	{
		value: '1912',
		name: '淇滨区',
		parent: '192'
	},
	{
		value: '1913',
		name: '山城区',
		parent: '192'
	},
	{
		value: '1914',
		name: '鹤山区',
		parent: '192'
	},
	{
		value: '1915',
		name: '浚县',
		parent: '192'
	},
	{
		value: '1916',
		name: '淇县',
		parent: '192'
	},
	{
		value: '1918',
		name: '北关区',
		parent: '193'
	},
	{
		value: '1919',
		name: '文峰区',
		parent: '193'
	},
	{
		value: '1920',
		name: '殷都区',
		parent: '193'
	},
	{
		value: '1921',
		name: '龙安区',
		parent: '193'
	},
	{
		value: '1922',
		name: '林州市',
		parent: '193'
	},
	{
		value: '1923',
		name: '安阳县',
		parent: '193'
	},
	{
		value: '1924',
		name: '汤阴县',
		parent: '193'
	},
	{
		value: '1925',
		name: '滑县',
		parent: '193'
	},
	{
		value: '1926',
		name: '内黄县',
		parent: '193'
	},
	{
		value: '1928',
		name: '源汇区',
		parent: '194'
	},
	{
		value: '1929',
		name: '郾城区',
		parent: '194'
	},
	{
		value: '1930',
		name: '召陵区',
		parent: '194'
	},
	{
		value: '1931',
		name: '舞阳县',
		parent: '194'
	},
	{
		value: '1932',
		name: '临颍县',
		parent: '194'
	},
	{
		value: '1934',
		name: '川汇区',
		parent: '195'
	},
	{
		value: '1935',
		name: '项城市',
		parent: '195'
	},
	{
		value: '1936',
		name: '扶沟县',
		parent: '195'
	},
	{
		value: '1937',
		name: '西华县',
		parent: '195'
	},
	{
		value: '1938',
		name: '商水县',
		parent: '195'
	},
	{
		value: '1939',
		name: '太康县',
		parent: '195'
	},
	{
		value: '1940',
		name: '鹿邑县',
		parent: '195'
	},
	{
		value: '1941',
		name: '郸城县',
		parent: '195'
	},
	{
		value: '1942',
		name: '淮阳县',
		parent: '195'
	},
	{
		value: '1943',
		name: '沈丘县',
		parent: '195'
	},
	{
		value: '1945',
		name: '卫滨区',
		parent: '196'
	},
	{
		value: '1946',
		name: '红旗区',
		parent: '196'
	},
	{
		value: '1947',
		name: '凤泉区',
		parent: '196'
	},
	{
		value: '1948',
		name: '牧野区',
		parent: '196'
	},
	{
		value: '1949',
		name: '卫辉市',
		parent: '196'
	},
	{
		value: '1950',
		name: '辉县市',
		parent: '196'
	},
	{
		value: '1951',
		name: '新乡县',
		parent: '196'
	},
	{
		value: '1952',
		name: '获嘉县',
		parent: '196'
	},
	{
		value: '1953',
		name: '原阳县',
		parent: '196'
	},
	{
		value: '1954',
		name: '延津县',
		parent: '196'
	},
	{
		value: '1955',
		name: '封丘县',
		parent: '196'
	},
	{
		value: '1956',
		name: '长垣县',
		parent: '196'
	},
	{
		value: '1958',
		name: '华龙区',
		parent: '197'
	},
	{
		value: '1959',
		name: '清丰县',
		parent: '197'
	},
	{
		value: '1960',
		name: '南乐县',
		parent: '197'
	},
	{
		value: '1961',
		name: '范县',
		parent: '197'
	},
	{
		value: '1962',
		name: '台前县',
		parent: '197'
	},
	{
		value: '1963',
		name: '濮阳县',
		parent: '197'
	},
	{
		value: '1965',
		name: '湖滨区',
		parent: '198'
	},
	{
		value: '1966',
		name: '义马市',
		parent: '198'
	},
	{
		value: '1967',
		name: '灵宝市',
		parent: '198'
	},
	{
		value: '1968',
		name: '渑池县',
		parent: '198'
	},
	{
		value: '1969',
		name: '陕县',
		parent: '198'
	},
	{
		value: '1970',
		name: '卢氏县',
		parent: '198'
	},
	{
		value: '1972',
		name: '驿城区',
		parent: '199'
	},
	{
		value: '1973',
		name: '确山县',
		parent: '199'
	},
	{
		value: '1974',
		name: '泌阳县',
		parent: '199'
	},
	{
		value: '1975',
		name: '遂平县',
		parent: '199'
	},
	{
		value: '1976',
		name: '西平县',
		parent: '199'
	},
	{
		value: '1977',
		name: '上蔡县',
		parent: '199'
	},
	{
		value: '1978',
		name: '汝南县',
		parent: '199'
	},
	{
		value: '1979',
		name: '平舆县',
		parent: '199'
	},
	{
		value: '1980',
		name: '新蔡县',
		parent: '199'
	},
	{
		value: '1981',
		name: '正阳县',
		parent: '199'
	},
	{
		value: '1983',
		name: '魏都区',
		parent: '200'
	},
	{
		value: '1984',
		name: '禹州市',
		parent: '200'
	},
	{
		value: '1985',
		name: '长葛市',
		parent: '200'
	},
	{
		value: '1986',
		name: '许昌县',
		parent: '200'
	},
	{
		value: '1987',
		name: '鄢陵县',
		parent: '200'
	},
	{
		value: '1988',
		name: '襄城县',
		parent: '200'
	},
	{
		value: '1990',
		name: '浉河区',
		parent: '201'
	},
	{
		value: '1991',
		name: '平桥区',
		parent: '201'
	},
	{
		value: '1992',
		name: '息县',
		parent: '201'
	},
	{
		value: '1993',
		name: '淮滨县',
		parent: '201'
	},
	{
		value: '1994',
		name: '潢川县',
		parent: '201'
	},
	{
		value: '1995',
		name: '光山县',
		parent: '201'
	},
	{
		value: '1996',
		name: '固始县',
		parent: '201'
	},
	{
		value: '1997',
		name: '商城县',
		parent: '201'
	},
	{
		value: '1998',
		name: '罗山县',
		parent: '201'
	},
	{
		value: '1999',
		name: '新县',
		parent: '201'
	},
	{
		value: '2001',
		name: '梁园区',
		parent: '202'
	},
	{
		value: '2002',
		name: '睢阳区',
		parent: '202'
	},
	{
		value: '2003',
		name: '永城市',
		parent: '202'
	},
	{
		value: '2004',
		name: '虞城县',
		parent: '202'
	},
	{
		value: '2005',
		name: '民权县',
		parent: '202'
	},
	{
		value: '1657',
		name: '奉新县',
		parent: '167'
	},
	{
		value: '1658',
		name: '万载县',
		parent: '167'
	},
	{
		value: '1659',
		name: '上高县',
		parent: '167'
	},
	{
		value: '1660',
		name: '宜丰县',
		parent: '167'
	},
	{
		value: '1661',
		name: '靖安县',
		parent: '167'
	},
	{
		value: '1662',
		name: '铜鼓县',
		parent: '167'
	},
	{
		value: '1664',
		name: '临川区',
		parent: '168'
	},
	{
		value: '1665',
		name: '南城县',
		parent: '168'
	},
	{
		value: '1666',
		name: '黎川县',
		parent: '168'
	},
	{
		value: '1667',
		name: '南丰县',
		parent: '168'
	},
	{
		value: '1668',
		name: '崇仁县',
		parent: '168'
	},
	{
		value: '1669',
		name: '乐安县',
		parent: '168'
	},
	{
		value: '1670',
		name: '宜黄县',
		parent: '168'
	},
	{
		value: '1671',
		name: '金溪县',
		parent: '168'
	},
	{
		value: '1672',
		name: '资溪县',
		parent: '168'
	},
	{
		value: '1673',
		name: '东乡县',
		parent: '168'
	},
	{
		value: '1674',
		name: '广昌县',
		parent: '168'
	},
	{
		value: '1676',
		name: '信州区',
		parent: '169'
	},
	{
		value: '1677',
		name: '德兴市',
		parent: '169'
	},
	{
		value: '1678',
		name: '上饶县',
		parent: '169'
	},
	{
		value: '1679',
		name: '广丰县',
		parent: '169'
	},
	{
		value: '1680',
		name: '玉山县',
		parent: '169'
	},
	{
		value: '1681',
		name: '铅山县',
		parent: '169'
	},
	{
		value: '1682',
		name: '横峰县',
		parent: '169'
	},
	{
		value: '1683',
		name: '弋阳县',
		parent: '169'
	},
	{
		value: '1684',
		name: '余干县',
		parent: '169'
	},
	{
		value: '1685',
		name: '鄱阳县',
		parent: '169'
	},
	{
		value: '1686',
		name: '万年县',
		parent: '169'
	},
	{
		value: '1687',
		name: '婺源县',
		parent: '169'
	},
	{
		value: '1689',
		name: '市中区',
		parent: '170'
	},
	{
		value: '1690',
		name: '历下区',
		parent: '170'
	},
	{
		value: '1691',
		name: '槐荫区',
		parent: '170'
	},
	{
		value: '1692',
		name: '天桥区',
		parent: '170'
	},
	{
		value: '1693',
		name: '历城区',
		parent: '170'
	},
	{
		value: '1694',
		name: '长清区',
		parent: '170'
	},
	{
		value: '1695',
		name: '章丘市',
		parent: '170'
	},
	{
		value: '1696',
		name: '平阴县',
		parent: '170'
	},
	{
		value: '1697',
		name: '济阳县',
		parent: '170'
	},
	{
		value: '1698',
		name: '商河县',
		parent: '170'
	},
	{
		value: '1700',
		name: '市南区',
		parent: '171'
	},
	{
		value: '1701',
		name: '市北区',
		parent: '171'
	},
	{
		value: '1702',
		name: '四方区',
		parent: '171'
	},
	{
		value: '1703',
		name: '黄岛区',
		parent: '171'
	},
	{
		value: '1704',
		name: '崂山区',
		parent: '171'
	},
	{
		value: '1705',
		name: '李沧区',
		parent: '171'
	},
	{
		value: '1706',
		name: '城阳区',
		parent: '171'
	},
	{
		value: '1707',
		name: '胶州市',
		parent: '171'
	},
	{
		value: '1708',
		name: '即墨市',
		parent: '171'
	},
	{
		value: '1709',
		name: '平度市',
		parent: '171'
	},
	{
		value: '1710',
		name: '胶南市',
		parent: '171'
	},
	{
		value: '1711',
		name: '莱西市',
		parent: '171'
	},
	{
		value: '1713',
		name: '张店区',
		parent: '172'
	},
	{
		value: '1714',
		name: '淄川区',
		parent: '172'
	},
	{
		value: '1715',
		name: '博山区',
		parent: '172'
	},
	{
		value: '1716',
		name: '临淄区',
		parent: '172'
	},
	{
		value: '1717',
		name: '周村区',
		parent: '172'
	},
	{
		value: '1718',
		name: '桓台县',
		parent: '172'
	},
	{
		value: '1719',
		name: '高青县',
		parent: '172'
	},
	{
		value: '1720',
		name: '沂源县',
		parent: '172'
	},
	{
		value: '1722',
		name: '市中区',
		parent: '173'
	},
	{
		value: '1723',
		name: '薛城区',
		parent: '173'
	},
	{
		value: '1724',
		name: '峄城区',
		parent: '173'
	},
	{
		value: '1725',
		name: '台儿庄区',
		parent: '173'
	},
	{
		value: '1726',
		name: '山亭区',
		parent: '173'
	},
	{
		value: '1727',
		name: '滕州市',
		parent: '173'
	},
	{
		value: '1729',
		name: '东营区',
		parent: '174'
	},
	{
		value: '1730',
		name: '河口区',
		parent: '174'
	},
	{
		value: '1731',
		name: '垦利县',
		parent: '174'
	},
	{
		value: '1732',
		name: '利津县',
		parent: '174'
	},
	{
		value: '1733',
		name: '广饶县',
		parent: '174'
	},
	{
		value: '1735',
		name: '莱山区',
		parent: '175'
	},
	{
		value: '1736',
		name: '芝罘区',
		parent: '175'
	},
	{
		value: '1737',
		name: '福山区',
		parent: '175'
	},
	{
		value: '1738',
		name: '牟平区',
		parent: '175'
	},
	{
		value: '1739',
		name: '栖霞市',
		parent: '175'
	},
	{
		value: '1740',
		name: '海阳市',
		parent: '175'
	},
	{
		value: '1741',
		name: '龙口市',
		parent: '175'
	},
	{
		value: '1742',
		name: '莱阳市',
		parent: '175'
	},
	{
		value: '1743',
		name: '莱州市',
		parent: '175'
	},
	{
		value: '1744',
		name: '蓬莱市',
		parent: '175'
	},
	{
		value: '1745',
		name: '招远市',
		parent: '175'
	},
	{
		value: '1746',
		name: '长岛县',
		parent: '175'
	},
	{
		value: '1748',
		name: '潍城区',
		parent: '176'
	},
	{
		value: '1749',
		name: '寒亭区',
		parent: '176'
	},
	{
		value: '1750',
		name: '坊子区',
		parent: '176'
	},
	{
		value: '1751',
		name: '奎文区',
		parent: '176'
	},
	{
		value: '1752',
		name: '安丘市',
		parent: '176'
	},
	{
		value: '1753',
		name: '昌邑市',
		parent: '176'
	},
	{
		value: '1754',
		name: '高密市',
		parent: '176'
	},
	{
		value: '1755',
		name: '青州市',
		parent: '176'
	},
	{
		value: '1756',
		name: '诸城市',
		parent: '176'
	},
	{
		value: '1757',
		name: '寿光市',
		parent: '176'
	},
	{
		value: '1758',
		name: '临朐县',
		parent: '176'
	},
	{
		value: '1759',
		name: '昌乐县',
		parent: '176'
	},
	{
		value: '1761',
		name: '环翠区',
		parent: '177'
	},
	{
		value: '1762',
		name: '文登市',
		parent: '177'
	},
	{
		value: '1763',
		name: '荣成市',
		parent: '177'
	},
	{
		value: '1764',
		name: '乳山市',
		parent: '177'
	},
	{
		value: '1767',
		name: '任城区',
		parent: '178'
	},
	{
		value: '1768',
		name: '曲阜市',
		parent: '178'
	},
	{
		value: '1769',
		name: '市中区',
		parent: '178'
	},
	{
		value: '1770',
		name: '邹城市',
		parent: '178'
	},
	{
		value: '1771',
		name: '微山县',
		parent: '178'
	},
	{
		value: '1772',
		name: '鱼台县',
		parent: '178'
	},
	{
		value: '1773',
		name: '金乡县',
		parent: '178'
	},
	{
		value: '1774',
		name: '嘉祥县',
		parent: '178'
	},
	{
		value: '1775',
		name: '汶上县',
		parent: '178'
	},
	{
		value: '1776',
		name: '泗水县',
		parent: '178'
	},
	{
		value: '1777',
		name: '梁山县',
		parent: '178'
	},
	{
		value: '1779',
		name: '泰山区',
		parent: '179'
	},
	{
		value: '1780',
		name: '岱岳区',
		parent: '179'
	},
	{
		value: '1781',
		name: '新泰市',
		parent: '179'
	},
	{
		value: '1782',
		name: '肥城市',
		parent: '179'
	},
	{
		value: '1783',
		name: '宁阳县',
		parent: '179'
	},
	{
		value: '1784',
		name: '东平县',
		parent: '179'
	},
	{
		value: '1786',
		name: '东港区',
		parent: '180'
	},
	{
		value: '1787',
		name: '岚山区',
		parent: '180'
	},
	{
		value: '1788',
		name: '五莲县',
		parent: '180'
	},
	{
		value: '1789',
		name: '莒县',
		parent: '180'
	},
	{
		value: '1791',
		name: '莱城区',
		parent: '398'
	},
	{
		value: '1792',
		name: '钢城区',
		parent: '398'
	},
	{
		value: '1794',
		name: '兰山区',
		parent: '181'
	},
	{
		value: '1795',
		name: '罗庄区',
		parent: '181'
	},
	{
		value: '1796',
		name: '河东区',
		parent: '181'
	},
	{
		value: '1797',
		name: '郯城县',
		parent: '181'
	},
	{
		value: '1798',
		name: '苍山县',
		parent: '181'
	},
	{
		value: '1799',
		name: '莒南县',
		parent: '181'
	},
	{
		value: '1800',
		name: '沂水县',
		parent: '181'
	},
	{
		value: '1801',
		name: '蒙阴县',
		parent: '181'
	},
	{
		value: '1802',
		name: '平邑县',
		parent: '181'
	},
	{
		value: '1803',
		name: '费县',
		parent: '181'
	},
	{
		value: '1804',
		name: '沂南县',
		parent: '181'
	},
	{
		value: '1805',
		name: '临沭县',
		parent: '181'
	},
	{
		value: '1807',
		name: '德城区',
		parent: '182'
	},
	{
		value: '1808',
		name: '乐陵市',
		parent: '182'
	},
	{
		value: '1809',
		name: '禹城市',
		parent: '182'
	},
	{
		value: '1810',
		name: '陵县',
		parent: '182'
	},
	{
		value: '1811',
		name: '平原县',
		parent: '182'
	},
	{
		value: '1812',
		name: '夏津县',
		parent: '182'
	},
	{
		value: '1813',
		name: '武城县',
		parent: '182'
	},
	{
		value: '1814',
		name: '齐河县',
		parent: '182'
	},
	{
		value: '1815',
		name: '临邑县',
		parent: '182'
	},
	{
		value: '1816',
		name: '宁津县',
		parent: '182'
	},
	{
		value: '1817',
		name: '庆云县',
		parent: '182'
	},
	{
		value: '1819',
		name: '东昌府区',
		parent: '183'
	},
	{
		value: '1820',
		name: '临清市',
		parent: '183'
	},
	{
		value: '1821',
		name: '阳谷县',
		parent: '183'
	},
	{
		value: '1822',
		name: '莘县',
		parent: '183'
	},
	{
		value: '1466',
		name: '天长市',
		parent: '146'
	},
	{
		value: '1467',
		name: '来安县',
		parent: '146'
	},
	{
		value: '1468',
		name: '全椒县',
		parent: '146'
	},
	{
		value: '1469',
		name: '定远县',
		parent: '146'
	},
	{
		value: '1470',
		name: '凤阳县',
		parent: '146'
	},
	{
		value: '1471',
		name: '埇桥区',
		parent: '147'
	},
	{
		value: '1472',
		name: '砀山县',
		parent: '147'
	},
	{
		value: '1473',
		name: '萧县',
		parent: '147'
	},
	{
		value: '1474',
		name: '灵璧县',
		parent: '147'
	},
	{
		value: '1475',
		name: '泗县',
		parent: '147'
	},
	{
		value: '1476',
		name: '居巢区',
		parent: '148'
	},
	{
		value: '1477',
		name: '庐江县',
		parent: '133'
	},
	{
		value: '1478',
		name: '无为县',
		parent: '148'
	},
	{
		value: '1479',
		name: '含山县',
		parent: '148'
	},
	{
		value: '1480',
		name: '和县',
		parent: '148'
	},
	{
		value: '1481',
		name: '谯城区',
		parent: '149'
	},
	{
		value: '1482',
		name: '涡阳县',
		parent: '149'
	},
	{
		value: '1483',
		name: '蒙城县',
		parent: '149'
	},
	{
		value: '1484',
		name: '利辛县',
		parent: '149'
	},
	{
		value: '1486',
		name: '鼓楼区',
		parent: '150'
	},
	{
		value: '1487',
		name: '台江区',
		parent: '150'
	},
	{
		value: '1488',
		name: '仓山区',
		parent: '150'
	},
	{
		value: '1489',
		name: '马尾区',
		parent: '150'
	},
	{
		value: '1490',
		name: '晋安区',
		parent: '150'
	},
	{
		value: '1491',
		name: '福清市',
		parent: '150'
	},
	{
		value: '1492',
		name: '长乐市',
		parent: '150'
	},
	{
		value: '1493',
		name: '闽侯县',
		parent: '150'
	},
	{
		value: '1494',
		name: '连江县',
		parent: '150'
	},
	{
		value: '1495',
		name: '罗源县',
		parent: '150'
	},
	{
		value: '1496',
		name: '闽清县',
		parent: '150'
	},
	{
		value: '1497',
		name: '永泰县',
		parent: '150'
	},
	{
		value: '1498',
		name: '平潭县',
		parent: '150'
	},
	{
		value: '1500',
		name: '思明区',
		parent: '151'
	},
	{
		value: '1501',
		name: '海沧区',
		parent: '151'
	},
	{
		value: '1502',
		name: '湖里区',
		parent: '151'
	},
	{
		value: '1503',
		name: '集美区',
		parent: '151'
	},
	{
		value: '1504',
		name: '同安区',
		parent: '151'
	},
	{
		value: '1505',
		name: '翔安区',
		parent: '151'
	},
	{
		value: '1507',
		name: '城厢区',
		parent: '152'
	},
	{
		value: '1508',
		name: '涵江区',
		parent: '152'
	},
	{
		value: '1509',
		name: '荔城区',
		parent: '152'
	},
	{
		value: '1510',
		name: '秀屿区',
		parent: '152'
	},
	{
		value: '1511',
		name: '仙游县',
		parent: '152'
	},
	{
		value: '1513',
		name: '梅列区',
		parent: '153'
	},
	{
		value: '1514',
		name: '三元区',
		parent: '153'
	},
	{
		value: '1515',
		name: '永安市',
		parent: '153'
	},
	{
		value: '1516',
		name: '明溪县',
		parent: '153'
	},
	{
		value: '1517',
		name: '清流县',
		parent: '153'
	},
	{
		value: '1518',
		name: '宁化县',
		parent: '153'
	},
	{
		value: '1519',
		name: '大田县',
		parent: '153'
	},
	{
		value: '1520',
		name: '尤溪县',
		parent: '153'
	},
	{
		value: '1521',
		name: '沙县',
		parent: '153'
	},
	{
		value: '1522',
		name: '将乐县',
		parent: '153'
	},
	{
		value: '1523',
		name: '泰宁县',
		parent: '153'
	},
	{
		value: '1524',
		name: '建宁县',
		parent: '153'
	},
	{
		value: '1526',
		name: '丰泽区',
		parent: '154'
	},
	{
		value: '1527',
		name: '鲤城区',
		parent: '154'
	},
	{
		value: '1528',
		name: '洛江区',
		parent: '154'
	},
	{
		value: '1529',
		name: '泉港区',
		parent: '154'
	},
	{
		value: '1530',
		name: '石狮市',
		parent: '154'
	},
	{
		value: '1531',
		name: '晋江市',
		parent: '154'
	},
	{
		value: '1532',
		name: '南安市',
		parent: '154'
	},
	{
		value: '1533',
		name: '惠安县',
		parent: '154'
	},
	{
		value: '1534',
		name: '安溪县',
		parent: '154'
	},
	{
		value: '1535',
		name: '永春县',
		parent: '154'
	},
	{
		value: '1536',
		name: '德化县',
		parent: '154'
	},
	{
		value: '1538',
		name: '芗城区',
		parent: '155'
	},
	{
		value: '1539',
		name: '龙文区',
		parent: '155'
	},
	{
		value: '1540',
		name: '龙海市',
		parent: '155'
	},
	{
		value: '1541',
		name: '云霄县',
		parent: '155'
	},
	{
		value: '1542',
		name: '漳浦县',
		parent: '155'
	},
	{
		value: '1543',
		name: '诏安县',
		parent: '155'
	},
	{
		value: '1544',
		name: '长泰县',
		parent: '155'
	},
	{
		value: '1545',
		name: '东山县',
		parent: '155'
	},
	{
		value: '1546',
		name: '南靖县',
		parent: '155'
	},
	{
		value: '1547',
		name: '平和县',
		parent: '155'
	},
	{
		value: '1548',
		name: '华安县',
		parent: '155'
	},
	{
		value: '1550',
		name: '延平区',
		parent: '156'
	},
	{
		value: '1551',
		name: '邵武市',
		parent: '156'
	},
	{
		value: '1552',
		name: '武夷山市',
		parent: '156'
	},
	{
		value: '1553',
		name: '建瓯市',
		parent: '156'
	},
	{
		value: '1554',
		name: '建阳市',
		parent: '156'
	},
	{
		value: '1555',
		name: '顺昌县',
		parent: '156'
	},
	{
		value: '1556',
		name: '浦城县',
		parent: '156'
	},
	{
		value: '1557',
		name: '光泽县',
		parent: '156'
	},
	{
		value: '1558',
		name: '松溪县',
		parent: '156'
	},
	{
		value: '1559',
		name: '政和县',
		parent: '156'
	},
	{
		value: '1561',
		name: '新罗区',
		parent: '157'
	},
	{
		value: '1562',
		name: '漳平市',
		parent: '157'
	},
	{
		value: '1563',
		name: '长汀县',
		parent: '157'
	},
	{
		value: '1564',
		name: '永定县',
		parent: '157'
	},
	{
		value: '1565',
		name: '上杭县',
		parent: '157'
	},
	{
		value: '1566',
		name: '武平县',
		parent: '157'
	},
	{
		value: '1567',
		name: '连城县',
		parent: '157'
	},
	{
		value: '1569',
		name: '蕉城区',
		parent: '158'
	},
	{
		value: '1570',
		name: '福安市',
		parent: '158'
	},
	{
		value: '1571',
		name: '福鼎市',
		parent: '158'
	},
	{
		value: '1572',
		name: '寿宁县',
		parent: '158'
	},
	{
		value: '1573',
		name: '霞浦县',
		parent: '158'
	},
	{
		value: '1574',
		name: '柘荣县',
		parent: '158'
	},
	{
		value: '1575',
		name: '屏南县',
		parent: '158'
	},
	{
		value: '1576',
		name: '古田县',
		parent: '158'
	},
	{
		value: '1577',
		name: '周宁县',
		parent: '158'
	},
	{
		value: '1579',
		name: '东湖区',
		parent: '159'
	},
	{
		value: '1580',
		name: '西湖区',
		parent: '159'
	},
	{
		value: '1581',
		name: '青云谱区',
		parent: '159'
	},
	{
		value: '1582',
		name: '湾里区',
		parent: '159'
	},
	{
		value: '1583',
		name: '青山湖区',
		parent: '159'
	},
	{
		value: '1584',
		name: '南昌县',
		parent: '159'
	},
	{
		value: '1585',
		name: '新建县',
		parent: '159'
	},
	{
		value: '1586',
		name: '安义县',
		parent: '159'
	},
	{
		value: '1587',
		name: '进贤县',
		parent: '159'
	},
	{
		value: '1589',
		name: '昌江区',
		parent: '160'
	},
	{
		value: '1590',
		name: '珠山区',
		parent: '160'
	},
	{
		value: '1591',
		name: '乐平市',
		parent: '160'
	},
	{
		value: '1592',
		name: '浮梁县',
		parent: '160'
	},
	{
		value: '1594',
		name: '安源区',
		parent: '161'
	},
	{
		value: '1595',
		name: '湘东区',
		parent: '161'
	},
	{
		value: '1596',
		name: '莲花县',
		parent: '161'
	},
	{
		value: '1597',
		name: '上栗县',
		parent: '161'
	},
	{
		value: '1598',
		name: '芦溪县',
		parent: '161'
	},
	{
		value: '1600',
		name: '浔阳区',
		parent: '162'
	},
	{
		value: '1601',
		name: '庐山区',
		parent: '162'
	},
	{
		value: '1602',
		name: '瑞昌市',
		parent: '162'
	},
	{
		value: '1603',
		name: '九江县',
		parent: '162'
	},
	{
		value: '1604',
		name: '武宁县',
		parent: '162'
	},
	{
		value: '1605',
		name: '修水县',
		parent: '162'
	},
	{
		value: '1606',
		name: '永修县',
		parent: '162'
	},
	{
		value: '1607',
		name: '德安县',
		parent: '162'
	},
	{
		value: '1608',
		name: '星子县',
		parent: '162'
	},
	{
		value: '1609',
		name: '都昌县',
		parent: '162'
	},
	{
		value: '1610',
		name: '湖口县',
		parent: '162'
	},
	{
		value: '1611',
		name: '彭泽县',
		parent: '162'
	},
	{
		value: '1613',
		name: '渝水区',
		parent: '163'
	},
	{
		value: '1614',
		name: '分宜县',
		parent: '163'
	},
	{
		value: '1616',
		name: '月湖区',
		parent: '164'
	},
	{
		value: '1617',
		name: '贵溪市',
		parent: '164'
	},
	{
		value: '1618',
		name: '余江县',
		parent: '164'
	},
	{
		value: '1620',
		name: '章贡区',
		parent: '165'
	},
	{
		value: '1621',
		name: '瑞金市',
		parent: '165'
	},
	{
		value: '1622',
		name: '南康市',
		parent: '165'
	},
	{
		value: '1623',
		name: '赣县',
		parent: '165'
	},
	{
		value: '1624',
		name: '信丰县',
		parent: '165'
	},
	{
		value: '1625',
		name: '大余县',
		parent: '165'
	},
	{
		value: '1626',
		name: '上犹县',
		parent: '165'
	},
	{
		value: '1627',
		name: '崇义县',
		parent: '165'
	},
	{
		value: '1628',
		name: '安远县',
		parent: '165'
	},
	{
		value: '1629',
		name: '龙南县',
		parent: '165'
	},
	{
		value: '1630',
		name: '定南县',
		parent: '165'
	},
	{
		value: '1631',
		name: '全南县',
		parent: '165'
	},
	{
		value: '1632',
		name: '宁都县',
		parent: '165'
	},
	{
		value: '1633',
		name: '于都县',
		parent: '165'
	},
	{
		value: '1634',
		name: '兴国县',
		parent: '165'
	},
	{
		value: '1635',
		name: '会昌县',
		parent: '165'
	},
	{
		value: '1636',
		name: '寻乌县',
		parent: '165'
	},
	{
		value: '1637',
		name: '石城县',
		parent: '165'
	},
	{
		value: '1639',
		name: '吉州区',
		parent: '166'
	},
	{
		value: '1640',
		name: '青原区',
		parent: '166'
	},
	{
		value: '1641',
		name: '井冈山市',
		parent: '166'
	},
	{
		value: '1642',
		name: '吉安县',
		parent: '166'
	},
	{
		value: '1643',
		name: '吉水县',
		parent: '166'
	},
	{
		value: '1644',
		name: '峡江县',
		parent: '166'
	},
	{
		value: '1645',
		name: '新干县',
		parent: '166'
	},
	{
		value: '1646',
		name: '永丰县',
		parent: '166'
	},
	{
		value: '1647',
		name: '泰和县',
		parent: '166'
	},
	{
		value: '1648',
		name: '遂川县',
		parent: '166'
	},
	{
		value: '1649',
		name: '万安县',
		parent: '166'
	},
	{
		value: '1650',
		name: '安福县',
		parent: '166'
	},
	{
		value: '1651',
		name: '永新县',
		parent: '166'
	},
	{
		value: '1653',
		name: '袁州区',
		parent: '167'
	},
	{
		value: '1654',
		name: '丰城市',
		parent: '167'
	},
	{
		value: '1655',
		name: '樟树市',
		parent: '167'
	},
	{
		value: '1656',
		name: '高安市',
		parent: '167'
	},
	{
		value: '1279',
		name: '通川区',
		parent: '124'
	},
	{
		value: '1280',
		name: '万源市',
		parent: '124'
	},
	{
		value: '1281',
		name: '达县',
		parent: '124'
	},
	{
		value: '1282',
		name: '宣汉县',
		parent: '124'
	},
	{
		value: '1283',
		name: '开江县',
		parent: '124'
	},
	{
		value: '1284',
		name: '大竹县',
		parent: '124'
	},
	{
		value: '1285',
		name: '渠县',
		parent: '124'
	},
	{
		value: '1287',
		name: '东坡区',
		parent: '125'
	},
	{
		value: '1288',
		name: '仁寿县',
		parent: '125'
	},
	{
		value: '1289',
		name: '彭山县',
		parent: '125'
	},
	{
		value: '1290',
		name: '洪雅县',
		parent: '125'
	},
	{
		value: '1291',
		name: '丹棱县',
		parent: '125'
	},
	{
		value: '1292',
		name: '青神县',
		parent: '125'
	},
	{
		value: '1294',
		name: '雨城区',
		parent: '126'
	},
	{
		value: '1075',
		name: '密山市',
		parent: '101'
	},
	{
		value: '1076',
		name: '鸡东县',
		parent: '101'
	},
	{
		value: '1078',
		name: '爱民区',
		parent: '102'
	},
	{
		value: '1295',
		name: '名山县',
		parent: '126'
	},
	{
		value: '1296',
		name: '荥经县',
		parent: '126'
	},
	{
		value: '1297',
		name: '汉源县',
		parent: '126'
	},
	{
		value: '1298',
		name: '石棉县',
		parent: '126'
	},
	{
		value: '1299',
		name: '天全县',
		parent: '126'
	},
	{
		value: '1300',
		name: '芦山县',
		parent: '126'
	},
	{
		value: '1301',
		name: '宝兴县',
		parent: '126'
	},
	{
		value: '1303',
		name: '巴州区',
		parent: '127'
	},
	{
		value: '1304',
		name: '通江县',
		parent: '127'
	},
	{
		value: '1305',
		name: '南江县',
		parent: '127'
	},
	{
		value: '1306',
		name: '平昌县',
		parent: '127'
	},
	{
		value: '1308',
		name: '雁江区',
		parent: '128'
	},
	{
		value: '1309',
		name: '简阳市',
		parent: '128'
	},
	{
		value: '1310',
		name: '乐至县',
		parent: '128'
	},
	{
		value: '1311',
		name: '安岳县',
		parent: '128'
	},
	{
		value: '1313',
		name: '马尔康县',
		parent: '129'
	},
	{
		value: '1314',
		name: '汶川县',
		parent: '129'
	},
	{
		value: '1315',
		name: '理县',
		parent: '129'
	},
	{
		value: '1316',
		name: '茂县',
		parent: '129'
	},
	{
		value: '1317',
		name: '松潘县',
		parent: '129'
	},
	{
		value: '1318',
		name: '九寨沟县',
		parent: '129'
	},
	{
		value: '1319',
		name: '金川县',
		parent: '129'
	},
	{
		value: '1320',
		name: '小金县',
		parent: '129'
	},
	{
		value: '1321',
		name: '黑水县',
		parent: '129'
	},
	{
		value: '1322',
		name: '壤塘县',
		parent: '129'
	},
	{
		value: '1323',
		name: '阿坝县',
		parent: '129'
	},
	{
		value: '1324',
		name: '若尔盖县',
		parent: '129'
	},
	{
		value: '1325',
		name: '红原县',
		parent: '129'
	},
	{
		value: '1327',
		name: '康定县',
		parent: '130'
	},
	{
		value: '1328',
		name: '泸定县',
		parent: '130'
	},
	{
		value: '1329',
		name: '丹巴县',
		parent: '130'
	},
	{
		value: '1330',
		name: '九龙县',
		parent: '130'
	},
	{
		value: '1331',
		name: '雅江县',
		parent: '130'
	},
	{
		value: '1332',
		name: '道孚县',
		parent: '130'
	},
	{
		value: '1333',
		name: '炉霍县',
		parent: '130'
	},
	{
		value: '1334',
		name: '甘孜县',
		parent: '130'
	},
	{
		value: '1335',
		name: '新龙县',
		parent: '130'
	},
	{
		value: '1336',
		name: '德格县',
		parent: '130'
	},
	{
		value: '1337',
		name: '白玉县',
		parent: '130'
	},
	{
		value: '1338',
		name: '石渠县',
		parent: '130'
	},
	{
		value: '1339',
		name: '色达县',
		parent: '130'
	},
	{
		value: '1340',
		name: '理塘县',
		parent: '130'
	},
	{
		value: '1341',
		name: '巴塘县',
		parent: '130'
	},
	{
		value: '1342',
		name: '乡城县',
		parent: '130'
	},
	{
		value: '1343',
		name: '稻城县',
		parent: '130'
	},
	{
		value: '1344',
		name: '得荣县',
		parent: '130'
	},
	{
		value: '1346',
		name: '西昌市',
		parent: '131'
	},
	{
		value: '1347',
		name: '盐源县',
		parent: '131'
	},
	{
		value: '1348',
		name: '德昌县',
		parent: '131'
	},
	{
		value: '1349',
		name: '会理县',
		parent: '131'
	},
	{
		value: '1350',
		name: '会东县',
		parent: '131'
	},
	{
		value: '1351',
		name: '宁南县',
		parent: '131'
	},
	{
		value: '1352',
		name: '普格县',
		parent: '131'
	},
	{
		value: '1353',
		name: '布拖县',
		parent: '131'
	},
	{
		value: '1354',
		name: '金阳县',
		parent: '131'
	},
	{
		value: '1355',
		name: '昭觉县',
		parent: '131'
	},
	{
		value: '1356',
		name: '喜德县',
		parent: '131'
	},
	{
		value: '1357',
		name: '冕宁县',
		parent: '131'
	},
	{
		value: '1358',
		name: '越西县',
		parent: '131'
	},
	{
		value: '1359',
		name: '甘洛县',
		parent: '131'
	},
	{
		value: '1360',
		name: '美姑县',
		parent: '131'
	},
	{
		value: '1361',
		name: '雷波县',
		parent: '131'
	},
	{
		value: '1362',
		name: '木里藏族自治县',
		parent: '131'
	},
	{
		value: '1367',
		name: '庐阳区',
		parent: '133'
	},
	{
		value: '1368',
		name: '瑶海区',
		parent: '133'
	},
	{
		value: '1369',
		name: '蜀山区',
		parent: '133'
	},
	{
		value: '1370',
		name: '包河区',
		parent: '133'
	},
	{
		value: '1371',
		name: '长丰县',
		parent: '133'
	},
	{
		value: '1372',
		name: '肥东县',
		parent: '133'
	},
	{
		value: '1373',
		name: '肥西县',
		parent: '133'
	},
	{
		value: '1375',
		name: '相山区',
		parent: '134'
	},
	{
		value: '1376',
		name: '杜集区',
		parent: '134'
	},
	{
		value: '1377',
		name: '烈山区',
		parent: '134'
	},
	{
		value: '1378',
		name: '濉溪县',
		parent: '134'
	},
	{
		value: '1380',
		name: '雨山区',
		parent: '135'
	},
	{
		value: '1381',
		name: '花山区',
		parent: '135'
	},
	{
		value: '1382',
		name: '金家庄区',
		parent: '135'
	},
	{
		value: '1383',
		name: '当涂县',
		parent: '135'
	},
	{
		value: '1385',
		name: '宣州区',
		parent: '136'
	},
	{
		value: '1386',
		name: '宁国市',
		parent: '136'
	},
	{
		value: '1387',
		name: '郎溪县',
		parent: '136'
	},
	{
		value: '1388',
		name: '广德县',
		parent: '136'
	},
	{
		value: '1389',
		name: '泾县',
		parent: '136'
	},
	{
		value: '1390',
		name: '旌德县',
		parent: '136'
	},
	{
		value: '1391',
		name: '绩溪县',
		parent: '136'
	},
	{
		value: '1393',
		name: '镜湖区',
		parent: '137'
	},
	{
		value: '1396',
		name: '鸠江区',
		parent: '137'
	},
	{
		value: '1397',
		name: '芜湖县',
		parent: '137'
	},
	{
		value: '1398',
		name: '繁昌县',
		parent: '137'
	},
	{
		value: '1399',
		name: '南陵县',
		parent: '137'
	},
	{
		value: '1401',
		name: '迎江区',
		parent: '138'
	},
	{
		value: '1402',
		name: '大观区',
		parent: '138'
	},
	{
		value: '1403',
		name: '郊区',
		parent: '138'
	},
	{
		value: '1404',
		name: '桐城市',
		parent: '138'
	},
	{
		value: '1405',
		name: '怀宁县',
		parent: '138'
	},
	{
		value: '1406',
		name: '枞阳县',
		parent: '138'
	},
	{
		value: '1407',
		name: '潜山县',
		parent: '138'
	},
	{
		value: '1408',
		name: '太湖县',
		parent: '138'
	},
	{
		value: '1409',
		name: '宿松县',
		parent: '138'
	},
	{
		value: '1410',
		name: '望江县',
		parent: '138'
	},
	{
		value: '1411',
		name: '岳西县',
		parent: '138'
	},
	{
		value: '1412',
		name: '宜秀区',
		parent: '138'
	},
	{
		value: '1414',
		name: '金安区',
		parent: '139'
	},
	{
		value: '1415',
		name: '裕安区',
		parent: '139'
	},
	{
		value: '1416',
		name: '寿县',
		parent: '139'
	},
	{
		value: '1417',
		name: '霍邱县',
		parent: '139'
	},
	{
		value: '1418',
		name: '舒城县',
		parent: '139'
	},
	{
		value: '1419',
		name: '金寨县',
		parent: '139'
	},
	{
		value: '1420',
		name: '霍山县',
		parent: '139'
	},
	{
		value: '1422',
		name: '铜官山区',
		parent: '140'
	},
	{
		value: '1423',
		name: '狮子山区',
		parent: '140'
	},
	{
		value: '1424',
		name: '郊区',
		parent: '140'
	},
	{
		value: '1425',
		name: '铜陵县',
		parent: '140'
	},
	{
		value: '1427',
		name: '贵池区',
		parent: '141'
	},
	{
		value: '1428',
		name: '东至县',
		parent: '141'
	},
	{
		value: '1429',
		name: '石台县',
		parent: '141'
	},
	{
		value: '1430',
		name: '青阳县',
		parent: '141'
	},
	{
		value: '1432',
		name: '颍州区',
		parent: '142'
	},
	{
		value: '1433',
		name: '颍东区',
		parent: '142'
	},
	{
		value: '1434',
		name: '颍泉区',
		parent: '142'
	},
	{
		value: '1435',
		name: '界首市',
		parent: '142'
	},
	{
		value: '1436',
		name: '临泉县',
		parent: '142'
	},
	{
		value: '1437',
		name: '太和县',
		parent: '142'
	},
	{
		value: '1438',
		name: '阜南县',
		parent: '142'
	},
	{
		value: '1439',
		name: '颍上县',
		parent: '142'
	},
	{
		value: '1441',
		name: '田家庵区',
		parent: '143'
	},
	{
		value: '1442',
		name: '大通区',
		parent: '143'
	},
	{
		value: '1443',
		name: '谢家集区',
		parent: '143'
	},
	{
		value: '1444',
		name: '八公山区',
		parent: '143'
	},
	{
		value: '1445',
		name: '潘集区',
		parent: '143'
	},
	{
		value: '1446',
		name: '凤台县',
		parent: '143'
	},
	{
		value: '1448',
		name: '蚌山区',
		parent: '144'
	},
	{
		value: '1449',
		name: '龙子湖区',
		parent: '144'
	},
	{
		value: '1450',
		name: '禹会区',
		parent: '144'
	},
	{
		value: '1451',
		name: '淮上区',
		parent: '144'
	},
	{
		value: '1452',
		name: '怀远县',
		parent: '144'
	},
	{
		value: '1453',
		name: '五河县',
		parent: '144'
	},
	{
		value: '1454',
		name: '固镇县',
		parent: '144'
	},
	{
		value: '1456',
		name: '屯溪区',
		parent: '145'
	},
	{
		value: '1457',
		name: '黄山区',
		parent: '145'
	},
	{
		value: '1458',
		name: '徽州区',
		parent: '145'
	},
	{
		value: '1459',
		name: '歙县',
		parent: '145'
	},
	{
		value: '1460',
		name: '休宁县',
		parent: '145'
	},
	{
		value: '1461',
		name: '黟县',
		parent: '145'
	},
	{
		value: '1462',
		name: '祁门县',
		parent: '145'
	},
	{
		value: '1463',
		name: '琅琊区',
		parent: '146'
	},
	{
		value: '1464',
		name: '南谯区',
		parent: '146'
	},
	{
		value: '1465',
		name: '明光市',
		parent: '146'
	},
	{
		value: '3007',
		name: '景洪市',
		parent: '313'
	},
	{
		value: '3008',
		name: '勐海县',
		parent: '313'
	},
	{
		value: '3009',
		name: '勐腊县',
		parent: '313'
	},
	{
		value: '3012',
		name: '双柏县',
		parent: '314'
	},
	{
		value: '3013',
		name: '牟定县',
		parent: '314'
	},
	{
		value: '1096',
		name: '肇东市',
		parent: '104'
	},
	{
		value: '1097',
		name: '海伦市',
		parent: '104'
	},
	{
		value: '1098',
		name: '望奎县',
		parent: '104'
	},
	{
		value: '1099',
		name: '兰西县',
		parent: '104'
	},
	{
		value: '1100',
		name: '青冈县',
		parent: '104'
	},
	{
		value: '1101',
		name: '庆安县',
		parent: '104'
	},
	{
		value: '1102',
		name: '明水县',
		parent: '104'
	},
	{
		value: '1103',
		name: '绥棱县',
		parent: '104'
	},
	{
		value: '1105',
		name: '伊春区',
		parent: '105'
	},
	{
		value: '1106',
		name: '南岔区',
		parent: '105'
	},
	{
		value: '1107',
		name: '友好区',
		parent: '105'
	},
	{
		value: '1108',
		name: '西林区',
		parent: '105'
	},
	{
		value: '1109',
		name: '翠峦区',
		parent: '105'
	},
	{
		value: '1110',
		name: '新青区',
		parent: '105'
	},
	{
		value: '1111',
		name: '美溪区',
		parent: '105'
	},
	{
		value: '1112',
		name: '金山屯区',
		parent: '105'
	},
	{
		value: '1113',
		name: '五营区',
		parent: '105'
	},
	{
		value: '1114',
		name: '乌马河区',
		parent: '105'
	},
	{
		value: '1115',
		name: '汤旺河区',
		parent: '105'
	},
	{
		value: '1116',
		name: '带岭区',
		parent: '105'
	},
	{
		value: '1117',
		name: '乌伊岭区',
		parent: '105'
	},
	{
		value: '1118',
		name: '红星区',
		parent: '105'
	},
	{
		value: '1119',
		name: '上甘岭区',
		parent: '105'
	},
	{
		value: '1120',
		name: '铁力市',
		parent: '105'
	},
	{
		value: '1121',
		name: '嘉荫县',
		parent: '105'
	},
	{
		value: '1123',
		name: '兴山区',
		parent: '106'
	},
	{
		value: '1124',
		name: '向阳区',
		parent: '106'
	},
	{
		value: '1125',
		name: '工农区',
		parent: '106'
	},
	{
		value: '1126',
		name: '南山区',
		parent: '106'
	},
	{
		value: '1127',
		name: '兴安区',
		parent: '106'
	},
	{
		value: '1128',
		name: '东山区',
		parent: '106'
	},
	{
		value: '1129',
		name: '萝北县',
		parent: '106'
	},
	{
		value: '1130',
		name: '绥滨县',
		parent: '106'
	},
	{
		value: '1132',
		name: '萨尔图区',
		parent: '107'
	},
	{
		value: '1133',
		name: '龙凤区',
		parent: '107'
	},
	{
		value: '1134',
		name: '让胡路区',
		parent: '107'
	},
	{
		value: '1135',
		name: '大同区',
		parent: '107'
	},
	{
		value: '1136',
		name: '红岗区',
		parent: '107'
	},
	{
		value: '1137',
		name: '肇州县',
		parent: '107'
	},
	{
		value: '1138',
		name: '肇源县',
		parent: '107'
	},
	{
		value: '1139',
		name: '林甸县',
		parent: '107'
	},
	{
		value: '1140',
		name: '杜尔伯特蒙古族自治县',
		parent: '107'
	},
	{
		value: '1142',
		name: '爱辉区',
		parent: '108'
	},
	{
		value: '1143',
		name: '北安市',
		parent: '108'
	},
	{
		value: '1144',
		name: '五大连池市',
		parent: '108'
	},
	{
		value: '1145',
		name: '嫩江县',
		parent: '108'
	},
	{
		value: '1146',
		name: '逊克县',
		parent: '108'
	},
	{
		value: '1147',
		name: '孙吴县',
		parent: '108'
	},
	{
		value: '1149',
		name: '尖山区',
		parent: '109'
	},
	{
		value: '1150',
		name: '岭东区',
		parent: '109'
	},
	{
		value: '1151',
		name: '四方台区',
		parent: '109'
	},
	{
		value: '1152',
		name: '宝山区',
		parent: '109'
	},
	{
		value: '1153',
		name: '集贤县',
		parent: '109'
	},
	{
		value: '1154',
		name: '友谊县',
		parent: '109'
	},
	{
		value: '1155',
		name: '宝清县',
		parent: '109'
	},
	{
		value: '1156',
		name: '饶河县',
		parent: '109'
	},
	{
		value: '1158',
		name: '呼玛县',
		parent: '110'
	},
	{
		value: '1159',
		name: '塔河县',
		parent: '110'
	},
	{
		value: '1160',
		name: '漠河县',
		parent: '110'
	},
	{
		value: '1162',
		name: '青羊区',
		parent: '111'
	},
	{
		value: '1163',
		name: '锦江区',
		parent: '111'
	},
	{
		value: '1164',
		name: '金牛区',
		parent: '111'
	},
	{
		value: '1165',
		name: '武侯区',
		parent: '111'
	},
	{
		value: '1166',
		name: '成华区',
		parent: '111'
	},
	{
		value: '1167',
		name: '龙泉驿区',
		parent: '111'
	},
	{
		value: '1168',
		name: '青白江区',
		parent: '111'
	},
	{
		value: '1169',
		name: '新都区',
		parent: '111'
	},
	{
		value: '1170',
		name: '温江区',
		parent: '111'
	},
	{
		value: '1171',
		name: '都江堰市',
		parent: '111'
	},
	{
		value: '1172',
		name: '彭州市',
		parent: '111'
	},
	{
		value: '1173',
		name: '邛崃市',
		parent: '111'
	},
	{
		value: '1174',
		name: '崇州市',
		parent: '111'
	},
	{
		value: '1175',
		name: '金堂县',
		parent: '111'
	},
	{
		value: '1176',
		name: '双流县',
		parent: '111'
	},
	{
		value: '1177',
		name: '郫县',
		parent: '111'
	},
	{
		value: '1178',
		name: '大邑县',
		parent: '111'
	},
	{
		value: '1179',
		name: '蒲江县',
		parent: '111'
	},
	{
		value: '1180',
		name: '新津县',
		parent: '111'
	},
	{
		value: '1182',
		name: '自流井区',
		parent: '112'
	},
	{
		value: '1183',
		name: '大安区',
		parent: '112'
	},
	{
		value: '1184',
		name: '贡井区',
		parent: '112'
	},
	{
		value: '1185',
		name: '沿滩区',
		parent: '112'
	},
	{
		value: '1186',
		name: '荣县',
		parent: '112'
	},
	{
		value: '1187',
		name: '富顺县',
		parent: '112'
	},
	{
		value: '1189',
		name: '东区',
		parent: '113'
	},
	{
		value: '1190',
		name: '西区',
		parent: '113'
	},
	{
		value: '1191',
		name: '仁和区',
		parent: '113'
	},
	{
		value: '1192',
		name: '米易县',
		parent: '113'
	},
	{
		value: '1193',
		name: '盐边县',
		parent: '113'
	},
	{
		value: '1195',
		name: '江阳区',
		parent: '114'
	},
	{
		value: '1196',
		name: '纳溪区',
		parent: '114'
	},
	{
		value: '1197',
		name: '龙马潭区',
		parent: '114'
	},
	{
		value: '1198',
		name: '泸县',
		parent: '114'
	},
	{
		value: '1199',
		name: '合江县',
		parent: '114'
	},
	{
		value: '1200',
		name: '叙永县',
		parent: '114'
	},
	{
		value: '1201',
		name: '古蔺县',
		parent: '114'
	},
	{
		value: '1203',
		name: '旌阳区',
		parent: '115'
	},
	{
		value: '1204',
		name: '什邡市',
		parent: '115'
	},
	{
		value: '1205',
		name: '广汉市',
		parent: '115'
	},
	{
		value: '1206',
		name: '绵竹市',
		parent: '115'
	},
	{
		value: '1207',
		name: '罗江县',
		parent: '115'
	},
	{
		value: '1208',
		name: '中江县',
		parent: '115'
	},
	{
		value: '1210',
		name: '涪城区',
		parent: '116'
	},
	{
		value: '1211',
		name: '游仙区',
		parent: '116'
	},
	{
		value: '1212',
		name: '江油市',
		parent: '116'
	},
	{
		value: '1213',
		name: '三台县',
		parent: '116'
	},
	{
		value: '1214',
		name: '盐亭县',
		parent: '116'
	},
	{
		value: '1215',
		name: '安县',
		parent: '116'
	},
	{
		value: '1216',
		name: '梓潼县',
		parent: '116'
	},
	{
		value: '1217',
		name: '平武县',
		parent: '116'
	},
	{
		value: '1218',
		name: '北川羌族自治县',
		parent: '116'
	},
	{
		value: '1220',
		name: '利州区',
		parent: '117'
	},
	{
		value: '1221',
		name: '元坝区',
		parent: '117'
	},
	{
		value: '1222',
		name: '朝天区',
		parent: '117'
	},
	{
		value: '1223',
		name: '旺苍县',
		parent: '117'
	},
	{
		value: '1224',
		name: '青川县',
		parent: '117'
	},
	{
		value: '1225',
		name: '剑阁县',
		parent: '117'
	},
	{
		value: '1226',
		name: '苍溪县',
		parent: '117'
	},
	{
		value: '1228',
		name: '船山区',
		parent: '118'
	},
	{
		value: '1229',
		name: '安居区',
		parent: '118'
	},
	{
		value: '1230',
		name: '蓬溪县',
		parent: '118'
	},
	{
		value: '1231',
		name: '射洪县',
		parent: '118'
	},
	{
		value: '1232',
		name: '大英县',
		parent: '118'
	},
	{
		value: '1234',
		name: '市中区',
		parent: '119'
	},
	{
		value: '1235',
		name: '东兴区',
		parent: '119'
	},
	{
		value: '1236',
		name: '威远县',
		parent: '119'
	},
	{
		value: '1237',
		name: '资中县',
		parent: '119'
	},
	{
		value: '1238',
		name: '隆昌县',
		parent: '119'
	},
	{
		value: '1240',
		name: '市中区',
		parent: '120'
	},
	{
		value: '1241',
		name: '沙湾区',
		parent: '120'
	},
	{
		value: '1242',
		name: '五通桥区',
		parent: '120'
	},
	{
		value: '1243',
		name: '金口河区',
		parent: '120'
	},
	{
		value: '1244',
		name: '峨眉山市',
		parent: '120'
	},
	{
		value: '1245',
		name: '犍为县',
		parent: '120'
	},
	{
		value: '1246',
		name: '井研县',
		parent: '120'
	},
	{
		value: '1247',
		name: '夹江县',
		parent: '120'
	},
	{
		value: '1248',
		name: '沐川县',
		parent: '120'
	},
	{
		value: '1249',
		name: '峨边彝族自治县',
		parent: '120'
	},
	{
		value: '1250',
		name: '马边彝族自治县',
		parent: '120'
	},
	{
		value: '1252',
		name: '顺庆区',
		parent: '121'
	},
	{
		value: '1253',
		name: '高坪区',
		parent: '121'
	},
	{
		value: '1254',
		name: '嘉陵区',
		parent: '121'
	},
	{
		value: '1255',
		name: '阆中市',
		parent: '121'
	},
	{
		value: '1256',
		name: '南部县',
		parent: '121'
	},
	{
		value: '1257',
		name: '营山县',
		parent: '121'
	},
	{
		value: '1258',
		name: '蓬安县',
		parent: '121'
	},
	{
		value: '1259',
		name: '仪陇县',
		parent: '121'
	},
	{
		value: '1260',
		name: '西充县',
		parent: '121'
	},
	{
		value: '1262',
		name: '翠屏区',
		parent: '122'
	},
	{
		value: '1263',
		name: '宜宾县',
		parent: '122'
	},
	{
		value: '1264',
		name: '南溪区',
		parent: '122'
	},
	{
		value: '1265',
		name: '江安县',
		parent: '122'
	},
	{
		value: '1266',
		name: '长宁县',
		parent: '122'
	},
	{
		value: '1267',
		name: '高县',
		parent: '122'
	},
	{
		value: '1268',
		name: '筠连县',
		parent: '122'
	},
	{
		value: '1269',
		name: '珙县',
		parent: '122'
	},
	{
		value: '1270',
		name: '兴文县',
		parent: '122'
	},
	{
		value: '1271',
		name: '屏山县',
		parent: '122'
	},
	{
		value: '1273',
		name: '广安区',
		parent: '123'
	},
	{
		value: '1274',
		name: '华蓥市',
		parent: '123'
	},
	{
		value: '1275',
		name: '岳池县',
		parent: '123'
	},
	{
		value: '1276',
		name: '武胜县',
		parent: '123'
	},
	{
		value: '1277',
		name: '邻水县',
		parent: '123'
	},
	{
		value: '2837',
		name: '务川仡佬族苗族自治县',
		parent: '296'
	},
	{
		value: '2839',
		name: '西秀区',
		parent: '297'
	},
	{
		value: '2840',
		name: '平坝县',
		parent: '297'
	},
	{
		value: '2841',
		name: '普定县',
		parent: '297'
	},
	{
		value: '2842',
		name: '关岭布依族苗族自治县',
		parent: '297'
	},
	{
		value: '2843',
		name: '镇宁布依族苗族自治县',
		parent: '297'
	},
	{
		value: '2844',
		name: '紫云苗族布依族自治县',
		parent: '297'
	},
	{
		value: '2846',
		name: '铜仁市',
		parent: '298'
	},
	{
		value: '2847',
		name: '江口县',
		parent: '298'
	},
	{
		value: '2848',
		name: '石阡县',
		parent: '298'
	},
	{
		value: '2849',
		name: '思南县',
		parent: '298'
	},
	{
		value: '2850',
		name: '德江县',
		parent: '298'
	},
	{
		value: '2851',
		name: '玉屏侗族自治县',
		parent: '298'
	},
	{
		value: '2852',
		name: '印江土家族苗族自治县',
		parent: '298'
	},
	{
		value: '2853',
		name: '沿河土家族自治县',
		parent: '298'
	},
	{
		value: '2854',
		name: '松桃苗族自治县',
		parent: '298'
	},
	{
		value: '2855',
		name: '万山特区',
		parent: '298'
	},
	{
		value: '2857',
		name: '毕节市',
		parent: '299'
	},
	{
		value: '2858',
		name: '大方县',
		parent: '299'
	},
	{
		value: '2859',
		name: '黔西县',
		parent: '299'
	},
	{
		value: '2860',
		name: '金沙县',
		parent: '299'
	},
	{
		value: '2861',
		name: '织金县',
		parent: '299'
	},
	{
		value: '2862',
		name: '纳雍县',
		parent: '299'
	},
	{
		value: '2863',
		name: '赫章县',
		parent: '299'
	},
	{
		value: '2864',
		name: '威宁彝族回族苗族自治县',
		parent: '299'
	},
	{
		value: '2866',
		name: '兴义市',
		parent: '300'
	},
	{
		value: '2867',
		name: '兴仁县',
		parent: '300'
	},
	{
		value: '2868',
		name: '普安县',
		parent: '300'
	},
	{
		value: '2869',
		name: '晴隆县',
		parent: '300'
	},
	{
		value: '2870',
		name: '贞丰县',
		parent: '300'
	},
	{
		value: '2871',
		name: '望谟县',
		parent: '300'
	},
	{
		value: '2872',
		name: '册亨县',
		parent: '300'
	},
	{
		value: '2873',
		name: '安龙县',
		parent: '300'
	},
	{
		value: '2875',
		name: '凯里市',
		parent: '301'
	},
	{
		value: '2876',
		name: '黄平县',
		parent: '301'
	},
	{
		value: '2877',
		name: '施秉县',
		parent: '301'
	},
	{
		value: '2878',
		name: '三穗县',
		parent: '301'
	},
	{
		value: '2879',
		name: '镇远县',
		parent: '301'
	},
	{
		value: '2880',
		name: '岑巩县',
		parent: '301'
	},
	{
		value: '2881',
		name: '天柱县',
		parent: '301'
	},
	{
		value: '2882',
		name: '锦屏县',
		parent: '301'
	},
	{
		value: '2883',
		name: '剑河县',
		parent: '301'
	},
	{
		value: '2884',
		name: '台江县',
		parent: '301'
	},
	{
		value: '2885',
		name: '黎平县',
		parent: '301'
	},
	{
		value: '2886',
		name: '榕江县',
		parent: '301'
	},
	{
		value: '2887',
		name: '从江县',
		parent: '301'
	},
	{
		value: '2888',
		name: '雷山县',
		parent: '301'
	},
	{
		value: '2889',
		name: '麻江县',
		parent: '301'
	},
	{
		value: '2890',
		name: '丹寨县',
		parent: '301'
	},
	{
		value: '2892',
		name: '都匀市',
		parent: '302'
	},
	{
		value: '2893',
		name: '福泉市',
		parent: '302'
	},
	{
		value: '2894',
		name: '荔波县',
		parent: '302'
	},
	{
		value: '2895',
		name: '贵定县',
		parent: '302'
	},
	{
		value: '2896',
		name: '瓮安县',
		parent: '302'
	},
	{
		value: '2897',
		name: '独山县',
		parent: '302'
	},
	{
		value: '2898',
		name: '平塘县',
		parent: '302'
	},
	{
		value: '2899',
		name: '罗甸县',
		parent: '302'
	},
	{
		value: '2900',
		name: '长顺县',
		parent: '302'
	},
	{
		value: '2901',
		name: '龙里县',
		parent: '302'
	},
	{
		value: '2902',
		name: '惠水县',
		parent: '302'
	},
	{
		value: '2903',
		name: '三都水族自治县',
		parent: '302'
	},
	{
		value: '2905',
		name: '盘龙区',
		parent: '303'
	},
	{
		value: '2906',
		name: '五华区',
		parent: '303'
	},
	{
		value: '2907',
		name: '官渡区',
		parent: '303'
	},
	{
		value: '2908',
		name: '西山区',
		parent: '303'
	},
	{
		value: '2909',
		name: '东川区',
		parent: '303'
	},
	{
		value: '2910',
		name: '安宁市',
		parent: '303'
	},
	{
		value: '2911',
		name: '呈贡区',
		parent: '303'
	},
	{
		value: '2912',
		name: '晋宁县',
		parent: '303'
	},
	{
		value: '2913',
		name: '富民县',
		parent: '303'
	},
	{
		value: '2914',
		name: '宜良县',
		parent: '303'
	},
	{
		value: '2915',
		name: '嵩明县',
		parent: '303'
	},
	{
		value: '2916',
		name: '石林彝族自治县',
		parent: '303'
	},
	{
		value: '2917',
		name: '禄劝彝族苗族自治县',
		parent: '303'
	},
	{
		value: '2918',
		name: '寻甸回族彝族自治县',
		parent: '303'
	},
	{
		value: '2920',
		name: '麒麟区',
		parent: '304'
	},
	{
		value: '2921',
		name: '宣威市',
		parent: '304'
	},
	{
		value: '2922',
		name: '马龙县',
		parent: '304'
	},
	{
		value: '2923',
		name: '沾益县',
		parent: '304'
	},
	{
		value: '2924',
		name: '富源县',
		parent: '304'
	},
	{
		value: '2925',
		name: '罗平县',
		parent: '304'
	},
	{
		value: '2926',
		name: '师宗县',
		parent: '304'
	},
	{
		value: '2927',
		name: '陆良县',
		parent: '304'
	},
	{
		value: '2928',
		name: '会泽县',
		parent: '304'
	},
	{
		value: '2930',
		name: '红塔区',
		parent: '305'
	},
	{
		value: '2931',
		name: '江川县',
		parent: '305'
	},
	{
		value: '2932',
		name: '澄江县',
		parent: '305'
	},
	{
		value: '2933',
		name: '通海县',
		parent: '305'
	},
	{
		value: '2934',
		name: '华宁县',
		parent: '305'
	},
	{
		value: '2935',
		name: '易门县',
		parent: '305'
	},
	{
		value: '2936',
		name: '峨山彝族自治县',
		parent: '305'
	},
	{
		value: '2937',
		name: '新平彝族傣族自治县',
		parent: '305'
	},
	{
		value: '2938',
		name: '元江哈尼族彝族傣族自治县',
		parent: '305'
	},
	{
		value: '2940',
		name: '隆阳区',
		parent: '306'
	},
	{
		value: '2941',
		name: '施甸县',
		parent: '306'
	},
	{
		value: '2942',
		name: '腾冲县',
		parent: '306'
	},
	{
		value: '2943',
		name: '龙陵县',
		parent: '306'
	},
	{
		value: '2944',
		name: '昌宁县',
		parent: '306'
	},
	{
		value: '2946',
		name: '昭阳区',
		parent: '307'
	},
	{
		value: '2947',
		name: '鲁甸县',
		parent: '307'
	},
	{
		value: '2948',
		name: '巧家县',
		parent: '307'
	},
	{
		value: '2949',
		name: '盐津县',
		parent: '307'
	},
	{
		value: '2950',
		name: '大关县',
		parent: '307'
	},
	{
		value: '2951',
		name: '永善县',
		parent: '307'
	},
	{
		value: '2952',
		name: '绥江县',
		parent: '307'
	},
	{
		value: '2953',
		name: '镇雄县',
		parent: '307'
	},
	{
		value: '2954',
		name: '彝良县',
		parent: '307'
	},
	{
		value: '2955',
		name: '威信县',
		parent: '307'
	},
	{
		value: '2956',
		name: '水富县',
		parent: '307'
	},
	{
		value: '2958',
		name: '古城区',
		parent: '308'
	},
	{
		value: '2959',
		name: '永胜县',
		parent: '308'
	},
	{
		value: '2960',
		name: '华坪县',
		parent: '308'
	},
	{
		value: '2961',
		name: '玉龙纳西族自治县',
		parent: '308'
	},
	{
		value: '2962',
		name: '宁蒗彝族自治县',
		parent: '308'
	},
	{
		value: '2964',
		name: '思茅区',
		parent: '309'
	},
	{
		value: '2965',
		name: '宁洱哈尼族彝族自治县',
		parent: '309'
	},
	{
		value: '2966',
		name: '墨江哈尼族自治县',
		parent: '309'
	},
	{
		value: '2967',
		name: '景东彝族自治县',
		parent: '309'
	},
	{
		value: '2968',
		name: '景谷傣族彝族自治县',
		parent: '309'
	},
	{
		value: '2969',
		name: '镇沅彝族哈尼族拉祜族自治县',
		parent: '309'
	},
	{
		value: '2970',
		name: '江城哈尼族彝族自治县',
		parent: '309'
	},
	{
		value: '2971',
		name: '孟连傣族拉祜族佤族自治县',
		parent: '309'
	},
	{
		value: '2972',
		name: '澜沧拉祜族自治县',
		parent: '309'
	},
	{
		value: '2973',
		name: '西盟佤族自治县',
		parent: '309'
	},
	{
		value: '2975',
		name: '临翔区',
		parent: '310'
	},
	{
		value: '2976',
		name: '凤庆县',
		parent: '310'
	},
	{
		value: '2977',
		name: '云县',
		parent: '310'
	},
	{
		value: '2978',
		name: '永德县',
		parent: '310'
	},
	{
		value: '2979',
		name: '镇康县',
		parent: '310'
	},
	{
		value: '2980',
		name: '双江拉祜族佤族布朗族傣族自治县',
		parent: '310'
	},
	{
		value: '2981',
		name: '耿马傣族佤族自治县',
		parent: '310'
	},
	{
		value: '2982',
		name: '沧源佤族自治县',
		parent: '310'
	},
	{
		value: '2984',
		name: '文山市',
		parent: '311'
	},
	{
		value: '2985',
		name: '砚山县',
		parent: '311'
	},
	{
		value: '2986',
		name: '西畴县',
		parent: '311'
	},
	{
		value: '2987',
		name: '麻栗坡县',
		parent: '311'
	},
	{
		value: '2988',
		name: '马关县',
		parent: '311'
	},
	{
		value: '2989',
		name: '丘北县',
		parent: '311'
	},
	{
		value: '2990',
		name: '广南县',
		parent: '311'
	},
	{
		value: '2991',
		name: '富宁县',
		parent: '311'
	},
	{
		value: '2993',
		name: '蒙自市',
		parent: '312'
	},
	{
		value: '2994',
		name: '个旧市',
		parent: '312'
	},
	{
		value: '2995',
		name: '开远市',
		parent: '312'
	},
	{
		value: '2996',
		name: '绿春县',
		parent: '312'
	},
	{
		value: '2997',
		name: '建水县',
		parent: '312'
	},
	{
		value: '2998',
		name: '石屏县',
		parent: '312'
	},
	{
		value: '2999',
		name: '弥勒县',
		parent: '312'
	},
	{
		value: '3000',
		name: '泸西县',
		parent: '312'
	},
	{
		value: '3001',
		name: '元阳县',
		parent: '312'
	},
	{
		value: '3002',
		name: '红河县',
		parent: '312'
	},
	{
		value: '3003',
		name: '金平苗族瑶族傣族自治县',
		parent: '312'
	},
	{
		value: '3004',
		name: '河口瑶族自治县',
		parent: '312'
	},
	{
		value: '3005',
		name: '屏边苗族自治县',
		parent: '312'
	},
	{
		value: '948',
		name: '南关区',
		parent: '88'
	},
	{
		value: '949',
		name: '宽城区',
		parent: '88'
	},
	{
		value: '950',
		name: '二道区',
		parent: '88'
	},
	{
		value: '951',
		name: '绿园区',
		parent: '88'
	},
	{
		value: '952',
		name: '双阳区',
		parent: '88'
	},
	{
		value: '953',
		name: '德惠市',
		parent: '88'
	},
	{
		value: '954',
		name: '九台市',
		parent: '88'
	},
	{
		value: '955',
		name: '榆树市',
		parent: '88'
	},
	{
		value: '956',
		name: '农安县',
		parent: '88'
	},
	{
		value: '958',
		name: '龙山区',
		parent: '89'
	},
	{
		value: '959',
		name: '西安区',
		parent: '89'
	},
	{
		value: '960',
		name: '东丰县',
		parent: '89'
	},
	{
		value: '961',
		name: '东辽县',
		parent: '89'
	},
	{
		value: '963',
		name: '东昌区',
		parent: '90'
	},
	{
		value: '964',
		name: '二道江区',
		parent: '90'
	},
	{
		value: '965',
		name: '梅河口市',
		parent: '90'
	},
	{
		value: '966',
		name: '集安市',
		parent: '90'
	},
	{
		value: '967',
		name: '通化县',
		parent: '90'
	},
	{
		value: '968',
		name: '辉南县',
		parent: '90'
	},
	{
		value: '969',
		name: '柳河县',
		parent: '90'
	},
	{
		value: '971',
		name: '八道江区',
		parent: '91'
	},
	{
		value: '972',
		name: '江源区',
		parent: '91'
	},
	{
		value: '973',
		name: '临江市',
		parent: '91'
	},
	{
		value: '974',
		name: '抚松县',
		parent: '91'
	},
	{
		value: '975',
		name: '靖宇县',
		parent: '91'
	},
	{
		value: '976',
		name: '长白朝鲜族自治县',
		parent: '91'
	},
	{
		value: '978',
		name: '宁江区',
		parent: '92'
	},
	{
		value: '979',
		name: '扶余县',
		parent: '92'
	},
	{
		value: '980',
		name: '长岭县',
		parent: '92'
	},
	{
		value: '981',
		name: '乾安县',
		parent: '92'
	},
	{
		value: '982',
		name: '前郭尔罗斯蒙古族自治县',
		parent: '92'
	},
	{
		value: '984',
		name: '船营区',
		parent: '93'
	},
	{
		value: '985',
		name: '龙潭区',
		parent: '93'
	},
	{
		value: '986',
		name: '昌邑区',
		parent: '93'
	},
	{
		value: '987',
		name: '丰满区',
		parent: '93'
	},
	{
		value: '988',
		name: '磐石市',
		parent: '93'
	},
	{
		value: '989',
		name: '蛟河市',
		parent: '93'
	},
	{
		value: '990',
		name: '桦甸市',
		parent: '93'
	},
	{
		value: '991',
		name: '舒兰市',
		parent: '93'
	},
	{
		value: '992',
		name: '永吉县',
		parent: '93'
	},
	{
		value: '994',
		name: '铁西区',
		parent: '94'
	},
	{
		value: '995',
		name: '铁东区',
		parent: '94'
	},
	{
		value: '996',
		name: '双辽市',
		parent: '94'
	},
	{
		value: '997',
		name: '公主岭市',
		parent: '94'
	},
	{
		value: '998',
		name: '梨树县',
		parent: '94'
	},
	{
		value: '999',
		name: '伊通满族自治县',
		parent: '94'
	},
	{
		value: '1001',
		name: '洮北区',
		parent: '95'
	},
	{
		value: '1002',
		name: '洮南市',
		parent: '95'
	},
	{
		value: '1003',
		name: '大安市',
		parent: '95'
	},
	{
		value: '1004',
		name: '镇赉县',
		parent: '95'
	},
	{
		value: '1005',
		name: '通榆县',
		parent: '95'
	},
	{
		value: '1007',
		name: '延吉市',
		parent: '96'
	},
	{
		value: '1008',
		name: '图们市',
		parent: '96'
	},
	{
		value: '1009',
		name: '敦化市',
		parent: '96'
	},
	{
		value: '1010',
		name: '珲春市',
		parent: '96'
	},
	{
		value: '1011',
		name: '龙井市',
		parent: '96'
	},
	{
		value: '1012',
		name: '和龙市',
		parent: '96'
	},
	{
		value: '1013',
		name: '汪清县',
		parent: '96'
	},
	{
		value: '1014',
		name: '安图县',
		parent: '96'
	},
	{
		value: '1016',
		name: '动力区',
		parent: '97'
	},
	{
		value: '1017',
		name: '松北区',
		parent: '97'
	},
	{
		value: '1018',
		name: '道里区',
		parent: '97'
	},
	{
		value: '1019',
		name: '南岗区',
		parent: '97'
	},
	{
		value: '1020',
		name: '道外区',
		parent: '97'
	},
	{
		value: '1021',
		name: '香坊区',
		parent: '97'
	},
	{
		value: '1022',
		name: '平房区',
		parent: '97'
	},
	{
		value: '1023',
		name: '呼兰区',
		parent: '97'
	},
	{
		value: '1024',
		name: '阿城区',
		parent: '97'
	},
	{
		value: '1025',
		name: '双城市',
		parent: '97'
	},
	{
		value: '1026',
		name: '尚志市',
		parent: '97'
	},
	{
		value: '1027',
		name: '五常市',
		parent: '97'
	},
	{
		value: '1028',
		name: '依兰县',
		parent: '97'
	},
	{
		value: '1029',
		name: '方正县',
		parent: '97'
	},
	{
		value: '1030',
		name: '宾县',
		parent: '97'
	},
	{
		value: '1031',
		name: '巴彦县',
		parent: '97'
	},
	{
		value: '1032',
		name: '木兰县',
		parent: '97'
	},
	{
		value: '1033',
		name: '通河县',
		parent: '97'
	},
	{
		value: '1034',
		name: '延寿县',
		parent: '97'
	},
	{
		value: '1036',
		name: '前进区',
		parent: '98'
	},
	{
		value: '1037',
		name: '永红区',
		parent: '98'
	},
	{
		value: '1038',
		name: '向阳区',
		parent: '98'
	},
	{
		value: '1039',
		name: '东风区',
		parent: '98'
	},
	{
		value: '1040',
		name: '郊区',
		parent: '98'
	},
	{
		value: '1041',
		name: '同江市',
		parent: '98'
	},
	{
		value: '1042',
		name: '富锦市',
		parent: '98'
	},
	{
		value: '1043',
		name: '桦南县',
		parent: '98'
	},
	{
		value: '1044',
		name: '桦川县',
		parent: '98'
	},
	{
		value: '1045',
		name: '汤原县',
		parent: '98'
	},
	{
		value: '1046',
		name: '抚远县',
		parent: '98'
	},
	{
		value: '1051',
		name: '建华区',
		parent: '100'
	},
	{
		value: '1052',
		name: '龙沙区',
		parent: '100'
	},
	{
		value: '1053',
		name: '铁锋区',
		parent: '100'
	},
	{
		value: '1054',
		name: '昂昂溪区',
		parent: '100'
	},
	{
		value: '1055',
		name: '富拉尔基区',
		parent: '100'
	},
	{
		value: '1056',
		name: '碾子山区',
		parent: '100'
	},
	{
		value: '1057',
		name: '梅里斯达斡尔族区',
		parent: '100'
	},
	{
		value: '1058',
		name: '讷河市',
		parent: '100'
	},
	{
		value: '1059',
		name: '龙江县',
		parent: '100'
	},
	{
		value: '1060',
		name: '依安县',
		parent: '100'
	},
	{
		value: '1061',
		name: '泰来县',
		parent: '100'
	},
	{
		value: '1062',
		name: '甘南县',
		parent: '100'
	},
	{
		value: '1063',
		name: '富裕县',
		parent: '100'
	},
	{
		value: '1064',
		name: '克山县',
		parent: '100'
	},
	{
		value: '1065',
		name: '克东县',
		parent: '100'
	},
	{
		value: '1066',
		name: '拜泉县',
		parent: '100'
	},
	{
		value: '1068',
		name: '鸡冠区',
		parent: '101'
	},
	{
		value: '1069',
		name: '恒山区',
		parent: '101'
	},
	{
		value: '1070',
		name: '滴道区',
		parent: '101'
	},
	{
		value: '1071',
		name: '梨树区',
		parent: '101'
	},
	{
		value: '1072',
		name: '城子河区',
		parent: '101'
	},
	{
		value: '1073',
		name: '麻山区',
		parent: '101'
	},
	{
		value: '1074',
		name: '虎林市',
		parent: '101'
	},
	{
		value: '852',
		name: '金州区',
		parent: '75'
	},
	{
		value: '1079',
		name: '东安区',
		parent: '102'
	},
	{
		value: '1080',
		name: '阳明区',
		parent: '102'
	},
	{
		value: '1081',
		name: '西安区',
		parent: '102'
	},
	{
		value: '1082',
		name: '穆棱市',
		parent: '102'
	},
	{
		value: '1083',
		name: '绥芬河市',
		parent: '102'
	},
	{
		value: '1084',
		name: '海林市',
		parent: '102'
	},
	{
		value: '1085',
		name: '宁安市',
		parent: '102'
	},
	{
		value: '1086',
		name: '东宁县',
		parent: '102'
	},
	{
		value: '1087',
		name: '林口县',
		parent: '102'
	},
	{
		value: '1089',
		name: '桃山区',
		parent: '103'
	},
	{
		value: '1090',
		name: '新兴区',
		parent: '103'
	},
	{
		value: '1091',
		name: '茄子河区',
		parent: '103'
	},
	{
		value: '1092',
		name: '勃利县',
		parent: '103'
	},
	{
		value: '1094',
		name: '北林区',
		parent: '104'
	},
	{
		value: '1095',
		name: '安达市',
		parent: '104'
	},
	{
		value: '381',
		name: '蠡县',
		parent: '29'
	},
	{
		value: '383',
		name: '双桥区',
		parent: '30'
	},
	{
		value: '384',
		name: '双滦区',
		parent: '30'
	},
	{
		value: '385',
		name: '鹰手营子矿区',
		parent: '30'
	},
	{
		value: '386',
		name: '承德县',
		parent: '30'
	},
	{
		value: '387',
		name: '兴隆县',
		parent: '30'
	},
	{
		value: '388',
		name: '平泉县',
		parent: '30'
	},
	{
		value: '389',
		name: '滦平县',
		parent: '30'
	},
	{
		value: '390',
		name: '隆化县',
		parent: '30'
	},
	{
		value: '391',
		name: '丰宁满族自治县',
		parent: '30'
	},
	{
		value: '392',
		name: '宽城满族自治县',
		parent: '30'
	},
	{
		value: '393',
		name: '围场满族蒙古族自治县',
		parent: '30'
	},
	{
		value: '395',
		name: '路北区',
		parent: '31'
	},
	{
		value: '396',
		name: '路南区',
		parent: '31'
	},
	{
		value: '397',
		name: '古冶区',
		parent: '31'
	},
	{
		value: '398',
		name: '开平区',
		parent: '31'
	},
	{
		value: '399',
		name: '丰润区',
		parent: '31'
	},
	{
		value: '2828',
		name: '遵义县',
		parent: '296'
	},
	{
		value: '2829',
		name: '桐梓县',
		parent: '296'
	},
	{
		value: '2830',
		name: '绥阳县',
		parent: '296'
	},
	{
		value: '2831',
		name: '正安县',
		parent: '296'
	},
	{
		value: '2832',
		name: '凤冈县',
		parent: '296'
	},
	{
		value: '2833',
		name: '湄潭县',
		parent: '296'
	},
	{
		value: '2834',
		name: '余庆县',
		parent: '296'
	},
	{
		value: '2835',
		name: '习水县',
		parent: '296'
	},
	{
		value: '2836',
		name: '道真仡佬族苗族自治县',
		parent: '296'
	},
	{
		value: '2724',
		name: '龙门镇',
		parent: '284'
	},
	{
		value: '2725',
		name: '龙河镇',
		parent: '284'
	},
	{
		value: '2726',
		name: '岭口镇',
		parent: '284'
	},
	{
		value: '2727',
		name: '翰林镇',
		parent: '284'
	},
	{
		value: '2728',
		name: '富文镇',
		parent: '284'
	},
	{
		value: '2730',
		name: '屯城镇',
		parent: '285'
	},
	{
		value: '2731',
		name: '其它区',
		parent: '285'
	},
	{
		value: '2732',
		name: '枫木镇',
		parent: '285'
	},
	{
		value: '2733',
		name: '乌坡镇',
		parent: '285'
	},
	{
		value: '2734',
		name: '南吕镇',
		parent: '285'
	},
	{
		value: '2735',
		name: '南坤镇',
		parent: '285'
	},
	{
		value: '2736',
		name: '坡心镇',
		parent: '285'
	},
	{
		value: '2737',
		name: '西昌镇',
		parent: '285'
	},
	{
		value: '2739',
		name: '石碌镇',
		parent: '286'
	},
	{
		value: '2740',
		name: '叉河镇',
		parent: '286'
	},
	{
		value: '2741',
		name: '十月田镇',
		parent: '286'
	},
	{
		value: '2742',
		name: '其它区',
		parent: '286'
	},
	{
		value: '2743',
		name: '昌化镇',
		parent: '286'
	},
	{
		value: '2744',
		name: '海尾镇',
		parent: '286'
	},
	{
		value: '2745',
		name: '七叉镇',
		parent: '286'
	},
	{
		value: '2746',
		name: '白沙黎族自治县',
		parent: '287'
	},
	{
		value: '2747',
		name: '牙叉镇',
		parent: '287'
	},
	{
		value: '2748',
		name: '七坊镇',
		parent: '287'
	},
	{
		value: '2749',
		name: '邦溪镇',
		parent: '287'
	},
	{
		value: '2750',
		name: '打安镇',
		parent: '287'
	},
	{
		value: '2751',
		name: '细水乡',
		parent: '287'
	},
	{
		value: '2752',
		name: '其它区',
		parent: '287'
	},
	{
		value: '2753',
		name: '南开乡',
		parent: '287'
	},
	{
		value: '2754',
		name: '阜龙乡',
		parent: '287'
	},
	{
		value: '2755',
		name: '青松乡',
		parent: '287'
	},
	{
		value: '2756',
		name: '金波乡',
		parent: '287'
	},
	{
		value: '2757',
		name: '荣邦乡',
		parent: '287'
	},
	{
		value: '2759',
		name: '营根镇',
		parent: '288'
	},
	{
		value: '2760',
		name: '湾岭镇',
		parent: '288'
	},
	{
		value: '2761',
		name: '黎母山镇',
		parent: '288'
	},
	{
		value: '2762',
		name: '和平镇',
		parent: '288'
	},
	{
		value: '2763',
		name: '长征镇',
		parent: '288'
	},
	{
		value: '2764',
		name: '红毛镇',
		parent: '288'
	},
	{
		value: '2765',
		name: '其它区',
		parent: '288'
	},
	{
		value: '2766',
		name: '吊罗山乡',
		parent: '288'
	},
	{
		value: '2767',
		name: '上安乡',
		parent: '288'
	},
	{
		value: '2768',
		name: '什运乡',
		parent: '288'
	},
	{
		value: '2770',
		name: '椰林镇',
		parent: '289'
	},
	{
		value: '2771',
		name: '光坡镇',
		parent: '289'
	},
	{
		value: '2772',
		name: '三才镇',
		parent: '289'
	},
	{
		value: '2773',
		name: '其它区',
		parent: '289'
	},
	{
		value: '2774',
		name: '隆广镇',
		parent: '289'
	},
	{
		value: '2775',
		name: '文罗镇',
		parent: '289'
	},
	{
		value: '2776',
		name: '本号镇',
		parent: '289'
	},
	{
		value: '2777',
		name: '新村镇',
		parent: '289'
	},
	{
		value: '2778',
		name: '黎安镇',
		parent: '289'
	},
	{
		value: '2779',
		name: '提蒙乡',
		parent: '289'
	},
	{
		value: '2780',
		name: '群英乡',
		parent: '289'
	},
	{
		value: '2782',
		name: '保城镇',
		parent: '290'
	},
	{
		value: '2783',
		name: '什玲镇',
		parent: '290'
	},
	{
		value: '2784',
		name: '加茂镇',
		parent: '290'
	},
	{
		value: '2785',
		name: '响水镇',
		parent: '290'
	},
	{
		value: '2786',
		name: '其它区',
		parent: '290'
	},
	{
		value: '2787',
		name: '三道镇',
		parent: '290'
	},
	{
		value: '2788',
		name: '六弓乡',
		parent: '290'
	},
	{
		value: '2789',
		name: '南林乡',
		parent: '290'
	},
	{
		value: '2790',
		name: '毛感乡',
		parent: '290'
	},
	{
		value: '2792',
		name: '抱由镇',
		parent: '291'
	},
	{
		value: '2793',
		name: '万冲镇',
		parent: '291'
	},
	{
		value: '2794',
		name: '大安镇',
		parent: '291'
	},
	{
		value: '2795',
		name: '其它区',
		parent: '291'
	},
	{
		value: '2796',
		name: '千家镇',
		parent: '291'
	},
	{
		value: '2797',
		name: '九所镇',
		parent: '291'
	},
	{
		value: '2798',
		name: '利国镇',
		parent: '291'
	},
	{
		value: '2799',
		name: '黄流镇',
		parent: '291'
	},
	{
		value: '2800',
		name: '佛罗镇',
		parent: '291'
	},
	{
		value: '2801',
		name: '尖峰镇',
		parent: '291'
	},
	{
		value: '2802',
		name: '莺歌海镇',
		parent: '291'
	},
	{
		value: '2804',
		name: '西沙群岛',
		parent: '292'
	},
	{
		value: '2805',
		name: '南沙群岛',
		parent: '292'
	},
	{
		value: '2806',
		name: '中沙群岛的岛礁及其海域',
		parent: '292'
	},
	{
		value: '2808',
		name: '乌当区',
		parent: '294'
	},
	{
		value: '2809',
		name: '南明区',
		parent: '294'
	},
	{
		value: '2810',
		name: '云岩区',
		parent: '294'
	},
	{
		value: '2811',
		name: '花溪区',
		parent: '294'
	},
	{
		value: '2812',
		name: '白云区',
		parent: '294'
	},
	{
		value: '2813',
		name: '小河区',
		parent: '294'
	},
	{
		value: '2814',
		name: '清镇市',
		parent: '294'
	},
	{
		value: '2815',
		name: '开阳县',
		parent: '294'
	},
	{
		value: '2816',
		name: '修文县',
		parent: '294'
	},
	{
		value: '2817',
		name: '息烽县',
		parent: '294'
	},
	{
		value: '2819',
		name: '钟山区',
		parent: '295'
	},
	{
		value: '2820',
		name: '盘县',
		parent: '295'
	},
	{
		value: '2821',
		name: '水城县',
		parent: '295'
	},
	{
		value: '2822',
		name: '六枝特区',
		parent: '295'
	},
	{
		value: '2824',
		name: '红花岗区',
		parent: '296'
	},
	{
		value: '2825',
		name: '汇川区',
		parent: '296'
	},
	{
		value: '2826',
		name: '赤水市',
		parent: '296'
	},
	{
		value: '2827',
		name: '仁怀市',
		parent: '296'
	},
	{
		value: '853',
		name: '瓦房店市',
		parent: '75'
	},
	{
		value: '854',
		name: '普兰店市',
		parent: '75'
	},
	{
		value: '855',
		name: '庄河市',
		parent: '75'
	},
	{
		value: '856',
		name: '长海县',
		parent: '75'
	},
	{
		value: '858',
		name: '铁东区',
		parent: '76'
	},
	{
		value: '859',
		name: '铁西区',
		parent: '76'
	},
	{
		value: '860',
		name: '立山区',
		parent: '76'
	},
	{
		value: '861',
		name: '千山区',
		parent: '76'
	},
	{
		value: '862',
		name: '海城市',
		parent: '76'
	},
	{
		value: '863',
		name: '台安县',
		parent: '76'
	},
	{
		value: '864',
		name: '岫岩满族自治县',
		parent: '76'
	},
	{
		value: '866',
		name: '振兴区',
		parent: '77'
	},
	{
		value: '867',
		name: '元宝区',
		parent: '77'
	},
	{
		value: '868',
		name: '振安区',
		parent: '77'
	},
	{
		value: '869',
		name: '凤城市',
		parent: '77'
	},
	{
		value: '870',
		name: '东港市',
		parent: '77'
	},
	{
		value: '871',
		name: '宽甸满族自治县',
		parent: '77'
	},
	{
		value: '873',
		name: '站前区',
		parent: '78'
	},
	{
		value: '874',
		name: '西市区',
		parent: '78'
	},
	{
		value: '875',
		name: '鲅鱼圈区',
		parent: '78'
	},
	{
		value: '876',
		name: '老边区',
		parent: '78'
	},
	{
		value: '877',
		name: '大石桥市',
		parent: '78'
	},
	{
		value: '878',
		name: '盖州市',
		parent: '78'
	},
	{
		value: '880',
		name: '太和区',
		parent: '79'
	},
	{
		value: '881',
		name: '古塔区',
		parent: '79'
	},
	{
		value: '882',
		name: '凌河区',
		parent: '79'
	},
	{
		value: '883',
		name: '凌海市',
		parent: '79'
	},
	{
		value: '884',
		name: '北镇市',
		parent: '79'
	},
	{
		value: '885',
		name: '黑山县',
		parent: '79'
	},
	{
		value: '886',
		name: '义县',
		parent: '79'
	},
	{
		value: '888',
		name: '海州区',
		parent: '80'
	},
	{
		value: '889',
		name: '新邱区',
		parent: '80'
	},
	{
		value: '890',
		name: '太平区',
		parent: '80'
	},
	{
		value: '891',
		name: '清河门区',
		parent: '80'
	},
	{
		value: '892',
		name: '细河区',
		parent: '80'
	},
	{
		value: '893',
		name: '彰武县',
		parent: '80'
	},
	{
		value: '894',
		name: '阜新蒙古族自治县',
		parent: '80'
	},
	{
		value: '896',
		name: '顺城区',
		parent: '81'
	},
	{
		value: '897',
		name: '新抚区',
		parent: '81'
	},
	{
		value: '898',
		name: '东洲区',
		parent: '81'
	},
	{
		value: '899',
		name: '望花区',
		parent: '81'
	},
	{
		value: '900',
		name: '抚顺县',
		parent: '81'
	},
	{
		value: '901',
		name: '新宾满族自治县',
		parent: '81'
	},
	{
		value: '902',
		name: '清原满族自治县',
		parent: '81'
	},
	{
		value: '904',
		name: '白塔区',
		parent: '82'
	},
	{
		value: '905',
		name: '文圣区',
		parent: '82'
	},
	{
		value: '906',
		name: '宏伟区',
		parent: '82'
	},
	{
		value: '907',
		name: '弓长岭区',
		parent: '82'
	},
	{
		value: '908',
		name: '太子河区',
		parent: '82'
	},
	{
		value: '909',
		name: '灯塔市',
		parent: '82'
	},
	{
		value: '910',
		name: '辽阳县',
		parent: '82'
	},
	{
		value: '912',
		name: '平山区',
		parent: '83'
	},
	{
		value: '913',
		name: '溪湖区',
		parent: '83'
	},
	{
		value: '914',
		name: '明山区',
		parent: '83'
	},
	{
		value: '915',
		name: '南芬区',
		parent: '83'
	},
	{
		value: '916',
		name: '本溪满族自治县',
		parent: '83'
	},
	{
		value: '917',
		name: '桓仁满族自治县',
		parent: '83'
	},
	{
		value: '919',
		name: '银州区',
		parent: '84'
	},
	{
		value: '920',
		name: '清河区',
		parent: '84'
	},
	{
		value: '921',
		name: '调兵山市',
		parent: '84'
	},
	{
		value: '922',
		name: '开原市',
		parent: '84'
	},
	{
		value: '923',
		name: '铁岭县',
		parent: '84'
	},
	{
		value: '924',
		name: '西丰县',
		parent: '84'
	},
	{
		value: '925',
		name: '昌图县',
		parent: '84'
	},
	{
		value: '927',
		name: '兴隆台区',
		parent: '85'
	},
	{
		value: '928',
		name: '双台子区',
		parent: '85'
	},
	{
		value: '929',
		name: '大洼县',
		parent: '85'
	},
	{
		value: '930',
		name: '盘山县',
		parent: '85'
	},
	{
		value: '932',
		name: '双塔区',
		parent: '86'
	},
	{
		value: '933',
		name: '龙城区',
		parent: '86'
	},
	{
		value: '934',
		name: '北票市',
		parent: '86'
	},
	{
		value: '935',
		name: '凌源市',
		parent: '86'
	},
	{
		value: '936',
		name: '朝阳县',
		parent: '86'
	},
	{
		value: '937',
		name: '建平县',
		parent: '86'
	},
	{
		value: '938',
		name: '喀喇沁左翼蒙古族自治县',
		parent: '86'
	},
	{
		value: '940',
		name: '龙港区',
		parent: '87'
	},
	{
		value: '941',
		name: '连山区',
		parent: '87'
	},
	{
		value: '942',
		name: '南票区',
		parent: '87'
	},
	{
		value: '943',
		name: '兴城市',
		parent: '87'
	},
	{
		value: '944',
		name: '绥中县',
		parent: '87'
	},
	{
		value: '945',
		name: '建昌县',
		parent: '87'
	},
	{
		value: '947',
		name: '朝阳区',
		parent: '88'
	},
	{
		value: '2534',
		name: '上思县',
		parent: '263'
	},
	{
		value: '2536',
		name: '钦南区',
		parent: '264'
	},
	{
		value: '2537',
		name: '钦北区',
		parent: '264'
	},
	{
		value: '2538',
		name: '灵山县',
		parent: '264'
	},
	{
		value: '2539',
		name: '浦北县',
		parent: '264'
	},
	{
		value: '2541',
		name: '港北区',
		parent: '265'
	},
	{
		value: '2542',
		name: '港南区',
		parent: '265'
	},
	{
		value: '2543',
		name: '覃塘区',
		parent: '265'
	},
	{
		value: '2544',
		name: '桂平市',
		parent: '265'
	},
	{
		value: '2545',
		name: '平南县',
		parent: '265'
	},
	{
		value: '2547',
		name: '玉州区',
		parent: '266'
	},
	{
		value: '2548',
		name: '北流市',
		parent: '266'
	},
	{
		value: '2549',
		name: '兴业县',
		parent: '266'
	},
	{
		value: '2550',
		name: '容县',
		parent: '266'
	},
	{
		value: '2551',
		name: '陆川县',
		parent: '266'
	},
	{
		value: '2552',
		name: '博白县',
		parent: '266'
	},
	{
		value: '2554',
		name: '右江区',
		parent: '267'
	},
	{
		value: '2555',
		name: '田阳县',
		parent: '267'
	},
	{
		value: '2556',
		name: '田东县',
		parent: '267'
	},
	{
		value: '2557',
		name: '平果县',
		parent: '267'
	},
	{
		value: '2558',
		name: '德保县',
		parent: '267'
	},
	{
		value: '2559',
		name: '靖西县',
		parent: '267'
	},
	{
		value: '2560',
		name: '那坡县',
		parent: '267'
	},
	{
		value: '2561',
		name: '凌云县',
		parent: '267'
	},
	{
		value: '2562',
		name: '乐业县',
		parent: '267'
	},
	{
		value: '2563',
		name: '西林县',
		parent: '267'
	},
	{
		value: '2564',
		name: '田林县',
		parent: '267'
	},
	{
		value: '2565',
		name: '隆林各族自治县',
		parent: '267'
	},
	{
		value: '2567',
		name: '八步区',
		parent: '268'
	},
	{
		value: '2568',
		name: '昭平县',
		parent: '268'
	},
	{
		value: '2569',
		name: '钟山县',
		parent: '268'
	},
	{
		value: '2570',
		name: '富川瑶族自治县',
		parent: '268'
	},
	{
		value: '2572',
		name: '金城江区',
		parent: '269'
	},
	{
		value: '2329',
		name: '新会区',
		parent: '243'
	},
	{
		value: '2573',
		name: '宜州市',
		parent: '269'
	},
	{
		value: '2574',
		name: '南丹县',
		parent: '269'
	},
	{
		value: '2575',
		name: '天峨县',
		parent: '269'
	},
	{
		value: '2576',
		name: '凤山县',
		parent: '269'
	},
	{
		value: '2577',
		name: '东兰县',
		parent: '269'
	},
	{
		value: '2578',
		name: '巴马瑶族自治县',
		parent: '269'
	},
	{
		value: '2579',
		name: '都安瑶族自治县',
		parent: '269'
	},
	{
		value: '2580',
		name: '大化瑶族自治县',
		parent: '269'
	},
	{
		value: '2581',
		name: '罗城仫佬族自治县',
		parent: '269'
	},
	{
		value: '2582',
		name: '环江毛南族自治县',
		parent: '269'
	},
	{
		value: '2584',
		name: '兴宾区',
		parent: '270'
	},
	{
		value: '2585',
		name: '合山市',
		parent: '270'
	},
	{
		value: '2586',
		name: '象州县',
		parent: '270'
	},
	{
		value: '2587',
		name: '武宣县',
		parent: '270'
	},
	{
		value: '2588',
		name: '忻城县',
		parent: '270'
	},
	{
		value: '2589',
		name: '金秀瑶族自治县',
		parent: '270'
	},
	{
		value: '2591',
		name: '江州区',
		parent: '271'
	},
	{
		value: '2592',
		name: '凭祥市',
		parent: '271'
	},
	{
		value: '2593',
		name: '扶绥县',
		parent: '271'
	},
	{
		value: '2594',
		name: '大新县',
		parent: '271'
	},
	{
		value: '2595',
		name: '天等县',
		parent: '271'
	},
	{
		value: '2596',
		name: '宁明县',
		parent: '271'
	},
	{
		value: '2597',
		name: '龙州县',
		parent: '271'
	},
	{
		value: '2598',
		name: '酲州市',
		parent: '272'
	},
	{
		value: '2599',
		name: '冯祥市',
		parent: '273'
	},
	{
		value: '2601',
		name: '龙华区',
		parent: '274'
	},
	{
		value: '2602',
		name: '秀英区',
		parent: '274'
	},
	{
		value: '2603',
		name: '琼山区',
		parent: '274'
	},
	{
		value: '2604',
		name: '美兰区',
		parent: '274'
	},
	{
		value: '2606',
		name: '河西区',
		parent: '275'
	},
	{
		value: '2607',
		name: '河东区',
		parent: '275'
	},
	{
		value: '2608',
		name: '海棠湾镇',
		parent: '275'
	},
	{
		value: '2609',
		name: '田独镇',
		parent: '275'
	},
	{
		value: '2610',
		name: '凤凰镇',
		parent: '275'
	},
	{
		value: '2611',
		name: '崖城镇',
		parent: '275'
	},
	{
		value: '2612',
		name: '天涯镇',
		parent: '275'
	},
	{
		value: '2613',
		name: '育才镇',
		parent: '-725'
	},
	{
		value: '2615',
		name: '文城镇',
		parent: '276'
	},
	{
		value: '2616',
		name: '重兴镇',
		parent: '276'
	},
	{
		value: '2617',
		name: '蓬莱镇',
		parent: '276'
	},
	{
		value: '2618',
		name: '会文镇',
		parent: '276'
	},
	{
		value: '2619',
		name: '东路镇',
		parent: '276'
	},
	{
		value: '2620',
		name: '潭牛镇',
		parent: '276'
	},
	{
		value: '2621',
		name: '东阁镇',
		parent: '276'
	},
	{
		value: '2622',
		name: '文教镇',
		parent: '276'
	},
	{
		value: '2623',
		name: '东郊镇',
		parent: '276'
	},
	{
		value: '2624',
		name: '龙楼镇',
		parent: '276'
	},
	{
		value: '2625',
		name: '昌洒镇',
		parent: '276'
	},
	{
		value: '2626',
		name: '翁田镇',
		parent: '276'
	},
	{
		value: '2627',
		name: '抱罗镇',
		parent: '276'
	},
	{
		value: '2628',
		name: '冯坡镇',
		parent: '276'
	},
	{
		value: '2629',
		name: '锦山镇',
		parent: '276'
	},
	{
		value: '2630',
		name: '其它区',
		parent: '276'
	},
	{
		value: '2632',
		name: '嘉积镇',
		parent: '277'
	},
	{
		value: '2633',
		name: '万泉镇',
		parent: '277'
	},
	{
		value: '2634',
		name: '石壁镇',
		parent: '277'
	},
	{
		value: '2635',
		name: '其它区',
		parent: '277'
	},
	{
		value: '2636',
		name: '博鳌镇',
		parent: '277'
	},
	{
		value: '2637',
		name: '阳江镇',
		parent: '277'
	},
	{
		value: '2638',
		name: '龙江镇',
		parent: '277'
	},
	{
		value: '2639',
		name: '潭门镇',
		parent: '277'
	},
	{
		value: '2640',
		name: '塔洋镇',
		parent: '277'
	},
	{
		value: '2641',
		name: '长坡镇',
		parent: '277'
	},
	{
		value: '2642',
		name: '大路镇',
		parent: '277'
	},
	{
		value: '2643',
		name: '会山镇',
		parent: '277'
	},
	{
		value: '2645',
		name: '万城镇',
		parent: '278'
	},
	{
		value: '2646',
		name: '龙滚镇',
		parent: '278'
	},
	{
		value: '2647',
		name: '和乐镇',
		parent: '278'
	},
	{
		value: '2648',
		name: '后安镇',
		parent: '278'
	},
	{
		value: '2649',
		name: '大茂镇',
		parent: '278'
	},
	{
		value: '2650',
		name: '东澳镇',
		parent: '278'
	},
	{
		value: '2651',
		name: '礼纪镇',
		parent: '278'
	},
	{
		value: '2652',
		name: '长丰镇',
		parent: '278'
	},
	{
		value: '2653',
		name: '山根镇',
		parent: '278'
	},
	{
		value: '2654',
		name: '北大镇',
		parent: '278'
	},
	{
		value: '2655',
		name: '南桥镇',
		parent: '278'
	},
	{
		value: '2656',
		name: '其它区',
		parent: '278'
	},
	{
		value: '2658',
		name: '冲山镇',
		parent: '279'
	},
	{
		value: '2659',
		name: '南圣镇',
		parent: '279'
	},
	{
		value: '2660',
		name: '毛阳镇',
		parent: '279'
	},
	{
		value: '2661',
		name: '番阳镇',
		parent: '279'
	},
	{
		value: '2662',
		name: '畅好乡',
		parent: '279'
	},
	{
		value: '2663',
		name: '毛道乡',
		parent: '279'
	},
	{
		value: '2664',
		name: '其它区',
		parent: '279'
	},
	{
		value: '2666',
		name: '八所镇',
		parent: '280'
	},
	{
		value: '2667',
		name: '东河镇',
		parent: '280'
	},
	{
		value: '2668',
		name: '大田镇',
		parent: '280'
	},
	{
		value: '2669',
		name: '感城镇',
		parent: '280'
	},
	{
		value: '2670',
		name: '板桥镇',
		parent: '280'
	},
	{
		value: '2671',
		name: '三家镇',
		parent: '280'
	},
	{
		value: '2672',
		name: '四更镇',
		parent: '280'
	},
	{
		value: '2673',
		name: '其它区',
		parent: '280'
	},
	{
		value: '2674',
		name: '天安乡',
		parent: '280'
	},
	{
		value: '2675',
		name: '江边乡',
		parent: '280'
	},
	{
		value: '2677',
		name: '那大镇',
		parent: '281'
	},
	{
		value: '2678',
		name: '和庆镇',
		parent: '281'
	},
	{
		value: '2679',
		name: '南丰镇',
		parent: '281'
	},
	{
		value: '2680',
		name: '大成镇',
		parent: '281'
	},
	{
		value: '2681',
		name: '雅星镇',
		parent: '281'
	},
	{
		value: '2682',
		name: '兰洋镇',
		parent: '281'
	},
	{
		value: '2683',
		name: '光村镇',
		parent: '281'
	},
	{
		value: '2684',
		name: '木棠镇',
		parent: '281'
	},
	{
		value: '2685',
		name: '海头镇',
		parent: '281'
	},
	{
		value: '2686',
		name: '峨蔓镇',
		parent: '281'
	},
	{
		value: '2687',
		name: '三都镇',
		parent: '281'
	},
	{
		value: '2688',
		name: '王五镇',
		parent: '281'
	},
	{
		value: '2689',
		name: '白马井镇',
		parent: '281'
	},
	{
		value: '2690',
		name: '其它区',
		parent: '281'
	},
	{
		value: '2691',
		name: '排浦镇',
		parent: '281'
	},
	{
		value: '2692',
		name: '东成镇',
		parent: '281'
	},
	{
		value: '2693',
		name: '新州镇',
		parent: '281'
	},
	{
		value: '2694',
		name: '洋浦经济开发区',
		parent: '281'
	},
	{
		value: '2696',
		name: '临城镇',
		parent: '282'
	},
	{
		value: '2697',
		name: '波莲镇',
		parent: '282'
	},
	{
		value: '2698',
		name: '东英镇',
		parent: '282'
	},
	{
		value: '2699',
		name: '博厚镇',
		parent: '282'
	},
	{
		value: '2700',
		name: '皇桐镇',
		parent: '282'
	},
	{
		value: '2701',
		name: '多文镇',
		parent: '282'
	},
	{
		value: '2702',
		name: '和舍镇',
		parent: '282'
	},
	{
		value: '2703',
		name: '南宝镇',
		parent: '282'
	},
	{
		value: '2704',
		name: '其它区',
		parent: '282'
	},
	{
		value: '2705',
		name: '调楼镇',
		parent: '282'
	},
	{
		value: '2706',
		name: '加来镇',
		parent: '282'
	},
	{
		value: '2708',
		name: '金江镇',
		parent: '283'
	},
	{
		value: '2709',
		name: '老城镇',
		parent: '283'
	},
	{
		value: '2710',
		name: '瑞溪镇',
		parent: '283'
	},
	{
		value: '2711',
		name: '永发镇',
		parent: '283'
	},
	{
		value: '2712',
		name: '加乐镇',
		parent: '283'
	},
	{
		value: '2713',
		name: '文儒镇',
		parent: '283'
	},
	{
		value: '2714',
		name: '其它区',
		parent: '283'
	},
	{
		value: '2715',
		name: '仁兴镇',
		parent: '283'
	},
	{
		value: '2716',
		name: '福山镇',
		parent: '283'
	},
	{
		value: '2717',
		name: '桥头镇',
		parent: '283'
	},
	{
		value: '2719',
		name: '定城镇',
		parent: '284'
	},
	{
		value: '2720',
		name: '其它区',
		parent: '284'
	},
	{
		value: '2721',
		name: '龙湖镇',
		parent: '284'
	},
	{
		value: '2722',
		name: '黄竹镇',
		parent: '284'
	},
	{
		value: '2723',
		name: '雷鸣镇',
		parent: '284'
	},
	{
		value: '2481',
		name: '邕宁区',
		parent: '258'
	},
	{
		value: '2482',
		name: '武鸣县',
		parent: '258'
	},
	{
		value: '2483',
		name: '横县',
		parent: '258'
	},
	{
		value: '2484',
		name: '宾阳县',
		parent: '258'
	},
	{
		value: '2485',
		name: '上林县',
		parent: '258'
	},
	{
		value: '2486',
		name: '隆安县',
		parent: '258'
	},
	{
		value: '2487',
		name: '马山县',
		parent: '258'
	},
	{
		value: '2489',
		name: '城中区',
		parent: '259'
	},
	{
		value: '2490',
		name: '鱼峰区',
		parent: '259'
	},
	{
		value: '2491',
		name: '柳南区',
		parent: '259'
	},
	{
		value: '2492',
		name: '柳北区',
		parent: '259'
	},
	{
		value: '2493',
		name: '柳江县',
		parent: '259'
	},
	{
		value: '2494',
		name: '柳城县',
		parent: '259'
	},
	{
		value: '2495',
		name: '鹿寨县',
		parent: '259'
	},
	{
		value: '2496',
		name: '融安县',
		parent: '259'
	},
	{
		value: '2497',
		name: '三江侗族自治县',
		parent: '259'
	},
	{
		value: '2498',
		name: '融水苗族自治县',
		parent: '259'
	},
	{
		value: '2500',
		name: '象山区',
		parent: '260'
	},
	{
		value: '2501',
		name: '叠彩区',
		parent: '260'
	},
	{
		value: '2502',
		name: '秀峰区',
		parent: '260'
	},
	{
		value: '2503',
		name: '七星区',
		parent: '260'
	},
	{
		value: '2504',
		name: '雁山区',
		parent: '260'
	},
	{
		value: '2505',
		name: '阳朔县',
		parent: '260'
	},
	{
		value: '2506',
		name: '临桂县',
		parent: '260'
	},
	{
		value: '2507',
		name: '灵川县',
		parent: '260'
	},
	{
		value: '2508',
		name: '全州县',
		parent: '260'
	},
	{
		value: '2509',
		name: '兴安县',
		parent: '260'
	},
	{
		value: '2510',
		name: '永福县',
		parent: '260'
	},
	{
		value: '2511',
		name: '灌阳县',
		parent: '260'
	},
	{
		value: '2512',
		name: '资源县',
		parent: '260'
	},
	{
		value: '2513',
		name: '平乐县',
		parent: '260'
	},
	{
		value: '2514',
		name: '荔浦县',
		parent: '260'
	},
	{
		value: '2515',
		name: '龙胜各族自治县',
		parent: '260'
	},
	{
		value: '2516',
		name: '恭城瑶族自治县',
		parent: '260'
	},
	{
		value: '2518',
		name: '万秀区',
		parent: '261'
	},
	{
		value: '2519',
		name: '蝶山区',
		parent: '261'
	},
	{
		value: '2520',
		name: '长洲区',
		parent: '261'
	},
	{
		value: '2521',
		name: '岑溪市',
		parent: '261'
	},
	{
		value: '2522',
		name: '苍梧县',
		parent: '261'
	},
	{
		value: '2523',
		name: '藤县',
		parent: '261'
	},
	{
		value: '2524',
		name: '蒙山县',
		parent: '261'
	},
	{
		value: '2526',
		name: '海城区',
		parent: '262'
	},
	{
		value: '2527',
		name: '银海区',
		parent: '262'
	},
	{
		value: '2528',
		name: '铁山港区',
		parent: '262'
	},
	{
		value: '2529',
		name: '合浦县',
		parent: '262'
	},
	{
		value: '2531',
		name: '港口区',
		parent: '263'
	},
	{
		value: '2532',
		name: '防城区',
		parent: '263'
	},
	{
		value: '2533',
		name: '东兴市',
		parent: '263'
	},
	{
		value: '2460',
		name: '湘桥区',
		parent: '255'
	},
	{
		value: '2461',
		name: '潮安县',
		parent: '255'
	},
	{
		value: '2462',
		name: '饶平县',
		parent: '255'
	},
	{
		value: '2464',
		name: '榕城区',
		parent: '256'
	},
	{
		value: '2465',
		name: '普宁市',
		parent: '256'
	},
	{
		value: '2466',
		name: '揭东县',
		parent: '256'
	},
	{
		value: '2467',
		name: '揭西县',
		parent: '256'
	},
	{
		value: '2468',
		name: '惠来县',
		parent: '256'
	},
	{
		value: '2470',
		name: '云城区',
		parent: '257'
	},
	{
		value: '2471',
		name: '罗定市',
		parent: '257'
	},
	{
		value: '2472',
		name: '云安县',
		parent: '257'
	},
	{
		value: '2473',
		name: '新兴县',
		parent: '257'
	},
	{
		value: '2474',
		name: '郁南县',
		parent: '257'
	},
	{
		value: '2476',
		name: '青秀区',
		parent: '258'
	},
	{
		value: '2477',
		name: '兴宁区',
		parent: '258'
	},
	{
		value: '2478',
		name: '江南区',
		parent: '258'
	},
	{
		value: '2479',
		name: '西乡塘区',
		parent: '258'
	},
	{
		value: '2480',
		name: '良庆区',
		parent: '258'
	},
	{
		value: '784',
		name: '新巴尔虎左旗',
		parent: '68'
	},
	{
		value: '785',
		name: '陈巴尔虎旗',
		parent: '68'
	},
	{
		value: '786',
		name: '鄂伦春自治旗',
		parent: '68'
	},
	{
		value: '787',
		name: '鄂温克族自治旗',
		parent: '68'
	},
	{
		value: '788',
		name: '莫力达瓦达斡尔族自治旗',
		parent: '68'
	},
	{
		value: '790',
		name: '临河区',
		parent: '69'
	},
	{
		value: '791',
		name: '五原县',
		parent: '69'
	},
	{
		value: '792',
		name: '磴口县',
		parent: '69'
	},
	{
		value: '793',
		name: '乌拉特前旗',
		parent: '69'
	},
	{
		value: '794',
		name: '乌拉特中旗',
		parent: '69'
	},
	{
		value: '795',
		name: '乌拉特后旗',
		parent: '69'
	},
	{
		value: '796',
		name: '杭锦后旗',
		parent: '69'
	},
	{
		value: '798',
		name: '集宁区',
		parent: '70'
	},
	{
		value: '799',
		name: '丰镇市',
		parent: '70'
	},
	{
		value: '800',
		name: '卓资县',
		parent: '70'
	},
	{
		value: '801',
		name: '化德县',
		parent: '70'
	},
	{
		value: '802',
		name: '商都县',
		parent: '70'
	},
	{
		value: '803',
		name: '兴和县',
		parent: '70'
	},
	{
		value: '804',
		name: '凉城县',
		parent: '70'
	},
	{
		value: '805',
		name: '察哈尔右翼前旗',
		parent: '70'
	},
	{
		value: '806',
		name: '察哈尔右翼中旗',
		parent: '70'
	},
	{
		value: '807',
		name: '察哈尔右翼后旗',
		parent: '70'
	},
	{
		value: '808',
		name: '四子王旗',
		parent: '70'
	},
	{
		value: '810',
		name: '乌兰浩特市',
		parent: '71'
	},
	{
		value: '811',
		name: '阿尔山市',
		parent: '71'
	},
	{
		value: '812',
		name: '突泉县',
		parent: '71'
	},
	{
		value: '813',
		name: '科尔沁右翼前旗',
		parent: '71'
	},
	{
		value: '814',
		name: '科尔沁右翼中旗',
		parent: '71'
	},
	{
		value: '815',
		name: '扎赉特旗',
		parent: '71'
	},
	{
		value: '817',
		name: '锡林浩特市',
		parent: '72'
	},
	{
		value: '818',
		name: '二连浩特市',
		parent: '72'
	},
	{
		value: '819',
		name: '多伦县',
		parent: '72'
	},
	{
		value: '820',
		name: '阿巴嘎旗',
		parent: '72'
	},
	{
		value: '821',
		name: '苏尼特左旗',
		parent: '72'
	},
	{
		value: '822',
		name: '苏尼特右旗',
		parent: '72'
	},
	{
		value: '823',
		name: '东乌珠穆沁旗',
		parent: '72'
	},
	{
		value: '824',
		name: '西乌珠穆沁旗',
		parent: '72'
	},
	{
		value: '825',
		name: '太仆寺旗',
		parent: '72'
	},
	{
		value: '826',
		name: '镶黄旗',
		parent: '72'
	},
	{
		value: '827',
		name: '正镶白旗',
		parent: '72'
	},
	{
		value: '828',
		name: '正蓝旗',
		parent: '72'
	},
	{
		value: '830',
		name: '阿拉善左旗',
		parent: '73'
	},
	{
		value: '831',
		name: '阿拉善右旗',
		parent: '73'
	},
	{
		value: '832',
		name: '额济纳旗',
		parent: '73'
	},
	{
		value: '834',
		name: '和平区',
		parent: '74'
	},
	{
		value: '835',
		name: '皇姑区',
		parent: '74'
	},
	{
		value: '836',
		name: '沈河区',
		parent: '74'
	},
	{
		value: '837',
		name: '铁西区',
		parent: '74'
	},
	{
		value: '838',
		name: '大东区',
		parent: '74'
	},
	{
		value: '839',
		name: '苏家屯区',
		parent: '74'
	},
	{
		value: '840',
		name: '东陵区',
		parent: '74'
	},
	{
		value: '841',
		name: '沈北新区',
		parent: '74'
	},
	{
		value: '842',
		name: '于洪区',
		parent: '74'
	},
	{
		value: '843',
		name: '新民市',
		parent: '74'
	},
	{
		value: '844',
		name: '辽中县',
		parent: '74'
	},
	{
		value: '845',
		name: '康平县',
		parent: '74'
	},
	{
		value: '846',
		name: '法库县',
		parent: '74'
	},
	{
		value: '847',
		name: '西岗区',
		parent: '75'
	},
	{
		value: '848',
		name: '中山区',
		parent: '75'
	},
	{
		value: '849',
		name: '沙河口区',
		parent: '75'
	},
	{
		value: '850',
		name: '甘井子区',
		parent: '75'
	},
	{
		value: '851',
		name: '旅顺口区',
		parent: '75'
	},
	{
		value: '634',
		name: '嵊州市',
		parent: '55'
	},
	{
		value: '635',
		name: '绍兴县',
		parent: '55'
	},
	{
		value: '636',
		name: '新昌县',
		parent: '55'
	},
	{
		value: '2330',
		name: '恩平市',
		parent: '243'
	},
	{
		value: '2331',
		name: '台山市',
		parent: '243'
	},
	{
		value: '2332',
		name: '开平市',
		parent: '243'
	},
	{
		value: '2333',
		name: '鹤山市',
		parent: '243'
	},
	{
		value: '2335',
		name: '赤坎区',
		parent: '244'
	},
	{
		value: '2336',
		name: '霞山区',
		parent: '244'
	},
	{
		value: '2337',
		name: '坡头区',
		parent: '244'
	},
	{
		value: '2338',
		name: '麻章区',
		parent: '244'
	},
	{
		value: '2339',
		name: '吴川市',
		parent: '244'
	},
	{
		value: '2340',
		name: '廉江市',
		parent: '244'
	},
	{
		value: '2341',
		name: '雷州市',
		parent: '244'
	},
	{
		value: '2342',
		name: '遂溪县',
		parent: '244'
	},
	{
		value: '2343',
		name: '徐闻县',
		parent: '244'
	},
	{
		value: '2345',
		name: '茂南区',
		parent: '245'
	},
	{
		value: '2346',
		name: '茂港区',
		parent: '245'
	},
	{
		value: '2347',
		name: '化州市',
		parent: '245'
	},
	{
		value: '2348',
		name: '信宜市',
		parent: '245'
	},
	{
		value: '2349',
		name: '高州市',
		parent: '245'
	},
	{
		value: '2350',
		name: '电白县',
		parent: '245'
	},
	{
		value: '2352',
		name: '端州区',
		parent: '246'
	},
	{
		value: '2353',
		name: '鼎湖区',
		parent: '246'
	},
	{
		value: '2354',
		name: '高要市',
		parent: '246'
	},
	{
		value: '2355',
		name: '四会市',
		parent: '246'
	},
	{
		value: '2356',
		name: '广宁县',
		parent: '246'
	},
	{
		value: '2357',
		name: '怀集县',
		parent: '246'
	},
	{
		value: '2358',
		name: '封开县',
		parent: '246'
	},
	{
		value: '2359',
		name: '德庆县',
		parent: '246'
	},
	{
		value: '2361',
		name: '惠城区',
		parent: '247'
	},
	{
		value: '2362',
		name: '惠阳区',
		parent: '247'
	},
	{
		value: '2363',
		name: '博罗县',
		parent: '247'
	},
	{
		value: '2364',
		name: '惠东县',
		parent: '247'
	},
	{
		value: '2365',
		name: '龙门县',
		parent: '247'
	},
	{
		value: '2367',
		name: '梅江区',
		parent: '248'
	},
	{
		value: '2368',
		name: '兴宁市',
		parent: '248'
	},
	{
		value: '2369',
		name: '梅县',
		parent: '248'
	},
	{
		value: '2370',
		name: '大埔县',
		parent: '248'
	},
	{
		value: '2371',
		name: '丰顺县',
		parent: '248'
	},
	{
		value: '2372',
		name: '五华县',
		parent: '248'
	},
	{
		value: '2373',
		name: '平远县',
		parent: '248'
	},
	{
		value: '2374',
		name: '蕉岭县',
		parent: '248'
	},
	{
		value: '2376',
		name: '城区',
		parent: '249'
	},
	{
		value: '2377',
		name: '陆丰市',
		parent: '249'
	},
	{
		value: '2378',
		name: '海丰县',
		parent: '249'
	},
	{
		value: '2379',
		name: '陆河县',
		parent: '249'
	},
	{
		value: '2381',
		name: '源城区',
		parent: '250'
	},
	{
		value: '2382',
		name: '紫金县',
		parent: '250'
	},
	{
		value: '2383',
		name: '龙川县',
		parent: '250'
	},
	{
		value: '2384',
		name: '连平县',
		parent: '250'
	},
	{
		value: '2385',
		name: '和平县',
		parent: '250'
	},
	{
		value: '2386',
		name: '东源县',
		parent: '250'
	},
	{
		value: '2388',
		name: '江城区',
		parent: '251'
	},
	{
		value: '2389',
		name: '阳春市',
		parent: '251'
	},
	{
		value: '2390',
		name: '阳西县',
		parent: '251'
	},
	{
		value: '2391',
		name: '阳东县',
		parent: '251'
	},
	{
		value: '2393',
		name: '清城区',
		parent: '252'
	},
	{
		value: '2394',
		name: '英德市',
		parent: '252'
	},
	{
		value: '2395',
		name: '连州市',
		parent: '252'
	},
	{
		value: '2396',
		name: '佛冈县',
		parent: '252'
	},
	{
		value: '2397',
		name: '阳山县',
		parent: '252'
	},
	{
		value: '2398',
		name: '清新县',
		parent: '252'
	},
	{
		value: '2399',
		name: '连山壮族瑶族自治县',
		parent: '252'
	},
	{
		value: '2400',
		name: '连南瑶族自治县',
		parent: '252'
	},
	{
		value: '2402',
		name: '莞城区',
		parent: '253'
	},
	{
		value: '2403',
		name: '南城区',
		parent: '253'
	},
	{
		value: '2404',
		name: '万江区',
		parent: '253'
	},
	{
		value: '2405',
		name: '东城区',
		parent: '253'
	},
	{
		value: '2406',
		name: '石碣镇',
		parent: '253'
	},
	{
		value: '2407',
		name: '石龙镇',
		parent: '253'
	},
	{
		value: '2408',
		name: '茶山镇',
		parent: '253'
	},
	{
		value: '2409',
		name: '石排镇',
		parent: '253'
	},
	{
		value: '2410',
		name: '企石镇',
		parent: '253'
	},
	{
		value: '2411',
		name: '横沥镇',
		parent: '253'
	},
	{
		value: '2412',
		name: '桥头镇',
		parent: '253'
	},
	{
		value: '2413',
		name: '谢岗镇',
		parent: '253'
	},
	{
		value: '2414',
		name: '东坑镇',
		parent: '253'
	},
	{
		value: '2415',
		name: '常平镇',
		parent: '253'
	},
	{
		value: '2416',
		name: '寮步镇',
		parent: '253'
	},
	{
		value: '2417',
		name: '大朗镇',
		parent: '253'
	},
	{
		value: '2418',
		name: '黄江镇',
		parent: '253'
	},
	{
		value: '2419',
		name: '清溪镇',
		parent: '253'
	},
	{
		value: '2420',
		name: '塘厦镇',
		parent: '253'
	},
	{
		value: '2421',
		name: '凤岗镇',
		parent: '253'
	},
	{
		value: '2422',
		name: '长安镇',
		parent: '253'
	},
	{
		value: '2423',
		name: '虎门镇',
		parent: '253'
	},
	{
		value: '2424',
		name: '厚街镇',
		parent: '253'
	},
	{
		value: '2425',
		name: '沙田镇',
		parent: '253'
	},
	{
		value: '2426',
		name: '道窖镇',
		parent: '253'
	},
	{
		value: '2427',
		name: '洪梅镇',
		parent: '253'
	},
	{
		value: '2428',
		name: '麻涌镇',
		parent: '253'
	},
	{
		value: '2429',
		name: '中堂镇',
		parent: '253'
	},
	{
		value: '2430',
		name: '高埗镇',
		parent: '253'
	},
	{
		value: '2431',
		name: '樟木头镇',
		parent: '253'
	},
	{
		value: '2432',
		name: '大岭山镇',
		parent: '253'
	},
	{
		value: '2433',
		name: '望牛墩镇',
		parent: '253'
	},
	{
		value: '2435',
		name: '石岐区',
		parent: '254'
	},
	{
		value: '2436',
		name: '东区',
		parent: '254'
	},
	{
		value: '2437',
		name: '西区',
		parent: '254'
	},
	{
		value: '2438',
		name: '南区',
		parent: '254'
	},
	{
		value: '2439',
		name: '其它区',
		parent: '254'
	},
	{
		value: '2440',
		name: '五桂山镇',
		parent: '254'
	},
	{
		value: '2441',
		name: '港口镇',
		parent: '254'
	},
	{
		value: '2442',
		name: '三角镇',
		parent: '254'
	},
	{
		value: '2443',
		name: '民众镇',
		parent: '254'
	},
	{
		value: '2444',
		name: '南朗镇',
		parent: '254'
	},
	{
		value: '2445',
		name: '三乡镇',
		parent: '254'
	},
	{
		value: '2446',
		name: '坦洲镇',
		parent: '254'
	},
	{
		value: '2447',
		name: '神湾镇',
		parent: '254'
	},
	{
		value: '2448',
		name: '板芙镇',
		parent: '254'
	},
	{
		value: '2449',
		name: '大涌镇',
		parent: '254'
	},
	{
		value: '2450',
		name: '沙溪镇',
		parent: '254'
	},
	{
		value: '2451',
		name: '横栏镇',
		parent: '254'
	},
	{
		value: '2452',
		name: '古镇镇',
		parent: '254'
	},
	{
		value: '2453',
		name: '小榄镇',
		parent: '254'
	},
	{
		value: '2454',
		name: '东凤镇',
		parent: '254'
	},
	{
		value: '2455',
		name: '南头镇',
		parent: '254'
	},
	{
		value: '2456',
		name: '阜沙镇',
		parent: '254'
	},
	{
		value: '2457',
		name: '黄圃镇',
		parent: '254'
	},
	{
		value: '2458',
		name: '东升镇',
		parent: '254'
	},
	{
		value: '598',
		name: '鄞州区',
		parent: '51'
	},
	{
		value: '599',
		name: '余姚市',
		parent: '51'
	},
	{
		value: '600',
		name: '慈溪市',
		parent: '51'
	},
	{
		value: '601',
		name: '奉化市',
		parent: '51'
	},
	{
		value: '602',
		name: '象山县',
		parent: '51'
	},
	{
		value: '603',
		name: '宁海县',
		parent: '51'
	},
	{
		value: '605',
		name: '鹿城区',
		parent: '52'
	},
	{
		value: '606',
		name: '龙湾区',
		parent: '52'
	},
	{
		value: '607',
		name: '瓯海区',
		parent: '52'
	},
	{
		value: '608',
		name: '瑞安市',
		parent: '52'
	},
	{
		value: '609',
		name: '乐清市',
		parent: '52'
	},
	{
		value: '610',
		name: '洞头县',
		parent: '52'
	},
	{
		value: '611',
		name: '永嘉县',
		parent: '52'
	},
	{
		value: '612',
		name: '平阳县',
		parent: '52'
	},
	{
		value: '613',
		name: '苍南县',
		parent: '52'
	},
	{
		value: '614',
		name: '文成县',
		parent: '52'
	},
	{
		value: '615',
		name: '泰顺县',
		parent: '52'
	},
	{
		value: '617',
		name: '南湖区',
		parent: '53'
	},
	{
		value: '618',
		name: '秀洲区',
		parent: '53'
	},
	{
		value: '619',
		name: '平湖市',
		parent: '53'
	},
	{
		value: '620',
		name: '海宁市',
		parent: '53'
	},
	{
		value: '621',
		name: '桐乡市',
		parent: '53'
	},
	{
		value: '622',
		name: '嘉善县',
		parent: '53'
	},
	{
		value: '623',
		name: '海盐县',
		parent: '53'
	},
	{
		value: '625',
		name: '吴兴区',
		parent: '54'
	},
	{
		value: '626',
		name: '南浔区',
		parent: '54'
	},
	{
		value: '627',
		name: '长兴县',
		parent: '54'
	},
	{
		value: '628',
		name: '德清县',
		parent: '54'
	},
	{
		value: '629',
		name: '安吉县',
		parent: '54'
	},
	{
		value: '631',
		name: '越城区',
		parent: '55'
	},
	{
		value: '632',
		name: '诸暨市',
		parent: '55'
	},
	{
		value: '633',
		name: '上虞市',
		parent: '55'
	},
	{
		value: '400',
		name: '丰南区',
		parent: '31'
	},
	{
		value: '401',
		name: '遵化市',
		parent: '31'
	},
	{
		value: '402',
		name: '迁安市',
		parent: '31'
	},
	{
		value: '403',
		name: '滦县',
		parent: '31'
	},
	{
		value: '404',
		name: '滦南县',
		parent: '31'
	},
	{
		value: '405',
		name: '乐亭县',
		parent: '31'
	},
	{
		value: '638',
		name: '婺城区',
		parent: '56'
	},
	{
		value: '639',
		name: '金东区',
		parent: '56'
	},
	{
		value: '640',
		name: '兰溪市',
		parent: '56'
	},
	{
		value: '641',
		name: '永康市',
		parent: '56'
	},
	{
		value: '642',
		name: '义乌市',
		parent: '56'
	},
	{
		value: '643',
		name: '东阳市',
		parent: '56'
	},
	{
		value: '644',
		name: '武义县',
		parent: '56'
	},
	{
		value: '645',
		name: '浦江县',
		parent: '56'
	},
	{
		value: '646',
		name: '磐安县',
		parent: '56'
	},
	{
		value: '648',
		name: '柯城区',
		parent: '57'
	},
	{
		value: '649',
		name: '衢江区',
		parent: '57'
	},
	{
		value: '650',
		name: '江山市',
		parent: '57'
	},
	{
		value: '651',
		name: '常山县',
		parent: '57'
	},
	{
		value: '652',
		name: '开化县',
		parent: '57'
	},
	{
		value: '653',
		name: '龙游县',
		parent: '57'
	},
	{
		value: '655',
		name: '定海区',
		parent: '58'
	},
	{
		value: '656',
		name: '普陀区',
		parent: '58'
	},
	{
		value: '657',
		name: '岱山县',
		parent: '58'
	},
	{
		value: '658',
		name: '嵊泗县',
		parent: '58'
	},
	{
		value: '660',
		name: '椒江区',
		parent: '59'
	},
	{
		value: '661',
		name: '黄岩区',
		parent: '59'
	},
	{
		value: '662',
		name: '路桥区',
		parent: '59'
	},
	{
		value: '663',
		name: '临海市',
		parent: '59'
	},
	{
		value: '664',
		name: '温岭市',
		parent: '59'
	},
	{
		value: '665',
		name: '三门县',
		parent: '59'
	},
	{
		value: '666',
		name: '天台县',
		parent: '59'
	},
	{
		value: '667',
		name: '仙居县',
		parent: '59'
	},
	{
		value: '668',
		name: '玉环县',
		parent: '59'
	},
	{
		value: '670',
		name: '莲都区',
		parent: '60'
	},
	{
		value: '671',
		name: '龙泉市',
		parent: '60'
	},
	{
		value: '672',
		name: '缙云县',
		parent: '60'
	},
	{
		value: '673',
		name: '青田县',
		parent: '60'
	},
	{
		value: '674',
		name: '云和县',
		parent: '60'
	},
	{
		value: '675',
		name: '遂昌县',
		parent: '60'
	},
	{
		value: '676',
		name: '松阳县',
		parent: '60'
	},
	{
		value: '677',
		name: '庆元县',
		parent: '60'
	},
	{
		value: '678',
		name: '景宁畲族自治县',
		parent: '60'
	},
	{
		value: '680',
		name: '渝中区',
		parent: '61'
	},
	{
		value: '681',
		name: '大渡口区',
		parent: '61'
	},
	{
		value: '682',
		name: '江北区',
		parent: '61'
	},
	{
		value: '683',
		name: '沙坪坝区',
		parent: '61'
	},
	{
		value: '684',
		name: '九龙坡区',
		parent: '61'
	},
	{
		value: '685',
		name: '南岸区',
		parent: '61'
	},
	{
		value: '686',
		name: '北碚区',
		parent: '61'
	},
	{
		value: '687',
		name: '万盛区',
		parent: '61'
	},
	{
		value: '688',
		name: '双桥区',
		parent: '61'
	},
	{
		value: '689',
		name: '渝北区',
		parent: '61'
	},
	{
		value: '690',
		name: '巴南区',
		parent: '61'
	},
	{
		value: '691',
		name: '万州区',
		parent: '61'
	},
	{
		value: '692',
		name: '涪陵区',
		parent: '61'
	},
	{
		value: '693',
		name: '黔江区',
		parent: '61'
	},
	{
		value: '694',
		name: '长寿区',
		parent: '61'
	},
	{
		value: '695',
		name: '江津区',
		parent: '61'
	},
	{
		value: '696',
		name: '合川区',
		parent: '61'
	},
	{
		value: '697',
		name: '永川区',
		parent: '61'
	},
	{
		value: '698',
		name: '南川区',
		parent: '61'
	},
	{
		value: '699',
		name: '綦江县',
		parent: '61'
	},
	{
		value: '700',
		name: '潼南县',
		parent: '61'
	},
	{
		value: '701',
		name: '铜梁县',
		parent: '61'
	},
	{
		value: '702',
		name: '大足县',
		parent: '61'
	},
	{
		value: '703',
		name: '荣昌县',
		parent: '61'
	},
	{
		value: '704',
		name: '璧山县',
		parent: '61'
	},
	{
		value: '705',
		name: '梁平县',
		parent: '61'
	},
	{
		value: '706',
		name: '城口县',
		parent: '61'
	},
	{
		value: '707',
		name: '丰都县',
		parent: '61'
	},
	{
		value: '708',
		name: '垫江县',
		parent: '61'
	},
	{
		value: '709',
		name: '武隆县',
		parent: '61'
	},
	{
		value: '710',
		name: '忠县',
		parent: '61'
	},
	{
		value: '711',
		name: '开县',
		parent: '61'
	},
	{
		value: '712',
		name: '云阳县',
		parent: '61'
	},
	{
		value: '713',
		name: '奉节县',
		parent: '61'
	},
	{
		value: '714',
		name: '巫山县',
		parent: '61'
	},
	{
		value: '715',
		name: '巫溪县',
		parent: '61'
	},
	{
		value: '716',
		name: '石柱土家族自治县',
		parent: '61'
	},
	{
		value: '717',
		name: '秀山土家族苗族自治县',
		parent: '61'
	},
	{
		value: '718',
		name: '酉阳土家族苗族自治县',
		parent: '61'
	},
	{
		value: '719',
		name: '彭水苗族土家族自治县',
		parent: '61'
	},
	{
		value: '721',
		name: '玉泉区',
		parent: '62'
	},
	{
		value: '722',
		name: '新城区',
		parent: '62'
	},
	{
		value: '723',
		name: '回民区',
		parent: '62'
	},
	{
		value: '724',
		name: '赛罕区',
		parent: '62'
	},
	{
		value: '725',
		name: '托克托县',
		parent: '62'
	},
	{
		value: '726',
		name: '武川县',
		parent: '62'
	},
	{
		value: '727',
		name: '和林格尔县',
		parent: '62'
	},
	{
		value: '728',
		name: '清水河县',
		parent: '62'
	},
	{
		value: '729',
		name: '土默特左旗',
		parent: '62'
	},
	{
		value: '731',
		name: '昆都仑区',
		parent: '63'
	},
	{
		value: '732',
		name: '东河区',
		parent: '63'
	},
	{
		value: '733',
		name: '青山区',
		parent: '63'
	},
	{
		value: '734',
		name: '石拐区',
		parent: '63'
	},
	{
		value: '735',
		name: '白云矿区',
		parent: '63'
	},
	{
		value: '736',
		name: '九原区',
		parent: '63'
	},
	{
		value: '737',
		name: '固阳县',
		parent: '63'
	},
	{
		value: '738',
		name: '土默特右旗',
		parent: '63'
	},
	{
		value: '739',
		name: '达尔罕茂明安联合旗',
		parent: '63'
	},
	{
		value: '741',
		name: '海勃湾区',
		parent: '64'
	},
	{
		value: '742',
		name: '海南区',
		parent: '64'
	},
	{
		value: '743',
		name: '乌达区',
		parent: '64'
	},
	{
		value: '745',
		name: '红山区',
		parent: '65'
	},
	{
		value: '746',
		name: '元宝山区',
		parent: '65'
	},
	{
		value: '747',
		name: '松山区',
		parent: '65'
	},
	{
		value: '748',
		name: '宁城县',
		parent: '65'
	},
	{
		value: '749',
		name: '林西县',
		parent: '65'
	},
	{
		value: '750',
		name: '阿鲁科尔沁旗',
		parent: '65'
	},
	{
		value: '751',
		name: '巴林左旗',
		parent: '65'
	},
	{
		value: '752',
		name: '巴林右旗',
		parent: '65'
	},
	{
		value: '753',
		name: '克什克腾旗',
		parent: '65'
	},
	{
		value: '754',
		name: '翁牛特旗',
		parent: '65'
	},
	{
		value: '755',
		name: '喀喇沁旗',
		parent: '65'
	},
	{
		value: '756',
		name: '敖汉旗',
		parent: '65'
	},
	{
		value: '758',
		name: '科尔沁区',
		parent: '66'
	},
	{
		value: '759',
		name: '霍林郭勒市',
		parent: '66'
	},
	{
		value: '760',
		name: '开鲁县',
		parent: '66'
	},
	{
		value: '761',
		name: '库伦旗',
		parent: '66'
	},
	{
		value: '762',
		name: '奈曼旗',
		parent: '66'
	},
	{
		value: '763',
		name: '扎鲁特旗',
		parent: '66'
	},
	{
		value: '764',
		name: '科尔沁左翼中旗',
		parent: '66'
	},
	{
		value: '765',
		name: '科尔沁左翼后旗',
		parent: '66'
	},
	{
		value: '767',
		name: '东胜区',
		parent: '67'
	},
	{
		value: '768',
		name: '达拉特旗',
		parent: '67'
	},
	{
		value: '769',
		name: '准格尔旗',
		parent: '67'
	},
	{
		value: '770',
		name: '鄂托克前旗',
		parent: '67'
	},
	{
		value: '771',
		name: '鄂托克旗',
		parent: '67'
	},
	{
		value: '772',
		name: '杭锦旗',
		parent: '67'
	},
	{
		value: '773',
		name: '乌审旗',
		parent: '67'
	},
	{
		value: '774',
		name: '伊金霍洛旗',
		parent: '67'
	},
	{
		value: '776',
		name: '海拉尔区',
		parent: '68'
	},
	{
		value: '777',
		name: '满洲里市',
		parent: '68'
	},
	{
		value: '778',
		name: '扎兰屯市',
		parent: '68'
	},
	{
		value: '779',
		name: '牙克石市',
		parent: '68'
	},
	{
		value: '780',
		name: '根河市',
		parent: '68'
	},
	{
		value: '781',
		name: '额尔古纳市',
		parent: '68'
	},
	{
		value: '782',
		name: '阿荣旗',
		parent: '68'
	},
	{
		value: '783',
		name: '新巴尔虎右旗',
		parent: '68'
	},
	{
		value: '406',
		name: '迁西县',
		parent: '31'
	},
	{
		value: '407',
		name: '玉田县',
		parent: '31'
	},
	{
		value: '408',
		name: '唐海县',
		parent: '31'
	},
	{
		value: '410',
		name: '海港区',
		parent: '32'
	},
	{
		value: '411',
		name: '山海关区',
		parent: '32'
	},
	{
		value: '412',
		name: '北戴河区',
		parent: '32'
	},
	{
		value: '413',
		name: '昌黎县',
		parent: '32'
	},
	{
		value: '414',
		name: '抚宁县',
		parent: '32'
	},
	{
		value: '415',
		name: '卢龙县',
		parent: '32'
	},
	{
		value: '416',
		name: '青龙满族自治县',
		parent: '32'
	},
	{
		value: '418',
		name: '运河区',
		parent: '33'
	},
	{
		value: '419',
		name: '新华区',
		parent: '33'
	},
	{
		value: '420',
		name: '泊头市',
		parent: '33'
	},
	{
		value: '421',
		name: '任丘市',
		parent: '33'
	},
	{
		value: '422',
		name: '黄骅市',
		parent: '33'
	},
	{
		value: '423',
		name: '河间市',
		parent: '33'
	},
	{
		value: '424',
		name: '沧县',
		parent: '33'
	},
	{
		value: '425',
		name: '青县',
		parent: '33'
	},
	{
		value: '426',
		name: '东光县',
		parent: '33'
	},
	{
		value: '427',
		name: '海兴县',
		parent: '33'
	},
	{
		value: '428',
		name: '盐山县',
		parent: '33'
	},
	{
		value: '429',
		name: '肃宁县',
		parent: '33'
	},
	{
		value: '430',
		name: '南皮县',
		parent: '33'
	},
	{
		value: '431',
		name: '吴桥县',
		parent: '33'
	},
	{
		value: '432',
		name: '献县',
		parent: '33'
	},
	{
		value: '433',
		name: '孟村回族自治县',
		parent: '33'
	},
	{
		value: '435',
		name: '桃城区',
		parent: '34'
	},
	{
		value: '436',
		name: '冀州市',
		parent: '34'
	},
	{
		value: '437',
		name: '深州市',
		parent: '34'
	},
	{
		value: '438',
		name: '枣强县',
		parent: '34'
	},
	{
		value: '439',
		name: '武邑县',
		parent: '34'
	},
	{
		value: '440',
		name: '武强县',
		parent: '34'
	},
	{
		value: '441',
		name: '饶阳县',
		parent: '34'
	},
	{
		value: '442',
		name: '安平县',
		parent: '34'
	},
	{
		value: '443',
		name: '故城县',
		parent: '34'
	},
	{
		value: '444',
		name: '景县',
		parent: '34'
	},
	{
		value: '445',
		name: '阜城县',
		parent: '34'
	},
	{
		value: '447',
		name: '安次区',
		parent: '35'
	},
	{
		value: '449',
		name: '广阳区',
		parent: '35'
	},
	{
		value: '450',
		name: '霸州市',
		parent: '35'
	},
	{
		value: '451',
		name: '三河市',
		parent: '35'
	},
	{
		value: '452',
		name: '固安县',
		parent: '35'
	},
	{
		value: '453',
		name: '永清县',
		parent: '35'
	},
	{
		value: '454',
		name: '香河县',
		parent: '35'
	},
	{
		value: '455',
		name: '大城县',
		parent: '35'
	},
	{
		value: '456',
		name: '文安县',
		parent: '35'
	},
	{
		value: '457',
		name: '大厂回族自治县',
		parent: '35'
	},
	{
		value: '460',
		name: '玄武区',
		parent: '37'
	},
	{
		value: '461',
		name: '白下区',
		parent: '37'
	},
	{
		value: '462',
		name: '秦淮区',
		parent: '37'
	},
	{
		value: '463',
		name: '建邺区',
		parent: '37'
	},
	{
		value: '464',
		name: '鼓楼区',
		parent: '37'
	},
	{
		value: '465',
		name: '下关区',
		parent: '37'
	},
	{
		value: '466',
		name: '浦口区',
		parent: '37'
	},
	{
		value: '467',
		name: '栖霞区',
		parent: '37'
	},
	{
		value: '468',
		name: '雨花台区',
		parent: '37'
	},
	{
		value: '469',
		name: '江宁区',
		parent: '37'
	},
	{
		value: '470',
		name: '六合区',
		parent: '37'
	},
	{
		value: '471',
		name: '溧水县',
		parent: '37'
	},
	{
		value: '472',
		name: '高淳县',
		parent: '37'
	},
	{
		value: '474',
		name: '崇安区',
		parent: '38'
	},
	{
		value: '475',
		name: '南长区',
		parent: '38'
	},
	{
		value: '476',
		name: '北塘区',
		parent: '38'
	},
	{
		value: '477',
		name: '锡山区',
		parent: '38'
	},
	{
		value: '478',
		name: '惠山区',
		parent: '38'
	},
	{
		value: '479',
		name: '滨湖区',
		parent: '38'
	},
	{
		value: '480',
		name: '江阴市',
		parent: '38'
	},
	{
		value: '481',
		name: '宜兴市',
		parent: '38'
	},
	{
		value: '483',
		name: '鼓楼区',
		parent: '39'
	},
	{
		value: '484',
		name: '云龙区',
		parent: '39'
	},
	{
		value: '485',
		name: '九里区',
		parent: '39'
	},
	{
		value: '486',
		name: '贾汪区',
		parent: '39'
	},
	{
		value: '487',
		name: '泉山区',
		parent: '39'
	},
	{
		value: '488',
		name: '新沂市',
		parent: '39'
	},
	{
		value: '489',
		name: '邳州市',
		parent: '39'
	},
	{
		value: '490',
		name: '丰县',
		parent: '39'
	},
	{
		value: '491',
		name: '沛县',
		parent: '39'
	},
	{
		value: '492',
		name: '铜山区',
		parent: '39'
	},
	{
		value: '493',
		name: '睢宁县',
		parent: '39'
	},
	{
		value: '495',
		name: '天宁区',
		parent: '40'
	},
	{
		value: '496',
		name: '钟楼区',
		parent: '40'
	},
	{
		value: '497',
		name: '戚墅堰区',
		parent: '40'
	},
	{
		value: '498',
		name: '新北区',
		parent: '40'
	},
	{
		value: '499',
		name: '武进区',
		parent: '40'
	},
	{
		value: '500',
		name: '金坛市',
		parent: '40'
	},
	{
		value: '501',
		name: '溧阳市',
		parent: '40'
	},
	{
		value: '503',
		name: '沧浪区',
		parent: '41'
	},
	{
		value: '504',
		name: '平江区',
		parent: '41'
	},
	{
		value: '505',
		name: '金阊区',
		parent: '41'
	},
	{
		value: '506',
		name: '虎丘区',
		parent: '41'
	},
	{
		value: '507',
		name: '吴中区',
		parent: '41'
	},
	{
		value: '508',
		name: '相城区',
		parent: '41'
	},
	{
		value: '509',
		name: '常熟市',
		parent: '41'
	},
	{
		value: '510',
		name: '张家港市',
		parent: '41'
	},
	{
		value: '511',
		name: '昆山市',
		parent: '41'
	},
	{
		value: '512',
		name: '吴江市',
		parent: '41'
	},
	{
		value: '513',
		name: '太仓市',
		parent: '41'
	},
	{
		value: '515',
		name: '崇川区',
		parent: '42'
	},
	{
		value: '516',
		name: '港闸区',
		parent: '42'
	},
	{
		value: '517',
		name: '海门市',
		parent: '42'
	},
	{
		value: '518',
		name: '启东市',
		parent: '42'
	},
	{
		value: '519',
		name: '通州市',
		parent: '42'
	},
	{
		value: '520',
		name: '如皋市',
		parent: '42'
	},
	{
		value: '521',
		name: '如东县',
		parent: '42'
	},
	{
		value: '522',
		name: '海安县',
		parent: '42'
	},
	{
		value: '524',
		name: '新浦区',
		parent: '43'
	},
	{
		value: '525',
		name: '连云区',
		parent: '43'
	},
	{
		value: '526',
		name: '海州区',
		parent: '43'
	},
	{
		value: '527',
		name: '赣榆县',
		parent: '43'
	},
	{
		value: '528',
		name: '灌云县',
		parent: '43'
	},
	{
		value: '529',
		name: '东海县',
		parent: '43'
	},
	{
		value: '530',
		name: '灌南县',
		parent: '43'
	},
	{
		value: '532',
		name: '清河区',
		parent: '44'
	},
	{
		value: '533',
		name: '清浦区',
		parent: '44'
	},
	{
		value: '534',
		name: '楚州区',
		parent: '44'
	},
	{
		value: '535',
		name: '淮阴区',
		parent: '44'
	},
	{
		value: '536',
		name: '金湖县',
		parent: '44'
	},
	{
		value: '537',
		name: '盱眙县',
		parent: '44'
	},
	{
		value: '538',
		name: '洪泽县',
		parent: '44'
	},
	{
		value: '539',
		name: '涟水县',
		parent: '44'
	},
	{
		value: '541',
		name: '亭湖区',
		parent: '45'
	},
	{
		value: '542',
		name: '盐都区',
		parent: '45'
	},
	{
		value: '543',
		name: '东台市',
		parent: '45'
	},
	{
		value: '544',
		name: '大丰市',
		parent: '45'
	},
	{
		value: '545',
		name: '射阳县',
		parent: '45'
	},
	{
		value: '546',
		name: '阜宁县',
		parent: '45'
	},
	{
		value: '547',
		name: '滨海县',
		parent: '45'
	},
	{
		value: '548',
		name: '响水县',
		parent: '45'
	},
	{
		value: '549',
		name: '建湖县',
		parent: '45'
	},
	{
		value: '551',
		name: '维扬区',
		parent: '46'
	},
	{
		value: '552',
		name: '广陵区',
		parent: '46'
	},
	{
		value: '553',
		name: '邗江区',
		parent: '46'
	},
	{
		value: '554',
		name: '仪征市',
		parent: '46'
	},
	{
		value: '555',
		name: '江都区',
		parent: '46'
	},
	{
		value: '556',
		name: '高邮市',
		parent: '46'
	},
	{
		value: '557',
		name: '宝应县',
		parent: '46'
	},
	{
		value: '559',
		name: '京口区',
		parent: '47'
	},
	{
		value: '560',
		name: '润州区',
		parent: '47'
	},
	{
		value: '561',
		name: '丹徒区',
		parent: '47'
	},
	{
		value: '562',
		name: '扬中市',
		parent: '47'
	},
	{
		value: '563',
		name: '丹阳市',
		parent: '47'
	},
	{
		value: '564',
		name: '句容市',
		parent: '47'
	},
	{
		value: '566',
		name: '海陵区',
		parent: '48'
	},
	{
		value: '567',
		name: '高港区',
		parent: '48'
	},
	{
		value: '568',
		name: '靖江市',
		parent: '48'
	},
	{
		value: '569',
		name: '泰兴市',
		parent: '48'
	},
	{
		value: '570',
		name: '姜堰市',
		parent: '48'
	},
	{
		value: '571',
		name: '兴化市',
		parent: '48'
	},
	{
		value: '573',
		name: '宿城区',
		parent: '49'
	},
	{
		value: '574',
		name: '宿豫区',
		parent: '49'
	},
	{
		value: '575',
		name: '沭阳县',
		parent: '49'
	},
	{
		value: '576',
		name: '泗阳县',
		parent: '49'
	},
	{
		value: '577',
		name: '泗洪县',
		parent: '49'
	},
	{
		value: '579',
		name: '上城区',
		parent: '50'
	},
	{
		value: '580',
		name: '江干区',
		parent: '50'
	},
	{
		value: '581',
		name: '下城区',
		parent: '50'
	},
	{
		value: '582',
		name: '西湖区',
		parent: '50'
	},
	{
		value: '583',
		name: '余杭区',
		parent: '50'
	},
	{
		value: '584',
		name: '富阳市',
		parent: '50'
	},
	{
		value: '585',
		name: '萧山区',
		parent: '50'
	},
	{
		value: '586',
		name: '拱墅区',
		parent: '50'
	},
	{
		value: '587',
		name: '滨江区',
		parent: '50'
	},
	{
		value: '588',
		name: '临安市',
		parent: '50'
	},
	{
		value: '589',
		name: '建德市',
		parent: '50'
	},
	{
		value: '590',
		name: '桐庐县',
		parent: '50'
	},
	{
		value: '591',
		name: '淳安县',
		parent: '50'
	},
	{
		value: '593',
		name: '海曙区',
		parent: '51'
	},
	{
		value: '594',
		name: '江东区',
		parent: '51'
	},
	{
		value: '595',
		name: '江北区',
		parent: '51'
	},
	{
		value: '596',
		name: '北仑区',
		parent: '51'
	},
	{
		value: '597',
		name: '镇海区',
		parent: '51'
	},
	{
		value: '53',
		name: '闸北区',
		parent: '1'
	},
	{
		value: '62',
		name: '虹口区',
		parent: '1'
	},
	{
		value: '72',
		name: '杨浦区',
		parent: '1'
	},
	{
		value: '84',
		name: '闵行区',
		parent: '1'
	},
	{
		value: '97',
		name: '宝山区',
		parent: '1'
	},
	{
		value: '115',
		name: '嘉定区',
		parent: '1'
	},
	{
		value: '128',
		name: '浦东新区',
		parent: '1'
	},
	{
		value: '151',
		name: '金山区',
		parent: '1'
	},
	{
		value: '168',
		name: '松江区',
		parent: '1'
	},
	{
		value: '187',
		name: '青浦区',
		parent: '1'
	},
	{
		value: '199',
		name: '南汇区',
		parent: '1'
	},
	{
		value: '218',
		name: '奉贤区',
		parent: '1'
	},
	{
		value: '230',
		name: '崇明县',
		parent: '1'
	},
	{
		value: '234',
		name: '北京',
		parent: '21'
	},
	{
		value: '235',
		name: '东城区',
		parent: '21'
	},
	{
		value: '236',
		name: '西城区',
		parent: '21'
	},
	{
		value: '237',
		name: '崇文区',
		parent: '21'
	},
	{
		value: '238',
		name: '宣武区',
		parent: '21'
	},
	{
		value: '239',
		name: '海淀区',
		parent: '21'
	},
	{
		value: '240',
		name: '朝阳区',
		parent: '21'
	},
	{
		value: '241',
		name: '丰台区',
		parent: '21'
	},
	{
		value: '242',
		name: '门头沟区',
		parent: '21'
	},
	{
		value: '243',
		name: '石景山区',
		parent: '21'
	},
	{
		value: '245',
		name: '通州区',
		parent: '22'
	},
	{
		value: '246',
		name: '大兴区',
		parent: '22'
	},
	{
		value: '247',
		name: '昌平区',
		parent: '22'
	},
	{
		value: '248',
		name: '平觳县',
		parent: '22'
	},
	{
		value: '249',
		name: '怀柔县',
		parent: '22'
	},
	{
		value: '250',
		name: '密云县',
		parent: '22'
	},
	{
		value: '251',
		name: '延庆县',
		parent: '22'
	},
	{
		value: '252',
		name: '河东区',
		parent: '23'
	},
	{
		value: '253',
		name: '河西区',
		parent: '23'
	},
	{
		value: '254',
		name: '南开区',
		parent: '23'
	},
	{
		value: '255',
		name: '河北区',
		parent: '23'
	},
	{
		value: '256',
		name: '红桥区',
		parent: '23'
	},
	{
		value: '257',
		name: '大港区',
		parent: '23'
	},
	{
		value: '262',
		name: '塘沽区',
		parent: '23'
	},
	{
		value: '263',
		name: '汉沽区',
		parent: '23'
	},
	{
		value: '264',
		name: '西青区',
		parent: '23'
	},
	{
		value: '265',
		name: '北辰区',
		parent: '23'
	},
	{
		value: '266',
		name: '武清区',
		parent: '23'
	},
	{
		value: '267',
		name: '东丽区',
		parent: '23'
	},
	{
		value: '270',
		name: '宝坻区',
		parent: '23'
	},
	{
		value: '271',
		name: '蓟县',
		parent: '23'
	},
	{
		value: '272',
		name: '宁河县',
		parent: '23'
	},
	{
		value: '273',
		name: '汉沽',
		parent: '24'
	},
	{
		value: '274',
		name: '静海县',
		parent: '23'
	},
	{
		value: '275',
		name: '长安区',
		parent: '25'
	},
	{
		value: '276',
		name: '桥东区',
		parent: '25'
	},
	{
		value: '277',
		name: '桥西区',
		parent: '25'
	},
	{
		value: '278',
		name: '新华区',
		parent: '25'
	},
	{
		value: '279',
		name: '裕华区',
		parent: '25'
	},
	{
		value: '281',
		name: '井陉矿区',
		parent: '25'
	},
	{
		value: '282',
		name: '辛集市',
		parent: '25'
	},
	{
		value: '283',
		name: '藁城市',
		parent: '25'
	},
	{
		value: '284',
		name: '晋州市',
		parent: '25'
	},
	{
		value: '285',
		name: '新乐市',
		parent: '25'
	},
	{
		value: '286',
		name: '鹿泉市',
		parent: '25'
	},
	{
		value: '287',
		name: '井陉县',
		parent: '25'
	},
	{
		value: '288',
		name: '正定县',
		parent: '25'
	},
	{
		value: '289',
		name: '栾城县',
		parent: '25'
	},
	{
		value: '290',
		name: '行唐县',
		parent: '25'
	},
	{
		value: '291',
		name: '灵寿县',
		parent: '25'
	},
	{
		value: '292',
		name: '高邑县',
		parent: '25'
	},
	{
		value: '293',
		name: '深泽县',
		parent: '25'
	},
	{
		value: '294',
		name: '赞皇县',
		parent: '25'
	},
	{
		value: '295',
		name: '无极县',
		parent: '25'
	},
	{
		value: '296',
		name: '平山县',
		parent: '25'
	},
	{
		value: '297',
		name: '元氏县',
		parent: '25'
	},
	{
		value: '298',
		name: '赵县',
		parent: '25'
	},
	{
		value: '300',
		name: '桥东区',
		parent: '26'
	},
	{
		value: '301',
		name: '桥西区',
		parent: '26'
	},
	{
		value: '302',
		name: '南宫市',
		parent: '26'
	},
	{
		value: '303',
		name: '沙河市',
		parent: '26'
	},
	{
		value: '304',
		name: '邢台县',
		parent: '26'
	},
	{
		value: '305',
		name: '临城县',
		parent: '26'
	},
	{
		value: '306',
		name: '内丘县',
		parent: '26'
	},
	{
		value: '307',
		name: '柏乡县',
		parent: '26'
	},
	{
		value: '308',
		name: '隆尧县',
		parent: '26'
	},
	{
		value: '309',
		name: '任县',
		parent: '26'
	},
	{
		value: '310',
		name: '南和县',
		parent: '26'
	},
	{
		value: '311',
		name: '宁晋县',
		parent: '26'
	},
	{
		value: '312',
		name: '巨鹿县',
		parent: '26'
	},
	{
		value: '313',
		name: '新河县',
		parent: '26'
	},
	{
		value: '314',
		name: '广宗县',
		parent: '26'
	},
	{
		value: '315',
		name: '平乡县',
		parent: '26'
	},
	{
		value: '316',
		name: '威县',
		parent: '26'
	},
	{
		value: '317',
		name: '清河县',
		parent: '26'
	},
	{
		value: '318',
		name: '临西县',
		parent: '26'
	},
	{
		value: '320',
		name: '丛台区',
		parent: '27'
	},
	{
		value: '321',
		name: '邯山区',
		parent: '27'
	},
	{
		value: '322',
		name: '复兴区',
		parent: '27'
	},
	{
		value: '323',
		name: '峰峰矿区',
		parent: '27'
	},
	{
		value: '324',
		name: '武安市',
		parent: '27'
	},
	{
		value: '325',
		name: '邯郸县',
		parent: '27'
	},
	{
		value: '326',
		name: '临漳县',
		parent: '27'
	},
	{
		value: '327',
		name: '成安县',
		parent: '27'
	},
	{
		value: '328',
		name: '大名县',
		parent: '27'
	},
	{
		value: '329',
		name: '涉县',
		parent: '27'
	},
	{
		value: '330',
		name: '磁县',
		parent: '27'
	},
	{
		value: '331',
		name: '肥乡县',
		parent: '27'
	},
	{
		value: '332',
		name: '永年县',
		parent: '27'
	},
	{
		value: '333',
		name: '邱县',
		parent: '27'
	},
	{
		value: '334',
		name: '鸡泽县',
		parent: '27'
	},
	{
		value: '335',
		name: '广平县',
		parent: '27'
	},
	{
		value: '336',
		name: '馆陶县',
		parent: '27'
	},
	{
		value: '337',
		name: '魏县',
		parent: '27'
	},
	{
		value: '338',
		name: '曲周县',
		parent: '27'
	},
	{
		value: '340',
		name: '桥西区',
		parent: '28'
	},
	{
		value: '341',
		name: '桥东区',
		parent: '28'
	},
	{
		value: '342',
		name: '宣化区',
		parent: '28'
	},
	{
		value: '343',
		name: '下花园区',
		parent: '28'
	},
	{
		value: '344',
		name: '宣化县',
		parent: '28'
	},
	{
		value: '345',
		name: '张北县',
		parent: '28'
	},
	{
		value: '346',
		name: '康保县',
		parent: '28'
	},
	{
		value: '347',
		name: '沽源县',
		parent: '28'
	},
	{
		value: '348',
		name: '尚义县',
		parent: '28'
	},
	{
		value: '349',
		name: '蔚县',
		parent: '28'
	},
	{
		value: '350',
		name: '阳原县',
		parent: '28'
	},
	{
		value: '351',
		name: '怀安县',
		parent: '28'
	},
	{
		value: '352',
		name: '万全县',
		parent: '28'
	},
	{
		value: '353',
		name: '怀来县',
		parent: '28'
	},
	{
		value: '354',
		name: '涿鹿县',
		parent: '28'
	},
	{
		value: '355',
		name: '赤城县',
		parent: '28'
	},
	{
		value: '356',
		name: '崇礼县',
		parent: '28'
	},
	{
		value: '357',
		name: '新市区',
		parent: '29'
	},
	{
		value: '358',
		name: '北市区',
		parent: '29'
	},
	{
		value: '359',
		name: '南市区',
		parent: '29'
	},
	{
		value: '360',
		name: '定州市',
		parent: '29'
	},
	{
		value: '361',
		name: '涿州市',
		parent: '29'
	},
	{
		value: '362',
		name: '安国市',
		parent: '29'
	},
	{
		value: '363',
		name: '高碑店市',
		parent: '29'
	},
	{
		value: '364',
		name: '满城县',
		parent: '29'
	},
	{
		value: '365',
		name: '清苑县',
		parent: '29'
	},
	{
		value: '366',
		name: '易县',
		parent: '29'
	},
	{
		value: '367',
		name: '徐水县',
		parent: '29'
	},
	{
		value: '368',
		name: '涞源县',
		parent: '29'
	},
	{
		value: '369',
		name: '定兴县',
		parent: '29'
	},
	{
		value: '370',
		name: '顺平县',
		parent: '29'
	},
	{
		value: '371',
		name: '唐县',
		parent: '29'
	},
	{
		value: '372',
		name: '望都县',
		parent: '29'
	},
	{
		value: '373',
		name: '涞水县',
		parent: '29'
	},
	{
		value: '374',
		name: '高阳县',
		parent: '29'
	},
	{
		value: '375',
		name: '安新县',
		parent: '29'
	},
	{
		value: '376',
		name: '雄县',
		parent: '29'
	},
	{
		value: '377',
		name: '容城县',
		parent: '29'
	},
	{
		value: '378',
		name: '曲阳县',
		parent: '29'
	},
	{
		value: '379',
		name: '阜平县',
		parent: '29'
	},
	{
		value: '380',
		name: '博野县',
		parent: '29'
	},
	{
		value: '3350',
		name: '卓尼县',
		parent: '350'
	},
	{
		value: '3351',
		name: '舟曲县',
		parent: '350'
	},
	{
		value: '3352',
		name: '迭部县',
		parent: '350'
	},
	{
		value: '3353',
		name: '玛曲县',
		parent: '350'
	},
	{
		value: '3354',
		name: '碌曲县',
		parent: '350'
	},
	{
		value: '3355',
		name: '夏河县',
		parent: '350'
	},
	{
		value: '3357',
		name: '城东区',
		parent: '351'
	},
	{
		value: '3358',
		name: '城中区',
		parent: '351'
	},
	{
		value: '3359',
		name: '城西区',
		parent: '351'
	},
	{
		value: '3360',
		name: '城北区',
		parent: '351'
	},
	{
		value: '3361',
		name: '湟源县',
		parent: '351'
	},
	{
		value: '3362',
		name: '湟中县',
		parent: '351'
	},
	{
		value: '3363',
		name: '大通回族土族自治县',
		parent: '351'
	},
	{
		value: '3365',
		name: '平安县',
		parent: '352'
	},
	{
		value: '3366',
		name: '乐都县',
		parent: '352'
	},
	{
		value: '3367',
		name: '民和回族土族自治县',
		parent: '352'
	},
	{
		value: '3368',
		name: '互助土族自治县',
		parent: '352'
	},
	{
		value: '3477',
		name: '焉耆回族自治县',
		parent: '367'
	},
	{
		value: '3479',
		name: '昌吉市',
		parent: '368'
	},
	{
		value: '3480',
		name: '阜康市',
		parent: '368'
	},
	{
		value: '3481',
		name: '呼图壁县',
		parent: '368'
	},
	{
		value: '3482',
		name: '玛纳斯县',
		parent: '368'
	},
	{
		value: '3483',
		name: '奇台县',
		parent: '368'
	},
	{
		value: '3484',
		name: '吉木萨尔县',
		parent: '368'
	},
	{
		value: '3485',
		name: '木垒哈萨克自治县',
		parent: '368'
	},
	{
		value: '3487',
		name: '博乐市',
		parent: '369'
	},
	{
		value: '3488',
		name: '精河县',
		parent: '369'
	},
	{
		value: '3489',
		name: '温泉县',
		parent: '369'
	},
	{
		value: '3491',
		name: '伊宁市',
		parent: '370'
	},
	{
		value: '3492',
		name: '奎屯市',
		parent: '370'
	},
	{
		value: '3493',
		name: '伊宁县',
		parent: '370'
	},
	{
		value: '3494',
		name: '察布查尔锡伯自治县',
		parent: '370'
	},
	{
		value: '3495',
		name: '霍城县',
		parent: '370'
	},
	{
		value: '3496',
		name: '巩留县',
		parent: '370'
	},
	{
		value: '3497',
		name: '新源县',
		parent: '370'
	},
	{
		value: '3498',
		name: '昭苏县',
		parent: '370'
	},
	{
		value: '3499',
		name: '特克斯县',
		parent: '370'
	},
	{
		value: '3500',
		name: '尼勒克县',
		parent: '370'
	},
	{
		value: '3502',
		name: '塔城市',
		parent: '371'
	},
	{
		value: '3503',
		name: '乌苏市',
		parent: '371'
	},
	{
		value: '3504',
		name: '额敏县',
		parent: '371'
	},
	{
		value: '3505',
		name: '沙湾县',
		parent: '371'
	},
	{
		value: '3506',
		name: '托里县',
		parent: '371'
	},
	{
		value: '3507',
		name: '裕民县',
		parent: '371'
	},
	{
		value: '3508',
		name: '和布克赛尔蒙古自治县',
		parent: '371'
	},
	{
		value: '3510',
		name: '阿勒泰市',
		parent: '372'
	},
	{
		value: '3511',
		name: '布尔津县',
		parent: '372'
	},
	{
		value: '3512',
		name: '富蕴县',
		parent: '372'
	},
	{
		value: '3513',
		name: '福海县',
		parent: '372'
	},
	{
		value: '3514',
		name: '哈巴河县',
		parent: '372'
	},
	{
		value: '3515',
		name: '青河县',
		parent: '372'
	},
	{
		value: '3516',
		name: '吉木乃县',
		parent: '372'
	},
	{
		value: '3518',
		name: '老街街道',
		parent: '-627'
	},
	{
		value: '3519',
		name: '红山街道',
		parent: '-627'
	},
	{
		value: '3520',
		name: '新城街道',
		parent: '-627'
	},
	{
		value: '3521',
		name: '向阳街道',
		parent: '-627'
	},
	{
		value: '3522',
		name: '东城街道',
		parent: '373'
	},
	{
		value: '3523',
		name: '其它区',
		parent: '373'
	},
	{
		value: '3524',
		name: '石河子乡',
		parent: '373'
	},
	{
		value: '3526',
		name: '幸福路街道',
		parent: '-626'
	},
	{
		value: '3527',
		name: '金银川路街道',
		parent: '-626'
	},
	{
		value: '3528',
		name: '青松路街道',
		parent: '-626'
	},
	{
		value: '3529',
		name: '南口街道',
		parent: '-626'
	},
	{
		value: '3530',
		name: '托喀依乡',
		parent: '-626'
	},
	{
		value: '3531',
		name: '团场',
		parent: '374'
	},
	{
		value: '3533',
		name: '兵团四十四团',
		parent: '375'
	},
	{
		value: '3534',
		name: '兵团四十九团',
		parent: '375'
	},
	{
		value: '3535',
		name: '兵团五十团',
		parent: '375'
	},
	{
		value: '3536',
		name: '其它区',
		parent: '375'
	},
	{
		value: '3537',
		name: '兵团五十三团',
		parent: '-625'
	},
	{
		value: '3538',
		name: '兵团农三师工程团',
		parent: '-625'
	},
	{
		value: '3539',
		name: '兵团五十二团',
		parent: '-625'
	},
	{
		value: '3541',
		name: '军垦路街道',
		parent: '376'
	},
	{
		value: '3542',
		name: '青湖路街道',
		parent: '376'
	},
	{
		value: '3543',
		name: '其它区',
		parent: '376'
	},
	{
		value: '3544',
		name: '团场',
		parent: '376'
	},
	{
		value: '3546',
		name: '兴庆区',
		parent: '377'
	},
	{
		value: '3547',
		name: '金凤区',
		parent: '377'
	},
	{
		value: '3548',
		name: '西夏区',
		parent: '377'
	},
	{
		value: '3549',
		name: '灵武市',
		parent: '377'
	},
	{
		value: '3550',
		name: '永宁县',
		parent: '377'
	},
	{
		value: '3551',
		name: '贺兰县',
		parent: '377'
	},
	{
		value: '3553',
		name: '大武口区',
		parent: '378'
	},
	{
		value: '3554',
		name: '惠农区',
		parent: '378'
	},
	{
		value: '3555',
		name: '平罗县',
		parent: '378'
	},
	{
		value: '3557',
		name: '利通区',
		parent: '379'
	},
	{
		value: '3558',
		name: '青铜峡市',
		parent: '379'
	},
	{
		value: '3559',
		name: '盐池县',
		parent: '379'
	},
	{
		value: '3560',
		name: '同心县',
		parent: '379'
	},
	{
		value: '3562',
		name: '原州区',
		parent: '380'
	},
	{
		value: '3563',
		name: '西吉县',
		parent: '380'
	},
	{
		value: '3564',
		name: '隆德县',
		parent: '380'
	},
	{
		value: '3565',
		name: '泾源县',
		parent: '380'
	},
	{
		value: '3566',
		name: '彭阳县',
		parent: '380'
	},
	{
		value: '3568',
		name: '沙坡头区',
		parent: '381'
	},
	{
		value: '3569',
		name: '中宁县',
		parent: '381'
	},
	{
		value: '3570',
		name: '海原县',
		parent: '381'
	},
	{
		value: '3571',
		name: '高雄市',
		parent: '382'
	},
	{
		value: '3572',
		name: '基隆市',
		parent: '383'
	},
	{
		value: '3573',
		name: '台南市',
		parent: '384'
	},
	{
		value: '3574',
		name: '台中市',
		parent: '385'
	},
	{
		value: '3575',
		name: '台北市',
		parent: '386'
	},
	{
		value: '3577',
		name: '杏花岭区',
		parent: '387'
	},
	{
		value: '3578',
		name: '小店区',
		parent: '387'
	},
	{
		value: '3579',
		name: '迎泽区',
		parent: '387'
	},
	{
		value: '3580',
		name: '尖草坪区',
		parent: '387'
	},
	{
		value: '3581',
		name: '万柏林区',
		parent: '387'
	},
	{
		value: '3582',
		name: '晋源区',
		parent: '387'
	},
	{
		value: '3583',
		name: '古交市',
		parent: '387'
	},
	{
		value: '3584',
		name: '清徐县',
		parent: '387'
	},
	{
		value: '3585',
		name: '阳曲县',
		parent: '387'
	},
	{
		value: '3586',
		name: '娄烦县',
		parent: '387'
	},
	{
		value: '3587',
		name: '榆次区',
		parent: '388'
	},
	{
		value: '3588',
		name: '平遥县',
		parent: '388'
	},
	{
		value: '3589',
		name: '太谷县',
		parent: '388'
	},
	{
		value: '3590',
		name: '祁县',
		parent: '388'
	},
	{
		value: '3591',
		name: '介休市',
		parent: '388'
	},
	{
		value: '3592',
		name: '榆社县',
		parent: '388'
	},
	{
		value: '3593',
		name: '左权县',
		parent: '388'
	},
	{
		value: '3594',
		name: '和顺县',
		parent: '388'
	},
	{
		value: '3595',
		name: '昔阳县',
		parent: '388'
	},
	{
		value: '3596',
		name: '寿阳县',
		parent: '388'
	},
	{
		value: '3598',
		name: '灵石县',
		parent: '388'
	},
	{
		value: '3599',
		name: '市区',
		parent: '389'
	},
	{
		value: '3600',
		name: '盐湖区',
		parent: '389'
	},
	{
		value: '3601',
		name: '永济市',
		parent: '389'
	},
	{
		value: '3602',
		name: '河津市',
		parent: '389'
	},
	{
		value: '3603',
		name: '芮城县',
		parent: '389'
	},
	{
		value: '3604',
		name: '临猗县',
		parent: '389'
	},
	{
		value: '3605',
		name: '万荣县',
		parent: '389'
	},
	{
		value: '3606',
		name: '新绛县',
		parent: '389'
	},
	{
		value: '3607',
		name: '稷山县',
		parent: '389'
	},
	{
		value: '3608',
		name: '闻喜县',
		parent: '389'
	},
	{
		value: '3609',
		name: '夏县',
		parent: '389'
	},
	{
		value: '3610',
		name: '绛县',
		parent: '389'
	},
	{
		value: '3611',
		name: '平陆县',
		parent: '389'
	},
	{
		value: '3612',
		name: '垣曲县',
		parent: '389'
	},
	{
		value: '3614',
		name: '城区',
		parent: '390'
	},
	{
		value: '3615',
		name: '矿区',
		parent: '390'
	},
	{
		value: '3616',
		name: '南郊区',
		parent: '390'
	},
	{
		value: '3617',
		name: '新荣区',
		parent: '390'
	},
	{
		value: '3618',
		name: '阳高县',
		parent: '390'
	},
	{
		value: '3619',
		name: '天镇县',
		parent: '390'
	},
	{
		value: '3620',
		name: '广灵县',
		parent: '390'
	},
	{
		value: '3621',
		name: '灵丘县',
		parent: '390'
	},
	{
		value: '3622',
		name: '浑源县',
		parent: '390'
	},
	{
		value: '3623',
		name: '左云县',
		parent: '390'
	},
	{
		value: '3624',
		name: '大同县',
		parent: '390'
	},
	{
		value: '3626',
		name: '城区',
		parent: '391'
	},
	{
		value: '3627',
		name: '矿区',
		parent: '391'
	},
	{
		value: '3628',
		name: '郊区',
		parent: '391'
	},
	{
		value: '3629',
		name: '平定县',
		parent: '391'
	},
	{
		value: '3630',
		name: '盂县',
		parent: '391'
	},
	{
		value: '3631',
		name: '尧都区',
		parent: '392'
	},
	{
		value: '3632',
		name: '洪洞县',
		parent: '392'
	},
	{
		value: '3633',
		name: '侯马市',
		parent: '392'
	},
	{
		value: '3634',
		name: '霍州市',
		parent: '392'
	},
	{
		value: '3635',
		name: '曲沃县',
		parent: '392'
	},
	{
		value: '3636',
		name: '翼城县',
		parent: '392'
	},
	{
		value: '3637',
		name: '襄汾县',
		parent: '392'
	},
	{
		value: '3638',
		name: '古县',
		parent: '392'
	},
	{
		value: '3639',
		name: '安泽县',
		parent: '392'
	},
	{
		value: '3640',
		name: '浮山县',
		parent: '392'
	},
	{
		value: '3641',
		name: '吉县',
		parent: '392'
	},
	{
		value: '3642',
		name: '乡宁县',
		parent: '392'
	},
	{
		value: '3643',
		name: '蒲县',
		parent: '392'
	},
	{
		value: '3644',
		name: '大宁县',
		parent: '392'
	},
	{
		value: '3645',
		name: '永和县',
		parent: '392'
	},
	{
		value: '3646',
		name: '隰县',
		parent: '392'
	},
	{
		value: '3647',
		name: '汾西县',
		parent: '392'
	},
	{
		value: '3648',
		name: '离石区',
		parent: '393'
	},
	{
		value: '3649',
		name: '孝义市',
		parent: '393'
	},
	{
		value: '3650',
		name: '文水县',
		parent: '393'
	},
	{
		value: '3651',
		name: '交城县',
		parent: '393'
	},
	{
		value: '3652',
		name: '汾阳市',
		parent: '393'
	},
	{
		value: '3653',
		name: '中阳县',
		parent: '393'
	},
	{
		value: '3654',
		name: '兴县',
		parent: '393'
	},
	{
		value: '3655',
		name: '临县',
		parent: '393'
	},
	{
		value: '3656',
		name: '方山县',
		parent: '393'
	},
	{
		value: '3657',
		name: '柳林县',
		parent: '393'
	},
	{
		value: '3658',
		name: '岚县',
		parent: '393'
	},
	{
		value: '3659',
		name: '交口县',
		parent: '393'
	},
	{
		value: '3660',
		name: '石楼县',
		parent: '393'
	},
	{
		value: '3661',
		name: '朔城区',
		parent: '394'
	},
	{
		value: '3662',
		name: '平鲁区',
		parent: '394'
	},
	{
		value: '3663',
		name: '山阴县',
		parent: '394'
	},
	{
		value: '3664',
		name: '应县',
		parent: '394'
	},
	{
		value: '3665',
		name: '右玉县',
		parent: '394'
	},
	{
		value: '3666',
		name: '怀仁县',
		parent: '394'
	},
	{
		value: '3668',
		name: '城区',
		parent: '395'
	},
	{
		value: '3669',
		name: '郊区',
		parent: '395'
	},
	{
		value: '3670',
		name: '潞城市',
		parent: '395'
	},
	{
		value: '3671',
		name: '长治县',
		parent: '395'
	},
	{
		value: '3672',
		name: '襄垣县',
		parent: '395'
	},
	{
		value: '3673',
		name: '屯留县',
		parent: '395'
	},
	{
		value: '3674',
		name: '平顺县',
		parent: '395'
	},
	{
		value: '3675',
		name: '黎城县',
		parent: '395'
	},
	{
		value: '3676',
		name: '壶关县',
		parent: '395'
	},
	{
		value: '3677',
		name: '长子县',
		parent: '395'
	},
	{
		value: '3678',
		name: '武乡县',
		parent: '395'
	},
	{
		value: '3679',
		name: '沁县',
		parent: '395'
	},
	{
		value: '3680',
		name: '沁源县',
		parent: '395'
	},
	{
		value: '3682',
		name: '城区',
		parent: '396'
	},
	{
		value: '3683',
		name: '高平市',
		parent: '396'
	},
	{
		value: '3684',
		name: '泽州县',
		parent: '396'
	},
	{
		value: '3685',
		name: '沁水县',
		parent: '396'
	},
	{
		value: '3686',
		name: '阳城县',
		parent: '396'
	},
	{
		value: '3687',
		name: '陵川县',
		parent: '396'
	},
	{
		value: '3689',
		name: '忻府区',
		parent: '397'
	},
	{
		value: '3690',
		name: '原平市',
		parent: '397'
	},
	{
		value: '3691',
		name: '定襄县',
		parent: '397'
	},
	{
		value: '3692',
		name: '五台县',
		parent: '397'
	},
	{
		value: '3693',
		name: '代县',
		parent: '397'
	},
	{
		value: '3694',
		name: '繁峙县',
		parent: '397'
	},
	{
		value: '3695',
		name: '宁武县',
		parent: '397'
	},
	{
		value: '3696',
		name: '静乐县',
		parent: '397'
	},
	{
		value: '3697',
		name: '神池县',
		parent: '397'
	},
	{
		value: '3698',
		name: '五寨县',
		parent: '397'
	},
	{
		value: '3699',
		name: '岢岚县',
		parent: '397'
	},
	{
		value: '3700',
		name: '河曲县',
		parent: '397'
	},
	{
		value: '3701',
		name: '保德县',
		parent: '397'
	},
	{
		value: '3702',
		name: '偏关县',
		parent: '397'
	},
	{
		value: '3014',
		name: '南华县',
		parent: '314'
	},
	{
		value: '3015',
		name: '姚安县',
		parent: '314'
	},
	{
		value: '3016',
		name: '大姚县',
		parent: '314'
	},
	{
		value: '3017',
		name: '永仁县',
		parent: '314'
	},
	{
		value: '3018',
		name: '元谋县',
		parent: '314'
	},
	{
		value: '3019',
		name: '武定县',
		parent: '314'
	},
	{
		value: '3020',
		name: '禄丰县',
		parent: '314'
	},
	{
		value: '3023',
		name: '祥云县',
		parent: '315'
	},
	{
		value: '3024',
		name: '宾川县',
		parent: '315'
	},
	{
		value: '3025',
		name: '弥渡县',
		parent: '315'
	},
	{
		value: '3026',
		name: '永平县',
		parent: '315'
	},
	{
		value: '3027',
		name: '云龙县',
		parent: '315'
	},
	{
		value: '3028',
		name: '洱源县',
		parent: '315'
	},
	{
		value: '3029',
		name: '剑川县',
		parent: '315'
	},
	{
		value: '3030',
		name: '鹤庆县',
		parent: '315'
	},
	{
		value: '3031',
		name: '漾濞彝族自治县',
		parent: '315'
	},
	{
		value: '3032',
		name: '南涧彝族自治县',
		parent: '315'
	},
	{
		value: '3033',
		name: '巍山彝族回族自治县',
		parent: '315'
	},
	{
		value: '3035',
		name: '瑞丽市',
		parent: '316'
	},
	{
		value: '3036',
		name: '潞西市',
		parent: '316'
	},
	{
		value: '3037',
		name: '梁河县',
		parent: '316'
	},
	{
		value: '3038',
		name: '盈江县',
		parent: '316'
	},
	{
		value: '3039',
		name: '陇川县',
		parent: '316'
	},
	{
		value: '3041',
		name: '泸水县',
		parent: '317'
	},
	{
		value: '3042',
		name: '福贡县',
		parent: '317'
	},
	{
		value: '3043',
		name: '贡山独龙族怒族自治县',
		parent: '317'
	},
	{
		value: '3044',
		name: '兰坪白族普米族自治县',
		parent: '317'
	},
	{
		value: '3046',
		name: '香格里拉县',
		parent: '318'
	},
	{
		value: '3047',
		name: '德钦县',
		parent: '318'
	},
	{
		value: '3048',
		name: '维西傈僳族自治县',
		parent: '318'
	},
	{
		value: '3051',
		name: '城关区',
		parent: '320'
	},
	{
		value: '3052',
		name: '林周县',
		parent: '320'
	},
	{
		value: '3053',
		name: '当雄县',
		parent: '320'
	},
	{
		value: '3054',
		name: '尼木县',
		parent: '320'
	},
	{
		value: '3055',
		name: '曲水县',
		parent: '320'
	},
	{
		value: '3056',
		name: '堆龙德庆县',
		parent: '320'
	},
	{
		value: '3057',
		name: '达孜县',
		parent: '320'
	},
	{
		value: '3058',
		name: '墨竹工卡县',
		parent: '320'
	},
	{
		value: '3060',
		name: '昌都县',
		parent: '321'
	},
	{
		value: '3061',
		name: '江达县',
		parent: '321'
	},
	{
		value: '3062',
		name: '贡觉县',
		parent: '321'
	},
	{
		value: '3063',
		name: '类乌齐县',
		parent: '321'
	},
	{
		value: '3064',
		name: '丁青县',
		parent: '321'
	},
	{
		value: '3065',
		name: '察雅县',
		parent: '321'
	},
	{
		value: '3066',
		name: '八宿县',
		parent: '321'
	},
	{
		value: '3067',
		name: '左贡县',
		parent: '321'
	},
	{
		value: '3068',
		name: '芒康县',
		parent: '321'
	},
	{
		value: '3069',
		name: '洛隆县',
		parent: '321'
	},
	{
		value: '3070',
		name: '边坝县',
		parent: '321'
	},
	{
		value: '3072',
		name: '乃东县',
		parent: '322'
	},
	{
		value: '3073',
		name: '扎囊县',
		parent: '322'
	},
	{
		value: '3074',
		name: '贡嘎县',
		parent: '322'
	},
	{
		value: '3075',
		name: '桑日县',
		parent: '322'
	},
	{
		value: '3076',
		name: '琼结县',
		parent: '322'
	},
	{
		value: '3077',
		name: '曲松县',
		parent: '322'
	},
	{
		value: '3078',
		name: '措美县',
		parent: '322'
	},
	{
		value: '3079',
		name: '洛扎县',
		parent: '322'
	},
	{
		value: '3080',
		name: '加查县',
		parent: '322'
	},
	{
		value: '3081',
		name: '隆子县',
		parent: '322'
	},
	{
		value: '3082',
		name: '错那县',
		parent: '322'
	},
	{
		value: '3083',
		name: '浪卡子县',
		parent: '322'
	},
	{
		value: '3085',
		name: '日喀则市',
		parent: '323'
	},
	{
		value: '3086',
		name: '南木林县',
		parent: '323'
	},
	{
		value: '3087',
		name: '江孜县',
		parent: '323'
	},
	{
		value: '3088',
		name: '定日县',
		parent: '323'
	},
	{
		value: '3089',
		name: '萨迦县',
		parent: '323'
	},
	{
		value: '3090',
		name: '拉孜县',
		parent: '323'
	},
	{
		value: '3091',
		name: '昂仁县',
		parent: '323'
	},
	{
		value: '3092',
		name: '谢通门县',
		parent: '323'
	},
	{
		value: '3093',
		name: '白朗县',
		parent: '323'
	},
	{
		value: '3094',
		name: '仁布县',
		parent: '323'
	},
	{
		value: '3095',
		name: '康马县',
		parent: '323'
	},
	{
		value: '3096',
		name: '定结县',
		parent: '323'
	},
	{
		value: '3097',
		name: '仲巴县',
		parent: '323'
	},
	{
		value: '3098',
		name: '亚东县',
		parent: '323'
	},
	{
		value: '3099',
		name: '吉隆县',
		parent: '323'
	},
	{
		value: '3100',
		name: '聂拉木县',
		parent: '323'
	},
	{
		value: '3101',
		name: '萨嘎县',
		parent: '323'
	},
	{
		value: '3102',
		name: '岗巴县',
		parent: '323'
	},
	{
		value: '3104',
		name: '那曲县',
		parent: '324'
	},
	{
		value: '3105',
		name: '嘉黎县',
		parent: '324'
	},
	{
		value: '3106',
		name: '比如县',
		parent: '324'
	},
	{
		value: '3107',
		name: '聂荣县',
		parent: '324'
	},
	{
		value: '3108',
		name: '安多县',
		parent: '324'
	},
	{
		value: '3109',
		name: '申扎县',
		parent: '324'
	},
	{
		value: '3110',
		name: '索县',
		parent: '324'
	},
	{
		value: '3111',
		name: '班戈县',
		parent: '324'
	},
	{
		value: '3112',
		name: '巴青县',
		parent: '324'
	},
	{
		value: '3113',
		name: '尼玛县',
		parent: '324'
	},
	{
		value: '3115',
		name: '噶尔县',
		parent: '325'
	},
	{
		value: '3116',
		name: '普兰县',
		parent: '325'
	},
	{
		value: '3117',
		name: '札达县',
		parent: '325'
	},
	{
		value: '3118',
		name: '日土县',
		parent: '325'
	},
	{
		value: '3119',
		name: '革吉县',
		parent: '325'
	},
	{
		value: '3120',
		name: '改则县',
		parent: '325'
	},
	{
		value: '3121',
		name: '措勤县',
		parent: '325'
	},
	{
		value: '3123',
		name: '林芝县',
		parent: '326'
	},
	{
		value: '3124',
		name: '工布江达县',
		parent: '326'
	},
	{
		value: '3125',
		name: '米林县',
		parent: '326'
	},
	{
		value: '3126',
		name: '墨脱县',
		parent: '326'
	},
	{
		value: '3127',
		name: '波密县',
		parent: '326'
	},
	{
		value: '3128',
		name: '察隅县',
		parent: '326'
	},
	{
		value: '3129',
		name: '朗县',
		parent: '326'
	},
	{
		value: '3131',
		name: '新城区',
		parent: '327'
	},
	{
		value: '3132',
		name: '未央区',
		parent: '327'
	},
	{
		value: '3133',
		name: '莲湖区',
		parent: '327'
	},
	{
		value: '3135',
		name: '碑林区',
		parent: '327'
	},
	{
		value: '3136',
		name: '灞桥区',
		parent: '327'
	},
	{
		value: '3137',
		name: '雁塔区',
		parent: '327'
	},
	{
		value: '3138',
		name: '阎良区',
		parent: '327'
	},
	{
		value: '3139',
		name: '临潼区',
		parent: '327'
	},
	{
		value: '3140',
		name: '长安区',
		parent: '327'
	},
	{
		value: '3141',
		name: '蓝田县',
		parent: '327'
	},
	{
		value: '3142',
		name: '周至县',
		parent: '327'
	},
	{
		value: '3143',
		name: '户县',
		parent: '327'
	},
	{
		value: '3144',
		name: '高陵县',
		parent: '327'
	},
	{
		value: '3146',
		name: '耀州区',
		parent: '328'
	},
	{
		value: '3147',
		name: '王益区',
		parent: '328'
	},
	{
		value: '3148',
		name: '印台区',
		parent: '328'
	},
	{
		value: '3149',
		name: '宜君县',
		parent: '328'
	},
	{
		value: '3151',
		name: '宝塔区',
		parent: '329'
	},
	{
		value: '3152',
		name: '延长县',
		parent: '329'
	},
	{
		value: '3153',
		name: '延川县',
		parent: '329'
	},
	{
		value: '3154',
		name: '子长县',
		parent: '329'
	},
	{
		value: '3155',
		name: '安塞县',
		parent: '329'
	},
	{
		value: '3156',
		name: '志丹县',
		parent: '329'
	},
	{
		value: '3157',
		name: '吴起县',
		parent: '329'
	},
	{
		value: '3158',
		name: '甘泉县',
		parent: '329'
	},
	{
		value: '3159',
		name: '富县',
		parent: '329'
	},
	{
		value: '3160',
		name: '洛川县',
		parent: '329'
	},
	{
		value: '3161',
		name: '宜川县',
		parent: '329'
	},
	{
		value: '3162',
		name: '黄龙县',
		parent: '329'
	},
	{
		value: '3163',
		name: '黄陵县',
		parent: '329'
	},
	{
		value: '3165',
		name: '汉滨区',
		parent: '330'
	},
	{
		value: '3166',
		name: '汉阴县',
		parent: '330'
	},
	{
		value: '3167',
		name: '石泉县',
		parent: '330'
	},
	{
		value: '3168',
		name: '宁陕县',
		parent: '330'
	},
	{
		value: '3169',
		name: '紫阳县',
		parent: '330'
	},
	{
		value: '3170',
		name: '岚皋县',
		parent: '330'
	},
	{
		value: '3171',
		name: '平利县',
		parent: '330'
	},
	{
		value: '3172',
		name: '镇坪县',
		parent: '330'
	},
	{
		value: '3173',
		name: '旬阳县',
		parent: '330'
	},
	{
		value: '3174',
		name: '白河县',
		parent: '330'
	},
	{
		value: '3176',
		name: '渭滨区',
		parent: '331'
	},
	{
		value: '3177',
		name: '金台区',
		parent: '331'
	},
	{
		value: '3178',
		name: '陈仓区',
		parent: '331'
	},
	{
		value: '3179',
		name: '凤翔县',
		parent: '331'
	},
	{
		value: '3180',
		name: '岐山县',
		parent: '331'
	},
	{
		value: '3181',
		name: '扶风县',
		parent: '331'
	},
	{
		value: '3182',
		name: '眉县',
		parent: '331'
	},
	{
		value: '3183',
		name: '陇县',
		parent: '331'
	},
	{
		value: '3184',
		name: '千阳县',
		parent: '331'
	},
	{
		value: '3185',
		name: '麟游县',
		parent: '331'
	},
	{
		value: '3186',
		name: '凤县',
		parent: '331'
	},
	{
		value: '3187',
		name: '太白县',
		parent: '331'
	},
	{
		value: '3189',
		name: '临渭区',
		parent: '332'
	},
	{
		value: '3190',
		name: '华阴市',
		parent: '332'
	},
	{
		value: '3191',
		name: '韩城市',
		parent: '332'
	},
	{
		value: '3192',
		name: '华县',
		parent: '332'
	},
	{
		value: '3193',
		name: '潼关县',
		parent: '332'
	},
	{
		value: '3194',
		name: '大荔县',
		parent: '332'
	},
	{
		value: '3195',
		name: '蒲城县',
		parent: '332'
	},
	{
		value: '3196',
		name: '澄城县',
		parent: '332'
	},
	{
		value: '3197',
		name: '白水县',
		parent: '332'
	},
	{
		value: '3198',
		name: '合阳县',
		parent: '332'
	},
	{
		value: '3199',
		name: '富平县',
		parent: '332'
	},
	{
		value: '3201',
		name: '汉台区',
		parent: '333'
	},
	{
		value: '3202',
		name: '南郑县',
		parent: '333'
	},
	{
		value: '3203',
		name: '城固县',
		parent: '333'
	},
	{
		value: '3204',
		name: '洋县',
		parent: '333'
	},
	{
		value: '3205',
		name: '西乡县',
		parent: '333'
	},
	{
		value: '3206',
		name: '勉县',
		parent: '333'
	},
	{
		value: '3207',
		name: '宁强县',
		parent: '333'
	},
	{
		value: '3208',
		name: '略阳县',
		parent: '333'
	},
	{
		value: '3209',
		name: '镇巴县',
		parent: '333'
	},
	{
		value: '3210',
		name: '留坝县',
		parent: '333'
	},
	{
		value: '3211',
		name: '佛坪县',
		parent: '333'
	},
	{
		value: '3213',
		name: '秦都区',
		parent: '334'
	},
	{
		value: '3214',
		name: '杨陵区',
		parent: '334'
	},
	{
		value: '3215',
		name: '渭城区',
		parent: '334'
	},
	{
		value: '3216',
		name: '兴平市',
		parent: '334'
	},
	{
		value: '3217',
		name: '三原县',
		parent: '334'
	},
	{
		value: '3218',
		name: '泾阳县',
		parent: '334'
	},
	{
		value: '3219',
		name: '乾县',
		parent: '334'
	},
	{
		value: '3220',
		name: '礼泉县',
		parent: '334'
	},
	{
		value: '3221',
		name: '永寿县',
		parent: '334'
	},
	{
		value: '3222',
		name: '彬县',
		parent: '334'
	},
	{
		value: '3223',
		name: '长武县',
		parent: '334'
	},
	{
		value: '3224',
		name: '旬邑县',
		parent: '334'
	},
	{
		value: '3225',
		name: '淳化县',
		parent: '334'
	},
	{
		value: '3226',
		name: '武功县',
		parent: '334'
	},
	{
		value: '3228',
		name: '榆阳区',
		parent: '335'
	},
	{
		value: '3229',
		name: '神木县',
		parent: '335'
	},
	{
		value: '3230',
		name: '府谷县',
		parent: '335'
	},
	{
		value: '3231',
		name: '横山县',
		parent: '335'
	},
	{
		value: '3232',
		name: '靖边县',
		parent: '335'
	},
	{
		value: '3233',
		name: '定边县',
		parent: '335'
	},
	{
		value: '3234',
		name: '绥德县',
		parent: '335'
	},
	{
		value: '3235',
		name: '米脂县',
		parent: '335'
	},
	{
		value: '3236',
		name: '佳县',
		parent: '335'
	},
	{
		value: '3237',
		name: '吴堡县',
		parent: '335'
	},
	{
		value: '3238',
		name: '清涧县',
		parent: '335'
	},
	{
		value: '3239',
		name: '子洲县',
		parent: '335'
	},
	{
		value: '3241',
		name: '商州区',
		parent: '336'
	},
	{
		value: '3242',
		name: '洛南县',
		parent: '336'
	},
	{
		value: '3243',
		name: '丹凤县',
		parent: '336'
	},
	{
		value: '3244',
		name: '商南县',
		parent: '336'
	},
	{
		value: '3245',
		name: '山阳县',
		parent: '336'
	},
	{
		value: '3246',
		name: '镇安县',
		parent: '336'
	},
	{
		value: '3247',
		name: '柞水县',
		parent: '336'
	},
	{
		value: '3248',
		name: '城关区',
		parent: '337'
	},
	{
		value: '3249',
		name: '七里河区',
		parent: '337'
	},
	{
		value: '3250',
		name: '西固区',
		parent: '337'
	},
	{
		value: '3251',
		name: '安宁区',
		parent: '337'
	},
	{
		value: '3252',
		name: '红古区',
		parent: '337'
	},
	{
		value: '3253',
		name: '永登县',
		parent: '337'
	},
	{
		value: '3254',
		name: '皋兰县',
		parent: '337'
	},
	{
		value: '3255',
		name: '榆中县',
		parent: '337'
	},
	{
		value: '3257',
		name: '金川区',
		parent: '338'
	},
	{
		value: '3258',
		name: '永昌县',
		parent: '338'
	},
	{
		value: '3260',
		name: '胜利街道',
		parent: '-661'
	},
	{
		value: '3261',
		name: '新华街道',
		parent: '-661'
	},
	{
		value: '3262',
		name: '五一街道',
		parent: '-661'
	},
	{
		value: '3263',
		name: '建设街道',
		parent: '-661'
	},
	{
		value: '3369',
		name: '化隆回族自治县',
		parent: '352'
	},
	{
		value: '3370',
		name: '循化撒拉族自治县',
		parent: '352'
	},
	{
		value: '3372',
		name: '海晏县',
		parent: '353'
	},
	{
		value: '3373',
		name: '祁连县',
		parent: '353'
	},
	{
		value: '3374',
		name: '刚察县',
		parent: '353'
	},
	{
		value: '3375',
		name: '门源回族自治县',
		parent: '353'
	},
	{
		value: '3377',
		name: '同仁县',
		parent: '354'
	},
	{
		value: '3378',
		name: '尖扎县',
		parent: '354'
	},
	{
		value: '3379',
		name: '泽库县',
		parent: '354'
	},
	{
		value: '3380',
		name: '河南蒙古族自治县',
		parent: '354'
	},
	{
		value: '3382',
		name: '共和县',
		parent: '355'
	},
	{
		value: '3383',
		name: '同德县',
		parent: '355'
	},
	{
		value: '3384',
		name: '贵德县',
		parent: '355'
	},
	{
		value: '3385',
		name: '兴海县',
		parent: '355'
	},
	{
		value: '3386',
		name: '贵南县',
		parent: '355'
	},
	{
		value: '3388',
		name: '玛沁县',
		parent: '356'
	},
	{
		value: '3389',
		name: '班玛县',
		parent: '356'
	},
	{
		value: '3390',
		name: '甘德县',
		parent: '356'
	},
	{
		value: '3391',
		name: '达日县',
		parent: '356'
	},
	{
		value: '3392',
		name: '久治县',
		parent: '356'
	},
	{
		value: '3393',
		name: '玛多县',
		parent: '356'
	},
	{
		value: '3395',
		name: '玉树县',
		parent: '357'
	},
	{
		value: '3396',
		name: '杂多县',
		parent: '357'
	},
	{
		value: '3397',
		name: '称多县',
		parent: '357'
	},
	{
		value: '3398',
		name: '治多县',
		parent: '357'
	},
	{
		value: '3399',
		name: '囊谦县',
		parent: '357'
	},
	{
		value: '3400',
		name: '曲麻莱县',
		parent: '357'
	},
	{
		value: '3402',
		name: '德令哈市',
		parent: '358'
	},
	{
		value: '3403',
		name: '格尔木市',
		parent: '358'
	},
	{
		value: '3404',
		name: '乌兰县',
		parent: '358'
	},
	{
		value: '3405',
		name: '都兰县',
		parent: '358'
	},
	{
		value: '3406',
		name: '天峻县',
		parent: '358'
	},
	{
		value: '3407',
		name: '冷湖行委',
		parent: '358'
	},
	{
		value: '3408',
		name: '大柴旦行委',
		parent: '358'
	},
	{
		value: '3409',
		name: '茫崖行委',
		parent: '358'
	},
	{
		value: '3410',
		name: '天山区',
		parent: '359'
	},
	{
		value: '3411',
		name: '沙依巴克区',
		parent: '359'
	},
	{
		value: '3412',
		name: '新市区',
		parent: '359'
	},
	{
		value: '3413',
		name: '水磨沟区',
		parent: '359'
	},
	{
		value: '3414',
		name: '头屯河区',
		parent: '359'
	},
	{
		value: '3415',
		name: '达坂城区',
		parent: '359'
	},
	{
		value: '3416',
		name: '米东区',
		parent: '359'
	},
	{
		value: '3417',
		name: '乌鲁木齐县',
		parent: '359'
	},
	{
		value: '3419',
		name: '克拉玛依区',
		parent: '360'
	},
	{
		value: '3420',
		name: '独山子区',
		parent: '360'
	},
	{
		value: '3421',
		name: '白碱滩区',
		parent: '360'
	},
	{
		value: '3422',
		name: '乌尔禾区',
		parent: '360'
	},
	{
		value: '3424',
		name: '吐鲁番市',
		parent: '361'
	},
	{
		value: '3425',
		name: '鄯善县',
		parent: '361'
	},
	{
		value: '3426',
		name: '托克逊县',
		parent: '361'
	},
	{
		value: '3428',
		name: '哈密市',
		parent: '362'
	},
	{
		value: '3429',
		name: '伊吾县',
		parent: '362'
	},
	{
		value: '3430',
		name: '巴里坤哈萨克自治县',
		parent: '362'
	},
	{
		value: '3432',
		name: '和田市',
		parent: '363'
	},
	{
		value: '3433',
		name: '和田县',
		parent: '363'
	},
	{
		value: '3434',
		name: '墨玉县',
		parent: '363'
	},
	{
		value: '3435',
		name: '皮山县',
		parent: '363'
	},
	{
		value: '3436',
		name: '洛浦县',
		parent: '363'
	},
	{
		value: '3437',
		name: '策勒县',
		parent: '363'
	},
	{
		value: '3438',
		name: '于田县',
		parent: '363'
	},
	{
		value: '3439',
		name: '民丰县',
		parent: '363'
	},
	{
		value: '3441',
		name: '阿克苏市',
		parent: '364'
	},
	{
		value: '3442',
		name: '温宿县',
		parent: '364'
	},
	{
		value: '3443',
		name: '库车县',
		parent: '364'
	},
	{
		value: '3444',
		name: '沙雅县',
		parent: '364'
	},
	{
		value: '3445',
		name: '新和县',
		parent: '364'
	},
	{
		value: '3446',
		name: '拜城县',
		parent: '364'
	},
	{
		value: '3447',
		name: '乌什县',
		parent: '364'
	},
	{
		value: '3448',
		name: '阿瓦提县',
		parent: '364'
	},
	{
		value: '3449',
		name: '柯坪县',
		parent: '364'
	},
	{
		value: '3451',
		name: '喀什市',
		parent: '365'
	},
	{
		value: '3452',
		name: '疏附县',
		parent: '365'
	},
	{
		value: '3453',
		name: '疏勒县',
		parent: '365'
	},
	{
		value: '3454',
		name: '英吉沙县',
		parent: '365'
	},
	{
		value: '3455',
		name: '泽普县',
		parent: '365'
	},
	{
		value: '3456',
		name: '莎车县',
		parent: '365'
	},
	{
		value: '3457',
		name: '叶城县',
		parent: '365'
	},
	{
		value: '3458',
		name: '麦盖提县',
		parent: '365'
	},
	{
		value: '3459',
		name: '岳普湖县',
		parent: '365'
	},
	{
		value: '3460',
		name: '伽师县',
		parent: '365'
	},
	{
		value: '3461',
		name: '巴楚县',
		parent: '365'
	},
	{
		value: '3462',
		name: '塔什库尔干塔吉克自治县',
		parent: '365'
	},
	{
		value: '3464',
		name: '阿图什市',
		parent: '366'
	},
	{
		value: '3465',
		name: '阿克陶县',
		parent: '366'
	},
	{
		value: '3466',
		name: '阿合奇县',
		parent: '366'
	},
	{
		value: '3467',
		name: '乌恰县',
		parent: '366'
	},
	{
		value: '3469',
		name: '库尔勒市',
		parent: '367'
	},
	{
		value: '3470',
		name: '轮台县',
		parent: '367'
	},
	{
		value: '3471',
		name: '尉犁县',
		parent: '367'
	},
	{
		value: '3472',
		name: '若羌县',
		parent: '367'
	},
	{
		value: '3473',
		name: '且末县',
		parent: '367'
	},
	{
		value: '3474',
		name: '和静县',
		parent: '367'
	},
	{
		value: '3475',
		name: '和硕县',
		parent: '367'
	},
	{
		value: '3476',
		name: '博湖县',
		parent: '367'
	},
	{
		value: '3264',
		name: '前进街道',
		parent: '-661'
	},
	{
		value: '3265',
		name: '新城镇',
		parent: '-661'
	},
	{
		value: '3266',
		name: '峪泉镇',
		parent: '-661'
	},
	{
		value: '3267',
		name: '文殊镇',
		parent: '-661'
	},
	{
		value: '3268',
		name: '镜铁山矿区街道',
		parent: '-661'
	},
	{
		value: '3270',
		name: '白银区',
		parent: '340'
	},
	{
		value: '3271',
		name: '平川区',
		parent: '340'
	},
	{
		value: '3272',
		name: '靖远县',
		parent: '340'
	},
	{
		value: '3273',
		name: '会宁县',
		parent: '340'
	},
	{
		value: '3274',
		name: '景泰县',
		parent: '340'
	},
	{
		value: '3276',
		name: '秦州区',
		parent: '341'
	},
	{
		value: '3277',
		name: '麦积区',
		parent: '341'
	},
	{
		value: '3278',
		name: '清水县',
		parent: '341'
	},
	{
		value: '3279',
		name: '秦安县',
		parent: '341'
	},
	{
		value: '3280',
		name: '甘谷县',
		parent: '341'
	},
	{
		value: '3281',
		name: '武山县',
		parent: '341'
	},
	{
		value: '3282',
		name: '张家川回族自治县',
		parent: '341'
	},
	{
		value: '3284',
		name: '凉州区',
		parent: '342'
	},
	{
		value: '3285',
		name: '民勤县',
		parent: '342'
	},
	{
		value: '3286',
		name: '古浪县',
		parent: '342'
	},
	{
		value: '3287',
		name: '天祝藏族自治县',
		parent: '342'
	},
	{
		value: '3289',
		name: '甘州区',
		parent: '343'
	},
	{
		value: '3290',
		name: '民乐县',
		parent: '343'
	},
	{
		value: '3291',
		name: '临泽县',
		parent: '343'
	},
	{
		value: '3292',
		name: '高台县',
		parent: '343'
	},
	{
		value: '3293',
		name: '山丹县',
		parent: '343'
	},
	{
		value: '3294',
		name: '肃南裕固族自治县',
		parent: '343'
	},
	{
		value: '3296',
		name: '肃州区',
		parent: '344'
	},
	{
		value: '3297',
		name: '玉门市',
		parent: '344'
	},
	{
		value: '3298',
		name: '敦煌市',
		parent: '344'
	},
	{
		value: '3299',
		name: '金塔县',
		parent: '344'
	},
	{
		value: '3300',
		name: '瓜州县',
		parent: '344'
	},
	{
		value: '3301',
		name: '肃北蒙古族自治县',
		parent: '344'
	},
	{
		value: '3302',
		name: '阿克塞哈萨克族自治县',
		parent: '344'
	},
	{
		value: '3304',
		name: '西峰区',
		parent: '345'
	},
	{
		value: '3305',
		name: '庆城县',
		parent: '345'
	},
	{
		value: '3306',
		name: '环县',
		parent: '345'
	},
	{
		value: '3307',
		name: '华池县',
		parent: '345'
	},
	{
		value: '3308',
		name: '合水县',
		parent: '345'
	},
	{
		value: '3309',
		name: '正宁县',
		parent: '345'
	},
	{
		value: '3310',
		name: '宁县',
		parent: '345'
	},
	{
		value: '3311',
		name: '镇原县',
		parent: '345'
	},
	{
		value: '3313',
		name: '崆峒区',
		parent: '346'
	},
	{
		value: '3314',
		name: '泾川县',
		parent: '346'
	},
	{
		value: '3315',
		name: '灵台县',
		parent: '346'
	},
	{
		value: '3316',
		name: '崇信县',
		parent: '346'
	},
	{
		value: '3317',
		name: '华亭县',
		parent: '346'
	},
	{
		value: '3318',
		name: '庄浪县',
		parent: '346'
	},
	{
		value: '3319',
		name: '静宁县',
		parent: '346'
	},
	{
		value: '3321',
		name: '安定区',
		parent: '347'
	},
	{
		value: '3322',
		name: '通渭县',
		parent: '347'
	},
	{
		value: '3323',
		name: '临洮县',
		parent: '347'
	},
	{
		value: '3324',
		name: '漳县',
		parent: '347'
	},
	{
		value: '3325',
		name: '岷县',
		parent: '347'
	},
	{
		value: '3326',
		name: '渭源县',
		parent: '347'
	},
	{
		value: '3327',
		name: '陇西县',
		parent: '347'
	},
	{
		value: '3329',
		name: '武都区',
		parent: '348'
	},
	{
		value: '3330',
		name: '成县',
		parent: '348'
	},
	{
		value: '3331',
		name: '宕昌县',
		parent: '348'
	},
	{
		value: '3332',
		name: '康县',
		parent: '348'
	},
	{
		value: '3333',
		name: '文县',
		parent: '348'
	},
	{
		value: '3334',
		name: '西和县',
		parent: '348'
	},
	{
		value: '3335',
		name: '礼县',
		parent: '348'
	},
	{
		value: '3336',
		name: '两当县',
		parent: '348'
	},
	{
		value: '3337',
		name: '徽县',
		parent: '348'
	},
	{
		value: '3339',
		name: '临夏市',
		parent: '349'
	},
	{
		value: '3340',
		name: '临夏县',
		parent: '349'
	},
	{
		value: '3341',
		name: '康乐县',
		parent: '349'
	},
	{
		value: '3342',
		name: '永靖县',
		parent: '349'
	},
	{
		value: '3343',
		name: '广河县',
		parent: '349'
	},
	{
		value: '3344',
		name: '和政县',
		parent: '349'
	},
	{
		value: '3345',
		name: '东乡族自治县',
		parent: '349'
	},
	{
		value: '3346',
		name: '积石山保安族东乡族撒拉族自治县',
		parent: '349'
	},
	{
		value: '3348',
		name: '合作市',
		parent: '350'
	},
	{
		value: '3349',
		name: '临潭县',
		parent: '350'
	},
	{
		value: '10006',
		name: '平台',
		parent: '22'
	},
	{
		value: '10007',
		name: '顺义',
		parent: '22'
	},
	{
		value: '10011',
		name: '珠海西区',
		parent: '239'
	},
	{
		value: '10012',
		name: '其它区',
		parent: '253'
	},
	{
		value: '10036',
		name: '南宁江南',
		parent: '258'
	},
	{
		value: '10023',
		name: '经济开发区',
		parent: '46'
	},
	{
		value: '10044',
		name: '下沙区',
		parent: '50'
	},
	{
		value: '10056',
		name: '开发区',
		parent: '171'
	},
	{
		value: '10051',
		name: '嘉兴经济开发区',
		parent: '53'
	},
	{
		value: '10139',
		name: '共青城市',
		parent: '162'
	},
	{
		value: '10360',
		name: '朝阳区100029',
		parent: '21'
	},
	{
		value: '10679',
		name: '朝阳区2',
		parent: '21'
	},
	{
		value: '31091',
		name: '向阳街道',
		parent: '373'
	},
	{
		value: '30965',
		name: '新城镇',
		parent: '339'
	},
	{
		value: '30966',
		name: '文殊镇',
		parent: '339'
	},
	{
		value: '30967',
		name: '镜铁山矿区街道',
		parent: '339'
	},
	{
		value: '31082',
		name: '其它区',
		parent: '275'
	},
	{
		value: '31083',
		name: '幸福路街道',
		parent: '374'
	},
	{
		value: '31084',
		name: '金银川路街道',
		parent: '374'
	},
	{
		value: '31085',
		name: '青松路街道',
		parent: '374'
	},
	{
		value: '31086',
		name: '南口街道',
		parent: '374'
	},
	{
		value: '31087',
		name: '其它区',
		parent: '374'
	},
	{
		value: '31088',
		name: '老街街道',
		parent: '373'
	},
	{
		value: '31089',
		name: '红山街道',
		parent: '373'
	},
	{
		value: '31090',
		name: '新城街道',
		parent: '373'
	},
	{
		value: '30767',
		name: '津南区',
		parent: '23'
	},
	{
		value: '30768',
		name: '大港油田',
		parent: '24'
	},
	{
		value: '30769',
		name: '和平区',
		parent: '23'
	},
	{
		value: '30802',
		name: '新区',
		parent: '38'
	},
	{
		value: '30803',
		name: '马山区',
		parent: '38'
	},
	{
		value: '30805',
		name: '经济开发区',
		parent: '42'
	},
	{
		value: '30807',
		name: '临城新区',
		parent: '58'
	},
	{
		value: '30810',
		name: '新城区',
		parent: '52'
	},
	{
		value: '31180',
		name: '高新区',
		parent: '111'
	},
	{
		value: '31181',
		name: '工业园区',
		parent: '41'
	},
	{
		value: '31200',
		name: '番禺区',
		parent: '237'
	},
	{
		value: '31201',
		name: '南山区',
		parent: '238'
	},
	{
		value: '31202',
		name: '越秀区',
		parent: '237'
	},
	{
		value: '31203',
		name: '南沙区',
		parent: '237'
	},
	{
		value: '31204',
		name: '天河区',
		parent: '237'
	},
	{
		value: '31205',
		name: '从化区',
		parent: '237'
	},
	{
		value: '31206',
		name: '荔湾区',
		parent: '237'
	},
	{
		value: '31207',
		name: '盐田区',
		parent: '238'
	},
	{
		value: '31209',
		name: '罗湖区',
		parent: '238'
	},
	{
		value: '31210',
		name: '白云区',
		parent: '237'
	},
	{
		value: '31211',
		name: '海珠区',
		parent: '237'
	},
	{
		value: '31212',
		name: '福田区',
		parent: '238'
	},
	{
		value: '31213',
		name: '黄埔区',
		parent: '237'
	},
	{
		value: '31214',
		name: '花都区',
		parent: '237'
	},
	{
		value: '31215',
		name: '龙岗区',
		parent: '238'
	},
	{
		value: '31216',
		name: '宝安区',
		parent: '238'
	},
	{
		value: '3021',
		name: '大理市',
		parent: '315'
	},
	{
		value: '3010',
		name: '楚雄市',
		parent: '314'
	},
	{
		value: '10299',
		name: '苏州高新区',
		parent: '41'
	},
	{
		value: '31240',
		name: '弋江区',
		parent: '137'
	},
	{
		value: '31241',
		name: '三山区',
		parent: '137'
	},
	{
		value: '31260',
		name: '沙朗镇',
		parent: '254'
	},
	{
		value: '31261',
		name: '中山火炬高技术产业开发区',
		parent: '254'
	},
	{
		value: '32017',
		name: '朝阳区',
		parent: '1000'
	},
	{
		value: '32019',
		name: '海淀区',
		parent: '1000'
	},
	{
		value: '32021',
		name: '东城区',
		parent: '1000'
	},
	{
		value: '32031',
		name: '西城区',
		parent: '1000'
	},
	{
		value: '32045',
		name: '丰台区',
		parent: '1000'
	},
	{
		value: '32047',
		name: '石景山区',
		parent: '1000'
	},
	{
		value: '32055',
		name: '门头沟区',
		parent: '1000'
	},
	{
		value: '32068',
		name: '房山区',
		parent: '1000'
	},
	{
		value: '32076',
		name: '通州区',
		parent: '1000'
	},
	{
		value: '32091',
		name: '大兴区',
		parent: '1000'
	},
	{
		value: '32106',
		name: '顺义区',
		parent: '1000'
	},
	{
		value: '32127',
		name: '怀柔区',
		parent: '1000'
	},
	{
		value: '32143',
		name: '密云县',
		parent: '1000'
	},
	{
		value: '32161',
		name: '昌平区',
		parent: '1000'
	},
	{
		value: '32178',
		name: '平谷区',
		parent: '1000'
	},
	{
		value: '32187',
		name: '延庆县',
		parent: '1000'
	},
	{
		value: '32220',
		name: '五一街道',
		parent: '339'
	},
	{
		value: '32221',
		name: '新华街道',
		parent: '339'
	},
	{
		value: '32222',
		name: '前进街道',
		parent: '339'
	},
	{
		value: '32223',
		name: '胜利街道',
		parent: '339'
	},
	{
		value: '32224',
		name: '建设街道',
		parent: '339'
	},
	{
		value: '32225',
		name: '朝阳街道',
		parent: '339'
	},
	{
		value: '32226',
		name: '其它区',
		parent: '339'
	},
	{
		value: '32227',
		name: '峪泉镇',
		parent: '339'
	},
	{
		value: '32240',
		name: '兖州市',
		parent: '178'
	},
	{
		value: '32260',
		name: '萝岗区',
		parent: '237'
	},
	{
		value: '32261',
		name: '光明新区',
		parent: '238'
	},
	{
		value: '32400',
		name: '滨海新区',
		parent: '23'
	},
	{
		value: '32420',
		name: '加格达奇区',
		parent: '110'
	},
	{
		value: '32421',
		name: '松岭区',
		parent: '110'
	},
	{
		value: '32422',
		name: '新林区',
		parent: '110'
	},
	{
		value: '32423',
		name: '呼中区',
		parent: '110'
	},
	{
		value: '32424',
		name: '郑东新区',
		parent: '187'
	},
	{
		value: '32425',
		name: '江东高新区',
		parent: '51'
	},
	{
		value: '32427',
		name: '经济技术开发区',
		parent: '133'
	},
	{
		value: '32447',
		name: '燕郊经济技术开发区',
		parent: '35'
	},
	{
		value: '32516',
		name: '高新技术产业开发区',
		parent: '88'
	},
	{
		value: '32536',
		name: '淮安市经济技术开发区',
		parent: '44'
	},
	{
		value: '32537',
		name: '济南市高新区',
		parent: '170'
	},
	{
		value: '32441',
		name: '无为县',
		parent: '137'
	},
	{
		value: '32445',
		name: '经济技术开发区',
		parent: '162'
	},
	{
		value: '32446',
		name: '八里湖新区',
		parent: '162'
	},
	{
		value: '32458',
		name: '高新区',
		parent: '116'
	},
	{
		value: '32459',
		name: '高新区',
		parent: '76'
	},
	{
		value: '32496',
		name: '高开区',
		parent: '29'
	},
	{
		value: '32499',
		name: '岭前区',
		parent: '75'
	},
	{
		value: '32505',
		name: '襄州区',
		parent: '207'
	},
	{
		value: '32506',
		name: '随县',
		parent: '214'
	},
	{
		value: '32556',
		name: '北部新区',
		parent: '61'
	},
	{
		value: '32440',
		name: '巢湖市',
		parent: '133'
	},
	{
		value: '32442',
		name: '含山县',
		parent: '135'
	},
	{
		value: '32443',
		name: '和县',
		parent: '135'
	},
	{
		value: '32449',
		name: '高新区',
		parent: '395'
	},
	{
		value: '32451',
		name: '经济技术开发区',
		parent: '88'
	},
	{
		value: '32454',
		name: '开发区',
		parent: '182'
	},
	{
		value: '32455',
		name: '高新区',
		parent: '187'
	},
	{
		value: '32456',
		name: '开发区',
		parent: '210'
	},
	{
		value: '32457',
		name: '高新区',
		parent: '189'
	},
	{
		value: '32517',
		name: '镇江新区',
		parent: '47'
	},
	{
		value: '32448',
		name: '经济技术开发区',
		parent: '32'
	},
	{
		value: '32450',
		name: '开发区',
		parent: '75'
	},
	{
		value: '32452',
		name: '经济技术开发区',
		parent: '159'
	},
	{
		value: '32453',
		name: '开发区',
		parent: '176'
	},
	{
		value: '32497',
		name: '浑南新区',
		parent: '74'
	},
	{
		value: '32498',
		name: '张士开发区',
		parent: '74'
	},
	{
		value: '32500',
		name: '汽车产业开发区',
		parent: '88'
	},
	{
		value: '32501',
		name: '净月旅游开发区',
		parent: '88'
	},
	{
		value: '32502',
		name: '红谷滩新区',
		parent: '159'
	},
	{
		value: '32503',
		name: '昌北区',
		parent: '159'
	},
	{
		value: '32504',
		name: '黄金区',
		parent: '165'
	},
	{
		value: '32507',
		name: '金唐区',
		parent: '239'
	},
	{
		value: '32508',
		name: '南湾区',
		parent: '239'
	},
	{
		value: '32509',
		name: '枫溪区',
		parent: '255'
	},
	{
		value: '32510',
		name: '东山区',
		parent: '256'
	},
	{
		value: '32511',
		name: '金阳开发区',
		parent: '294'
	},
	{
		value: '32512',
		name: '红寺堡区',
		parent: '379'
	},
	{
		value: '32513',
		name: '香港特别行政区',
		parent: '0'
	},
	{
		value: '32514',
		name: '香港岛',
		parent: '32513'
	},
	{
		value: '32515',
		name: '九龙',
		parent: '32513'
	},
	{
		value: '32518',
		name: '新界',
		parent: '32513'
	},
	{
		value: '32519',
		name: '中西区',
		parent: '32514'
	},
	{
		value: '32520',
		name: '湾仔',
		parent: '32514'
	},
	{
		value: '32521',
		name: '东区',
		parent: '32514'
	},
	{
		value: '32522',
		name: '南区',
		parent: '32514'
	},
	{
		value: '32523',
		name: '九龙城区',
		parent: '32515'
	},
	{
		value: '32524',
		name: '油尖旺区',
		parent: '32515'
	},
	{
		value: '32525',
		name: '深水涉区',
		parent: '32515'
	},
	{
		value: '32526',
		name: '黄大仙区',
		parent: '32515'
	},
	{
		value: '32527',
		name: '观塘区',
		parent: '32515'
	},
	{
		value: '32557',
		name: '北区',
		parent: '32518'
	},
	{
		value: '32558',
		name: '大浦区',
		parent: '32518'
	},
	{
		value: '32559',
		name: '沙田区',
		parent: '32518'
	},
	{
		value: '32560',
		name: '西贡区',
		parent: '32518'
	},
	{
		value: '32561',
		name: '元朗区',
		parent: '32518'
	},
	{
		value: '32562',
		name: '屯门区',
		parent: '32518'
	},
	{
		value: '32563',
		name: '荃湾区',
		parent: '32518'
	},
	{
		value: '32564',
		name: '葵青区',
		parent: '32518'
	},
	{
		value: '32565',
		name: '离岛区',
		parent: '32518'
	}
]
export default list3