var tipuesearch = {"pages": [{'title': 'About', 'text': '小組倉儲: \n https://github.com/40823245/stage3-bg1 \n https://github.com/40823251/stage3-bg1 \n https://github.com/40823208/stage3-bg1 \n https://github.com/40823246/stage3-bg1 \n https://github.com/40823213/stage3-bg1 \n https://github.com/40823232/stage3-bg1 \n https://github.com/40823234/stage3-bg1 \n https://github.com/40823235/stage3-bg1 \n 小組成員: \n 40823245 / 40823245 \n 40823251 / 40823251 \n 40823208 / 40823208 \n 40823246 / 40823246 \n 40823213 / 40823213 \n 40823232 / 40823232 \n 40823234 / 40823234 \n 40823235 / 40823235 \n', 'tags': '', 'url': 'About.html'}, {'title': '小組作業', 'text': '每周更新內容，放置作業和檔案 \n', 'tags': '', 'url': '小組作業.html'}, {'title': 'W9', 'text': 'stage1 \n bg1 \n 主題: 掃地機器人 \n 分工: 40823245-REVEAL製作、合併網站、程式模擬 40823251-PDF檔製作、提交請求、繪製圖檔 \n 簡述: 利用自動化機械結構來滿足靠人力打掃家中的需求，並實現節省時間及勞力的願景。 \n bg2 \n 主題: 夾爪機構 \n 分工: \n 40823234-REVEAL製作、V-rep模擬 \n 40823235-PDF檔製作、繪製圖檔 \n 簡述: \n 利用偏心輪帶動夾爪和滑軌來到達想要的位置來抓取物件 \n bg8 \n 主題:自動分球機 \n 分工: \n 40823208-PDF製作、程式模擬 \n 40823246-REVEAL製作、繪製圖檔 \n 簡述: \n 希望能把遊戲機台的不同大小的鋼珠自動的分類乾淨 \n bg20 \n 主題:遊樂設施 \n 分工: \n 40823213-繪圖、inventor模擬\xa0 \xa0 \n 40823232-CoppeliaSim模擬、pdf、reveal製作 \n 簡述:了解設施的構造，和作動的方式 \n stage2 \n bg1 \n 主題: 堆高機 \n 分工: 40823208-網頁編輯、reveal製作\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa040823245-CoppeliaSim 模擬 40823246-機構設計、CoppeliaSim 模擬\xa0 \xa0 \xa0\xa040823251-網頁編輯、PDF 製作 \n 簡述: 透過前方兩支支撐桿載運物品,並利用滑軌裝置實現抬升及下降的 動作,輪子可轉向用以達到目的地。 \n bg2 \n 主題: 遊樂設施 \n 分工: \n 40823213-繪圖、inventor模擬\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa040823232-PDF 製作、reveal製作\xa0 \xa0 \xa0 \xa0 40823234-CoppeliaSim 模擬\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40823235-網頁編輯 \n 簡述:利用函數的曲線使桿件依照路徑升降，並上下移動。 \n stage3-bg1(heroku) \n 40823245 \n 40823251 \n 40823208 \n 40823234 \n 40823232 \n 40823246 \n 40823235 \n 40823213 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  4月30討論結果 主題: 生產線整合 分工: (1)繪圖:40823232、40823213 (2)網頁編輯:40823234、40823235、40823251 (3)模擬:40823246、40823208 (4)自由:40823245 \n 影片: \n', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': '40823245編譯 \n stage3-2b.txt \n 使用程式跑出stage3的小組、組長、組員超連結，我參考老師的程式修改後成功執行，但過程有遇到很多問題，就上網找資料和查程式語法，下面2張圖簡單講大概意思，網路上找到的都很清楚(下面附參考網址)。 \n \n \n 程式碼 \n def stu2b(account):\n    if account == "40823231":\n        return account + "-2"\n    elif account[0:3] == "407":\n        return "s" + account\n    else:\n        return account\n\nteamb = []\n\n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2b.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n    \noutput = ""    \nseperator = "-"*10 + "<br />"\n\nfor i in teamb[0:]:\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n    \n    try:\n        m7 = stu2b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])\n    except:\n        m8 = ""\n        \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n \n\n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n\n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n    \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"   \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n    \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"   \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n\n\nprint(output)\n# the following will use group data to generate needed html \n 參考資料 \n 運算符號 、 運算符號-1 、 讀檔 、 for迴圈 、 for迴圈(範圍) 、 列表 、 切割字串 、 異常處理 \n 遇到問題 \n 列表超出範圍(list index out of range)，當時一直以為是沒有定義特殊情況，但之後發現是最後沒有設定好7、8、9人的特殊情況。 \n 跑程式的影片 \n \n 把白窗裡的輸出複製放入網頁 \n 結果如下 \n stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n', 'tags': '', 'url': 'task1.html'}, {'title': '小組影片', 'text': '第十週', 'tags': '', 'url': '小組影片.html'}]};