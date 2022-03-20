'use strict';
let memIndex;
let memUserId;
let memKorFirstName;
let memKorLastName;
let memBirth;
let memGender;
let memNation;
let memEmail;
let memHpNation;
let memHp;
let adult = 0;
let child = 0;
let baby = 0;

function adult_memberOk(i){
    if(!$(`.adultFirstName${i}`).val()){
        alert('성(한글)을 입력하세요')
    }else if(!$(`.adultLastName${i}`).val()){
        alert('이름(한글)을 입력하세요')
    }else if(!$(`.adultBirth${i}`).val()){
        alert('생년월일을 입력하세요')
    }else if(!$(`.adultId${i}`).val()){
        alert('회원 아이디을 입력하세요')
    }else{
        $.get("/api/user/searchToReser/"+$(`.adultBirth${i}`).val()+"/"+$(`.adultFirstName${i}`).val()+"/"+$(`.adultLastName${i}`).val(), function(response){
            if(response.data.memUserid == $(`.adultId${i}`).val()){
                $.get("/api/reservation/member/"+$(`#${(i-1)*2}`).val()+"/"+response.data.memIndex, function(){});
                $.get("/api/reservation/member/"+$(`#${(i-1)*2+1}`).val()+"/"+response.data.memIndex, function(){});
                alert('확인되었습니다.')
            }else{
                alert('일치하는 회원 정보가 없습니다.')
            }
        });
    }
}

function child_memberOk(i){
    console.log(adult)
    if(!$(`.childFirstName${i}`).val()){
        alert('성(한글)을 입력하세요')
    }else if(!$(`.childLastName${i}`).val()){
        alert('이름(한글)을 입력하세요')
    }else if(!$(`.childBirth${i}`).val()){
        alert('생년월일을 입력하세요')
    }else if(!$(`.childId${i}`).val()){
        alert('회원 아이디을 입력하세요')
    }else{
        $.get("/api/user/searchToReser/"+$(`.childBirth${i}`).val()+"/"+$(`.childFirstName${i}`).val()+"/"+$(`.childLastName${i}`).val(), function(response){
            if(response.data.memUserid == $(`.childId${i}`).val()){
                $.get("/api/reservation/member/"+$(`#${(adult+i-1)*2}`).val()+"/"+response.data.memIndex, function(){});
                $.get("/api/reservation/member/"+$(`#${(adult+i-1)*2+1}`).val()+"/"+response.data.memIndex, function(){});
                alert('확인되었습니다.')
            }else{
                console.log($(`.childId${i}`).val())
                console.log(response.data.memUserid)
                alert('일치하는 회원 정보가 없습니다.')
            }
        });
    }
}

$(function () {
    // 비회원 회원 구분, 회원 인덱스 가져오기
    if($('#memberApiResponse').val() == '비회원'){
        memIndex = 0;
    }else{
        memIndex = $('#memberApiResponse').val().split(',')[0].substring($('#memberApiResponse').val().search('memIndex')+9, $('#memberApiResponse').val().split(',')[0].length);
        memUserId = $('#memberApiResponse').val().split(',')[1].substring(11, $('#memberApiResponse').val().split(',')[1].length);
        memKorFirstName = $('#memberApiResponse').val().split(',')[3].substring(17, $('#memberApiResponse').val().split(',')[3].length);
        memKorLastName = $('#memberApiResponse').val().split(',')[4].substring(16, $('#memberApiResponse').val().split(',')[4].length);
        memBirth = $('#memberApiResponse').val().split(',')[11].substring(10, $('#memberApiResponse').val().split(',')[11].length);
        memGender = $('#memberApiResponse').val().split(',')[10].substring(11, $('#memberApiResponse').val().split(',')[10].length);
        memNation = $('#memberApiResponse').val().split(',')[13].substring(11, $('#memberApiResponse').val().split(',')[13].length);
        memEmail = $('#memberApiResponse').val().split(',')[9].substring(10, $('#memberApiResponse').val().split(',')[9].length);
        memHpNation = $('#memberApiResponse').val().split(',')[7].substring(13, $('#memberApiResponse').val().split(',')[7].length);
        memHp = $('#memberApiResponse').val().split(',')[8].substring(7, $('#memberApiResponse').val().split(',')[8].length);
    }
    // 쿠키갯수(인원수 * 2) 구하기
    let personNum = 0
    for( let i = 0 ; i < 60; i++){
        if(document.getElementById(`${i}`)){
            personNum = personNum + 1;
        }
    }

    $('#0').val() // 1번고객, 구간 1


    // 구간 2 정보 출력
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });
    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {}
        },
        methods:{
        }
    });
    let itemList2 = new Vue({
        el : '#itemList2',
        data : {
            itemList2 : {}
        },
        methods:{
        }
    });
    let itemList3 = new Vue({
        el : '#itemList3',
        data : {
            itemList3 : {}
        },
        methods:{
        }
    });
    let itemList4 = new Vue({
        el : '#itemList4',
        data : {
            itemList4 : {}
        },
        methods:{
        }
    });
    function searchStart(index){
        $.get("/api/reservation/"+index, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
            itemList1.itemList1 = response.data;
            itemList2.itemList2 = response.data;
            itemList3.itemList3 = response.data;
            itemList4.itemList4 = response.data;
        });
    }

    // 구간별 필요사항
    if($('#reTripKind').html() == '왕복'){
        searchStart($('#1').val()); // 1번고객, 구간 2
    }
    if($('#reTripKind').html() == '편도'){
        $('.arrow_img').css('display', "none");
        $('.trip_info2').css('display', "none");
        $('.jour2').css("visibility","hidden");
        $('.onewaywww').css('display', "none");
    }
    if($('#reTripKind').html() == '다구간'){
        searchStart($('#1').val());
    }

    // 인원수 구하기
    let peopleKind = $('.person_cnt').html()
    let peice = peopleKind.split(' ')
    if(peice.length == 2){
        if(peice[0] == '성인'){
            adult = peice[1].substr(0, peice[1].length)
        }else if(peice[0] == '소아'){
            child = peice[1].substr(0, peice[1].length)
        }
    }else if(peice.length == 4){
        adult = peice[1].substr(0, peice[1].length)
        if(peice[2] == '소아'){
            child = peice[3].substr(0, peice[3].length)
        }else if(peice[2] == '유아'){
            baby = peice[3].substr(0, peice[3].length)
        }
    }else if(peice.length == 6){
        adult = peice[1].substr(0, peice[1].length)
        child = peice[3].substr(0, peice[3].length)
        baby = peice[5].substr(0, peice[5].length)
    }




    function adults(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper" class="tableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">성인 ${i}</p><input type="checkbox" class="userCheck">
                            <p class="check_txt">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required class="name name1 cursor adultFirstName${i}"><input type="text" placeholder="이름" name="last_name" value="" required class="name name2 adultLastName${i} cursor">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="adultGender${i}" class="adultGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="adultGender${i}" class="adultGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor adultBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor adultNation${i}">
                                <option value=""></option>
                                <option value="KOR" selected="selected">한국 (REPUBLIC OF KOREA)</option>
                                <option value="JPN">일본 (JAPAN)</option>
                                <option value="GHA">가나 (GHANA)</option>
                                <option value="GUY">가이아나 (GUYANA)</option>
                                <option value="GAB">가봉 (GABON)</option>
                                <option value="GMB">감비아 (GAMBIA)</option>
                                <option value="GLP">과들루프 (GUADELOUPE)</option>
                                <option value="GTM">과테말라 (GUATEMALA)</option>
                                <option value="GUM">괌 (GUAM)</option>
                                <option value="GRD">그레나다 (GRENADA)</option>
                                <option value="GEO">그루지아 (GEORGIA)</option>
                                <option value="GRC">그리스 (GREECE)</option>
                                <option value="GRL">그린란드 (GREENLAND)</option>
                                <option value="GIN">기니 (GUINEA)</option>
                                <option value="GNB">기니 (GUINEA BISSAU)</option>
                                <option value="GUF">기아나(프) (FRENCH GUIANA)</option>
                                <option value="NAM">나미비아 (NAMIBIA)</option>
                                <option value="NRU">나우루 (NAURU)</option>
                                <option value="NGA">나이지리아 (NIGERIA)</option>
                                <option value="ZAF">남아프리카공화국 (REP SOUTH AFRICA)</option>
                                <option value="NLD">네덜란드 (NETHERLANDS)</option>
                                <option value="NPL">네팔 (NEPAL)</option>
                                <option value="NOR">노르웨이 (NORWAY)</option>
                                <option value="NFK">노퍽 (NORFOLK ISLAND)</option>
                                <option value="NCL">누벨칼레도니 (NEW CALEDONIA)</option>
                                <option value="NZL">뉴질랜드 (NEW ZEALAND)</option>
                                <option value="NIU">니우에 (NIUE)</option>
                                <option value="NER">니제르 (NIGER)</option>
                                <option value="NIC">니카라과 (NICARAGUA)</option>
                                <option value="TWN">대만 (TAIWAN)</option>
                                <option value="DNK">덴마크 (DENMARK)</option>
                                <option value="DOM">도미니카공화국 (DOMINICAN REP)</option>
                                <option value="DMA">도미니카연방 (DOMINICA)</option>
                                <option value="DEU">독일 (GERMANY)</option>
                                <option value="TLS">동티모르 (EAST TIMOR)</option>
                                <option value="LAO">라오스 (LAOS)</option>
                                <option value="LVA">라트비아 (LATVIA)</option>
                                <option value="RUS">러시아 (RUSSIAN FED)</option>
                                <option value="LBN">레바논 (LEBANON)</option>
                                <option value="LSO">레소토 (LESOTHO)</option>
                                <option value="ROU">루마니아 (ROMANIA)</option>
                                <option value="LUX">룩셈르완다 (RWANDA)</option>
                                <option value="LBR">리베리아 (LIBERIA)</option>
                                <option value="LBY">리비아 (LIBYAN)</option>
                                <option value="LTU">리투아니아 (LITHUANIA)</option>
                                <option value="MDG">마다가스카르 (MADAGASCAR)</option>
                                <option value="MTQ">마르티니크 (MARTINIQUE)</option>
                                <option value="MHL">마샬제도 (MARSHALL ISLANDS)</option>
                                <option value="MAC">마카오 (MACAO)</option>
                                <option value="MKD">마케도니아 (MACEDONIA)</option>
                                <option value="MWI">말라위 (MALAWI)</option>
                                <option value="MYS">말레이시아 (MALAYSIA)</option>
                                <option value="MLI">말리 (MALI)</option>
                                <option value="MEX">멕시코 (MEXICO)</option>
                                <option value="MCO">모나코 (MONACO)</option>
                                <option value="MAR">모로코 (MOROCCO)</option>
                                <option value="MUS">모리셔스 (MAURITIUS)</option>
                                <option value="MRT">모리타니 (MAURITANIA)</option>
                                <option value="MOZ">모잠비크 (MOZAMBIQUE)</option>
                                <option value="MNE">몬테네그로 (REPUBLIC OF MENTENEGRO)</option>
                                <option value="MSR">몬트세라트 (MONTSERRAT)</option>
                                <option value="MDA">몰도바 (MOLDOVA)</option>
                                <option value="MDV">몰디브 (MALDIVES)</option>
                                <option value="MLT">몰타 (MALTA)</option>
                                <option value="MNG">몽골 (MONGOLIA)</option>
                                <option value="USA">미국 (U S A)</option>
                                <option value="MMR">미얀마 (MYANMAR)</option>
                                <option value="FSM">미크로네시아연방 (MICRONESIA)</option>
                                <option value="VUT">바누아투 (VANUATU)</option>
                                <option value="BHR">바레인 (BAHRAIN)</option>
                                <option value="BRB">바베이도스 (BARBADOS)</option>
                                <option value="VAT">바티칸 (Vatican City)</option>
                                <option value="BHS">바하마 (BAHAMAS)</option>
                                <option value="BGD">방글라데시 (BANGLADESH)</option>
                                <option value="BMU">버뮤다 (BERMUDA)</option>
                                <option value="VIR">버진제도(미) (US VIRGIN IS)</option>
                                <option value="VGB">버진제도(영) (BRITISH VIRGIN IS)</option>
                                <option value="VEN">베네수엘라 (VENEZUELA)</option>
                                <option value="BEN">베넹 (BENIN PEOPLES REP)</option>
                                <option value="VNM">베트남 (VIET NAM)</option>
                                <option value="BEL">벨기에 (BELGIUM)</option>
                                <option value="BLR">벨로루시 (BELARUS)</option>
                                <option value="BLZ">벨리즈 (BELIZE)</option>
                                <option value="BIH">보스니아 (BOSNIA HERZ)</option>
                                <option value="BWA">보츠와나 (BOTSWANA)</option>
                                <option value="BOL">볼리비아 (BOLIVIA)</option>
                                <option value="BDI">부룬디 (BURUNDI)</option>
                                <option value="BFA">부르키나파소 (BURKINA FASO)</option>
                                <option value="BTN">부탄 (BHUTAN)</option>
                                <option value="BGR">불가리아 (BULGARIA)</option>
                                <option value="BRA">브라질 (BRASIL)</option>
                                <option value="BRN">브루나이 (BRUNEI)</option>
                                <option value="WSM">사모아 (INDEPENDENT SAMOA)</option>
                                <option value="ASM">사모아(미) (AMERICAN SAMOA)</option>
                                <option value="SAU">사우디아라비아 (SAUDI ARABIA)</option>
                                <option value="SMR">산마리노 (SAN MARINO)</option>
                                <option value="STP">상투메 프린시페 (SAO TOME PRINCIPE)</option>
                                <option value="SEN">세네갈 (SENEGAL)</option>
                                <option value="SRB">세르비아 (REPUBLIC OF SERBIA)</option>
                                <option value="SYC">세이셜 (SEYCHELLES)</option>
                                <option value="LCA">세인트루시아 (SAINT LUCIA)</option>
                                <option value="VCT">세인트빈센트 그레나 (ST VINCENT)</option>
                                <option value="KNA">세인트키츠 네비스 (ST KITTS NEVIS)</option>
                                <option value="SHN">세인트헬레나 (ST HELENA)</option>
                                <option value="SOM">소말리아 (SOMALIA)</option>
                                <option value="SLB">솔로몬제도 (SOLOMON ISLANDS)</option>
                                <option value="SDN">수단 (SUDAN)</option>
                                <option value="SUR">수리남 (SURINAME)</option>
                                <option value="LKA">스리랑카 (SRI LANKA)</option>
                                <option value="SWZ">스와질랜드 (SWAZILAND)</option>
                                <option value="SWE">스웨덴 (SWEDEN)</option>
                                <option value="CHE">스위스 (SWITZERLAND)</option>
                                <option value="ESP">스페인 (SPAIN)</option>
                                <option value="SVK">슬로바키아 (SLOVAKIA)</option>
                                <option value="SVN">슬로베니아 (SLOVENIA)</option>
                                <option value="SYR">시리아 (SYRIA)</option>
                                <option value="SLE">시에라리온 (SIERRA LEONE)</option>
                                <option value="SGP">싱가폴 (SINGAPORE)</option>
                                <option value="ARE">아랍에미리트 (UNITED ARAB EMRTS)</option>
                                <option value="ABW">아루바 (ARUBA)</option>
                                <option value="ARM">아르메니아 (ARMENIA)</option>
                                <option value="ARG">아르헨티나 (ARGENTINA)</option>
                                <option value="ISL">아이슬랜드 (ICELAND)</option>
                                <option value="HTI">아이티 (HAITI)</option>
                                <option value="IRL">아일랜드 (IRELAND)</option>
                                <option value="AZE">아제르바이잔 (AZERBAIJAN)</option>
                                <option value="AFG">아프가니스탄 (AFGHANISTAN)</option>
                                <option value="AND">안도라 (ANDORRA)</option>
                                <option value="ANT">안틸레스(네덜란드) (ANTILLES)</option>
                                <option value="ALB">알바니아 (ALBANIA)</option>
                                <option value="DZA">알제리 (ALGERIA)</option>
                                <option value="AGO">앙골라 (ANGOLA)</option>
                                <option value="EST">에스토니아 (ESTONIA)</option>
                                <option value="ECU">에쿠아도르 (ECUADOR)</option>
                                <option value="ETH">에티오피아 (ETHIOPIA)</option>
                                <option value="ATG">엔티가 바부다 (ANTIGUA BARBUDA)</option>
                                <option value="SLV">엘살바도르 (EL SALVADOR)</option>
                                <option value="AIA">엥귈라 (ANGUILLA)</option>
                                <option value="GBR">영국 (UNITED KINGDOM)</option>
                                <option value="IOT">영국령인도양식민지 (BRITISH INDIAN OCEAN TERRITORY)</option>
                                <option value="YEM">예멘 (YEMEN ARAB REP)</option>
                                <option value="OMN">오만 (OMAN)</option>
                                <option value="AUT">오스트리아 (AUSTRIA)</option>
                                <option value="HND">온두라스 (HONDURAS)</option>
                                <option value="JOR">요르단 (JORDAN)</option>
                                <option value="UGA">우간다 (UGANDA)</option>
                                <option value="URY">우루과이 (URUGUAY)</option>
                                <option value="UZB">우즈베키스탄 (UZBEKISTAN)</option>
                                <option value="UKR">우크라이나 (UKRAINE)</option>
                                <option value="WLF">웰리스 푸투나 (WALLIS AND FUTUNA)</option>
                                <option value="YUG">유고슬라비아 (YUGOSLAVIA)</option>
                                <option value="IRQ">이라크 (IRAQ)</option>
                                <option value="IRN">이란 (IRAN)</option>
                                <option value="ISR">이스라엘 (ISRAEL)</option>
                                <option value="EGY">이집트 (EGYPT)</option>
                                <option value="ITA">이탈리아 (ITALY)</option>
                                <option value="IND">인도 (INDIA)</option>
                                <option value="IDN">인도네시아 (INDONESIA)</option>
                                <option value="JAM">자메이카 (JAMAICA)</option>
                                <option value="COD">자이르 (CONGO KINSHASA)</option>
                                <option value="ZMB">잠비아 (ZAMBIA)</option>
                                <option value="GNQ">적도기니 (EQUATORIAL GUINEA)</option>
                                <option value="CHN">중국 (MAINLAND CHINA)</option>
                                <option value="CAF">중앙아프리카공화국 (CNTRAL AFRICN REP)</option>
                                <option value="DJI">지부티 (DJIBOUTI)</option>
                                <option value="GIB">지브랄타 (GIBRALTAR)</option>
                                <option value="ZWE">짐바브웨 (ZIMBABWE)</option>
                                <option value="TCD">차드 (CHAD)</option>
                                <option value="CZE">체코 (CZECH REP)</option>
                                <option value="CHL">칠레 (CHILE)</option>
                                <option value="CMR">카메룬 (REPUBLIC CAMEROON)</option>
                                <option value="CPV">카보베르데 (REP OF CAPE VERDE)</option>
                                <option value="KAZ">카자흐스탄 (KAZAKHSTAN)</option>
                                <option value="QAT">카타르 (QATAR)</option>
                                <option value="KHM">캄보디아 (KAMPUCHEA)</option>
                                <option value="CAN">캐나다 (CANADA)</option>
                                <option value="KEN">케냐 (KENYA)</option>
                                <option value="CYM">케이맨제도 (CAYMAN IS)</option>
                                <option value="COM">코모로 (COMOROS)</option>
                                <option value="CRI">코스타리카 (COSTA RICA)</option>
                                <option value="CCK">코코스킬링제도 (COCOS ISL)</option>
                                <option value="CIV">코트디부와르 (COTE D IVOIRE)</option>
                                <option value="COL">콜롬비아 (COLOMBIA)</option>
                                <option value="COG">콩고 (CONGO BRAZZAVILLE)</option>
                                <option value="CUB">쿠바 (CUBA)</option>
                                <option value="KWT">쿠웨이트 (KUWAIT)</option>
                                <option value="COK">쿡제도 (COOK ISLANDS)</option>
                                <option value="HRV">크로아티아 (CROATIA)</option>
                                <option value="KGZ">키르키스스탄 (KYRGYZSTAN)</option>
                                <option value="KIR">키리바시 (KIRIBATI)</option>
                                <option value="CYP">키프로스 (CYPRUS)</option>
                                <option value="TJK">타지키스탄 (TAJIKISTAN)</option>
                                <option value="TZA">탄자니아 (TANZANIA)</option>
                                <option value="THA">태국 (THAILAND)</option>
                                <option value="TCA">터크스 케이커스제도 (TURKS CAICOS IS)</option>
                                <option value="TUR">터키 (TURKEY)</option>
                                <option value="TGO">토고 (TOGO)</option>
                                <option value="TON">통가 (TONGA)</option>
                                <option value="TKM">투르크메니스탄 (TURKMENISTAN)</option>
                                <option value="TUV">투발루 (TUVALU)</option>
                                <option value="TUN">튀니지 (TUNISIA)</option>
                                <option value="TTO">트리니다드토바고 (TRINIDAD TOBAGO)</option>
                                <option value="PAN">파나마 (PANAMA)</option>
                                <option value="PRY">파라과이 (PARAGUAY)</option>
                                <option value="FRO">파로제도 (FAROE ISLAND)</option>
                                <option value="PAK">파키스탄 (PAKISTAN)</option>
                                <option value="PNG">파푸아뉴기니 (PAPUA NEW GUINEA)</option>
                                <option value="PLW">팔라우 (PALAU ISLANDS)</option>
                                <option value="PSE">팔레스타인 (PALESTINIAN TERRITORY, OCCUPIED)</option>
                                <option value="PER">페루 (PERU)</option>
                                <option value="PRT">포르투갈 (PORTUGAL)</option>
                                <option value="FLK">포클랜드 (FALKLAND)</option>
                                <option value="POL">폴란드 (POLAND)</option>
                                <option value="PYF">폴리네시아(프) (FRENCH POLYNESIA)</option>
                                <option value="PRI">푸에르토리코 (PUERTO RICO)</option>
                                <option value="FRA">프랑스 (FRANCE)</option>
                                <option value="FJI">피지 (FIJI)</option>
                                <option value="FIN">핀란드 (FINLAND)</option>
                                <option value="PHL">필리핀 (PHILIPPINES)</option>
                                <option value="HUN">헝가리 (HUNGARY)</option>
                                <option value="AUS">호주 (AUSTRALIA)</option>
                                <option value="HKG">홍콩 (HONG KONG)</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <table class="options_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <td>회원 아이디</td>
                        <td><input type="text" name="id" class="id cursor adultId${i}" style="text-transform:uppercase;"><input type="button" value="확인"
                                class="butt_edit adultEdit${i}" onclick="adult_memberOk(${i})"></td>
                        <td>추가할인<img src="/userpage/lib/img/discount.PNG" alt="" class="discount"></td>
                        <td>
                            <select name="discount" title="추가할인 선택" class="p90 cursor adultDiscount${i}"
                                onchange="fnBlockDupDisc(this, '', 'DIS1,DIS2,DIS3,DIS4,DIS5,DIS9')">
                                <option value="">선택</option>
                                <optgroup label="<운임 40% / 공항세 50% 할인>" groupcd="DIS1">
                                    <option value="DIS">1~4급 장애인 본인 또는 중증 장애인 본인</option>
                                    <option value="DISAT">1~3급 장애인 동반보호자 1명 또는 중증 장애인의 동반보호자 1명</option>
                                    <option value="NM13AT">1~3급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM17">국가유공상이자 본인</option>
                                    <option value="NM518J">5/18 민주유공 부상자 본인</option>
                                    <option value="NMETC">국가유공자(고엽제)</option>
                                </optgroup>
                                <optgroup label="<운임 40% 할인>" groupcd="DIS2">
                                    <option value="NM1">국가유공자 본인 및 유족</option>
                                    <option value="NM14AT">4급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM2">독립유공자 본인</option>
                                    <option value="NM22">독립유공자 유족</option>
                                    <option value="NM2AT">독립유공자 동반보호자 1명</option>
                                    <option value="NM518">5/18 민주유공자 본인</option>
                                    <option value="NM518AT">5/18 민주유공자 유족</option>
                                </optgroup>
                                <optgroup label="<운임 10% 할인>" groupcd="DIS5">
                                    <option value="JIR1">제주도민</option>
                                    <option value="JIR2">재외 제주도민</option>
                                    <option value="JIR3">명예 제주도민 및 배우자</option>
                                    <option value="MIL">국방부 소속 군장병</option>
                                    <option value="MIL2">군인 공무원</option>
                                    <option value="MIL3">군무원</option>
                                </optgroup>
                                <optgroup label="<공항세 50% 할인>" groupcd="DIS6">
                                    <option value="DIS56">5~6급 장애인 본인 또는 경증 장애인 본인</option>
                                    <option value="ETC1">고엽제 피해자</option>
                                    <option value="ETC2">우수 숙련기술자</option>
                                    <option value="ETC3">숙련기술자</option>
                                    <option value="ETC4">대한민국명장</option>
                                    <option value="ETC5">전국기능경기대회입상자</option>
                                    <option value="ETC6">국제기능올림픽입상자</option>
                                    <option value="ETC7">기초생활수급대상자</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }
    function childs(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">소아 ${i}</p><input type="checkbox" class="userCheck">
                            <p class="check_txt">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required
                                class="name name1 cursor childFirstName${i}"><input type="text" placeholder="이름"
                                name="last_name" value="" required class="name name2 cursor childLastName${i}">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="childGender${i}" class="childGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="childGender${i}" class="childGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor childBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor childNation${i}">
                                <option value=""></option>
                                <option value="KOR" selected="selected">한국 (REPUBLIC OF KOREA)</option>
                                <option value="JPN">일본 (JAPAN)</option>
                                <option value="GHA">가나 (GHANA)</option>
                                <option value="GUY">가이아나 (GUYANA)</option>
                                <option value="GAB">가봉 (GABON)</option>
                                <option value="GMB">감비아 (GAMBIA)</option>
                                <option value="GLP">과들루프 (GUADELOUPE)</option>
                                <option value="GTM">과테말라 (GUATEMALA)</option>
                                <option value="GUM">괌 (GUAM)</option>
                                <option value="GRD">그레나다 (GRENADA)</option>
                                <option value="GEO">그루지아 (GEORGIA)</option>
                                <option value="GRC">그리스 (GREECE)</option>
                                <option value="GRL">그린란드 (GREENLAND)</option>
                                <option value="GIN">기니 (GUINEA)</option>
                                <option value="GNB">기니 (GUINEA BISSAU)</option>
                                <option value="GUF">기아나(프) (FRENCH GUIANA)</option>
                                <option value="NAM">나미비아 (NAMIBIA)</option>
                                <option value="NRU">나우루 (NAURU)</option>
                                <option value="NGA">나이지리아 (NIGERIA)</option>
                                <option value="ZAF">남아프리카공화국 (REP SOUTH AFRICA)</option>
                                <option value="NLD">네덜란드 (NETHERLANDS)</option>
                                <option value="NPL">네팔 (NEPAL)</option>
                                <option value="NOR">노르웨이 (NORWAY)</option>
                                <option value="NFK">노퍽 (NORFOLK ISLAND)</option>
                                <option value="NCL">누벨칼레도니 (NEW CALEDONIA)</option>
                                <option value="NZL">뉴질랜드 (NEW ZEALAND)</option>
                                <option value="NIU">니우에 (NIUE)</option>
                                <option value="NER">니제르 (NIGER)</option>
                                <option value="NIC">니카라과 (NICARAGUA)</option>
                                <option value="TWN">대만 (TAIWAN)</option>
                                <option value="DNK">덴마크 (DENMARK)</option>
                                <option value="DOM">도미니카공화국 (DOMINICAN REP)</option>
                                <option value="DMA">도미니카연방 (DOMINICA)</option>
                                <option value="DEU">독일 (GERMANY)</option>
                                <option value="TLS">동티모르 (EAST TIMOR)</option>
                                <option value="LAO">라오스 (LAOS)</option>
                                <option value="LVA">라트비아 (LATVIA)</option>
                                <option value="RUS">러시아 (RUSSIAN FED)</option>
                                <option value="LBN">레바논 (LEBANON)</option>
                                <option value="LSO">레소토 (LESOTHO)</option>
                                <option value="ROU">루마니아 (ROMANIA)</option>
                                <option value="LUX">룩셈르완다 (RWANDA)</option>
                                <option value="LBR">리베리아 (LIBERIA)</option>
                                <option value="LBY">리비아 (LIBYAN)</option>
                                <option value="LTU">리투아니아 (LITHUANIA)</option>
                                <option value="MDG">마다가스카르 (MADAGASCAR)</option>
                                <option value="MTQ">마르티니크 (MARTINIQUE)</option>
                                <option value="MHL">마샬제도 (MARSHALL ISLANDS)</option>
                                <option value="MAC">마카오 (MACAO)</option>
                                <option value="MKD">마케도니아 (MACEDONIA)</option>
                                <option value="MWI">말라위 (MALAWI)</option>
                                <option value="MYS">말레이시아 (MALAYSIA)</option>
                                <option value="MLI">말리 (MALI)</option>
                                <option value="MEX">멕시코 (MEXICO)</option>
                                <option value="MCO">모나코 (MONACO)</option>
                                <option value="MAR">모로코 (MOROCCO)</option>
                                <option value="MUS">모리셔스 (MAURITIUS)</option>
                                <option value="MRT">모리타니 (MAURITANIA)</option>
                                <option value="MOZ">모잠비크 (MOZAMBIQUE)</option>
                                <option value="MNE">몬테네그로 (REPUBLIC OF MENTENEGRO)</option>
                                <option value="MSR">몬트세라트 (MONTSERRAT)</option>
                                <option value="MDA">몰도바 (MOLDOVA)</option>
                                <option value="MDV">몰디브 (MALDIVES)</option>
                                <option value="MLT">몰타 (MALTA)</option>
                                <option value="MNG">몽골 (MONGOLIA)</option>
                                <option value="USA">미국 (U S A)</option>
                                <option value="MMR">미얀마 (MYANMAR)</option>
                                <option value="FSM">미크로네시아연방 (MICRONESIA)</option>
                                <option value="VUT">바누아투 (VANUATU)</option>
                                <option value="BHR">바레인 (BAHRAIN)</option>
                                <option value="BRB">바베이도스 (BARBADOS)</option>
                                <option value="VAT">바티칸 (Vatican City)</option>
                                <option value="BHS">바하마 (BAHAMAS)</option>
                                <option value="BGD">방글라데시 (BANGLADESH)</option>
                                <option value="BMU">버뮤다 (BERMUDA)</option>
                                <option value="VIR">버진제도(미) (US VIRGIN IS)</option>
                                <option value="VGB">버진제도(영) (BRITISH VIRGIN IS)</option>
                                <option value="VEN">베네수엘라 (VENEZUELA)</option>
                                <option value="BEN">베넹 (BENIN PEOPLES REP)</option>
                                <option value="VNM">베트남 (VIET NAM)</option>
                                <option value="BEL">벨기에 (BELGIUM)</option>
                                <option value="BLR">벨로루시 (BELARUS)</option>
                                <option value="BLZ">벨리즈 (BELIZE)</option>
                                <option value="BIH">보스니아 (BOSNIA HERZ)</option>
                                <option value="BWA">보츠와나 (BOTSWANA)</option>
                                <option value="BOL">볼리비아 (BOLIVIA)</option>
                                <option value="BDI">부룬디 (BURUNDI)</option>
                                <option value="BFA">부르키나파소 (BURKINA FASO)</option>
                                <option value="BTN">부탄 (BHUTAN)</option>
                                <option value="BGR">불가리아 (BULGARIA)</option>
                                <option value="BRA">브라질 (BRASIL)</option>
                                <option value="BRN">브루나이 (BRUNEI)</option>
                                <option value="WSM">사모아 (INDEPENDENT SAMOA)</option>
                                <option value="ASM">사모아(미) (AMERICAN SAMOA)</option>
                                <option value="SAU">사우디아라비아 (SAUDI ARABIA)</option>
                                <option value="SMR">산마리노 (SAN MARINO)</option>
                                <option value="STP">상투메 프린시페 (SAO TOME PRINCIPE)</option>
                                <option value="SEN">세네갈 (SENEGAL)</option>
                                <option value="SRB">세르비아 (REPUBLIC OF SERBIA)</option>
                                <option value="SYC">세이셜 (SEYCHELLES)</option>
                                <option value="LCA">세인트루시아 (SAINT LUCIA)</option>
                                <option value="VCT">세인트빈센트 그레나 (ST VINCENT)</option>
                                <option value="KNA">세인트키츠 네비스 (ST KITTS NEVIS)</option>
                                <option value="SHN">세인트헬레나 (ST HELENA)</option>
                                <option value="SOM">소말리아 (SOMALIA)</option>
                                <option value="SLB">솔로몬제도 (SOLOMON ISLANDS)</option>
                                <option value="SDN">수단 (SUDAN)</option>
                                <option value="SUR">수리남 (SURINAME)</option>
                                <option value="LKA">스리랑카 (SRI LANKA)</option>
                                <option value="SWZ">스와질랜드 (SWAZILAND)</option>
                                <option value="SWE">스웨덴 (SWEDEN)</option>
                                <option value="CHE">스위스 (SWITZERLAND)</option>
                                <option value="ESP">스페인 (SPAIN)</option>
                                <option value="SVK">슬로바키아 (SLOVAKIA)</option>
                                <option value="SVN">슬로베니아 (SLOVENIA)</option>
                                <option value="SYR">시리아 (SYRIA)</option>
                                <option value="SLE">시에라리온 (SIERRA LEONE)</option>
                                <option value="SGP">싱가폴 (SINGAPORE)</option>
                                <option value="ARE">아랍에미리트 (UNITED ARAB EMRTS)</option>
                                <option value="ABW">아루바 (ARUBA)</option>
                                <option value="ARM">아르메니아 (ARMENIA)</option>
                                <option value="ARG">아르헨티나 (ARGENTINA)</option>
                                <option value="ISL">아이슬랜드 (ICELAND)</option>
                                <option value="HTI">아이티 (HAITI)</option>
                                <option value="IRL">아일랜드 (IRELAND)</option>
                                <option value="AZE">아제르바이잔 (AZERBAIJAN)</option>
                                <option value="AFG">아프가니스탄 (AFGHANISTAN)</option>
                                <option value="AND">안도라 (ANDORRA)</option>
                                <option value="ANT">안틸레스(네덜란드) (ANTILLES)</option>
                                <option value="ALB">알바니아 (ALBANIA)</option>
                                <option value="DZA">알제리 (ALGERIA)</option>
                                <option value="AGO">앙골라 (ANGOLA)</option>
                                <option value="EST">에스토니아 (ESTONIA)</option>
                                <option value="ECU">에쿠아도르 (ECUADOR)</option>
                                <option value="ETH">에티오피아 (ETHIOPIA)</option>
                                <option value="ATG">엔티가 바부다 (ANTIGUA BARBUDA)</option>
                                <option value="SLV">엘살바도르 (EL SALVADOR)</option>
                                <option value="AIA">엥귈라 (ANGUILLA)</option>
                                <option value="GBR">영국 (UNITED KINGDOM)</option>
                                <option value="IOT">영국령인도양식민지 (BRITISH INDIAN OCEAN TERRITORY)</option>
                                <option value="YEM">예멘 (YEMEN ARAB REP)</option>
                                <option value="OMN">오만 (OMAN)</option>
                                <option value="AUT">오스트리아 (AUSTRIA)</option>
                                <option value="HND">온두라스 (HONDURAS)</option>
                                <option value="JOR">요르단 (JORDAN)</option>
                                <option value="UGA">우간다 (UGANDA)</option>
                                <option value="URY">우루과이 (URUGUAY)</option>
                                <option value="UZB">우즈베키스탄 (UZBEKISTAN)</option>
                                <option value="UKR">우크라이나 (UKRAINE)</option>
                                <option value="WLF">웰리스 푸투나 (WALLIS AND FUTUNA)</option>
                                <option value="YUG">유고슬라비아 (YUGOSLAVIA)</option>
                                <option value="IRQ">이라크 (IRAQ)</option>
                                <option value="IRN">이란 (IRAN)</option>
                                <option value="ISR">이스라엘 (ISRAEL)</option>
                                <option value="EGY">이집트 (EGYPT)</option>
                                <option value="ITA">이탈리아 (ITALY)</option>
                                <option value="IND">인도 (INDIA)</option>
                                <option value="IDN">인도네시아 (INDONESIA)</option>
                                <option value="JAM">자메이카 (JAMAICA)</option>
                                <option value="COD">자이르 (CONGO KINSHASA)</option>
                                <option value="ZMB">잠비아 (ZAMBIA)</option>
                                <option value="GNQ">적도기니 (EQUATORIAL GUINEA)</option>
                                <option value="CHN">중국 (MAINLAND CHINA)</option>
                                <option value="CAF">중앙아프리카공화국 (CNTRAL AFRICN REP)</option>
                                <option value="DJI">지부티 (DJIBOUTI)</option>
                                <option value="GIB">지브랄타 (GIBRALTAR)</option>
                                <option value="ZWE">짐바브웨 (ZIMBABWE)</option>
                                <option value="TCD">차드 (CHAD)</option>
                                <option value="CZE">체코 (CZECH REP)</option>
                                <option value="CHL">칠레 (CHILE)</option>
                                <option value="CMR">카메룬 (REPUBLIC CAMEROON)</option>
                                <option value="CPV">카보베르데 (REP OF CAPE VERDE)</option>
                                <option value="KAZ">카자흐스탄 (KAZAKHSTAN)</option>
                                <option value="QAT">카타르 (QATAR)</option>
                                <option value="KHM">캄보디아 (KAMPUCHEA)</option>
                                <option value="CAN">캐나다 (CANADA)</option>
                                <option value="KEN">케냐 (KENYA)</option>
                                <option value="CYM">케이맨제도 (CAYMAN IS)</option>
                                <option value="COM">코모로 (COMOROS)</option>
                                <option value="CRI">코스타리카 (COSTA RICA)</option>
                                <option value="CCK">코코스킬링제도 (COCOS ISL)</option>
                                <option value="CIV">코트디부와르 (COTE D IVOIRE)</option>
                                <option value="COL">콜롬비아 (COLOMBIA)</option>
                                <option value="COG">콩고 (CONGO BRAZZAVILLE)</option>
                                <option value="CUB">쿠바 (CUBA)</option>
                                <option value="KWT">쿠웨이트 (KUWAIT)</option>
                                <option value="COK">쿡제도 (COOK ISLANDS)</option>
                                <option value="HRV">크로아티아 (CROATIA)</option>
                                <option value="KGZ">키르키스스탄 (KYRGYZSTAN)</option>
                                <option value="KIR">키리바시 (KIRIBATI)</option>
                                <option value="CYP">키프로스 (CYPRUS)</option>
                                <option value="TJK">타지키스탄 (TAJIKISTAN)</option>
                                <option value="TZA">탄자니아 (TANZANIA)</option>
                                <option value="THA">태국 (THAILAND)</option>
                                <option value="TCA">터크스 케이커스제도 (TURKS CAICOS IS)</option>
                                <option value="TUR">터키 (TURKEY)</option>
                                <option value="TGO">토고 (TOGO)</option>
                                <option value="TON">통가 (TONGA)</option>
                                <option value="TKM">투르크메니스탄 (TURKMENISTAN)</option>
                                <option value="TUV">투발루 (TUVALU)</option>
                                <option value="TUN">튀니지 (TUNISIA)</option>
                                <option value="TTO">트리니다드토바고 (TRINIDAD TOBAGO)</option>
                                <option value="PAN">파나마 (PANAMA)</option>
                                <option value="PRY">파라과이 (PARAGUAY)</option>
                                <option value="FRO">파로제도 (FAROE ISLAND)</option>
                                <option value="PAK">파키스탄 (PAKISTAN)</option>
                                <option value="PNG">파푸아뉴기니 (PAPUA NEW GUINEA)</option>
                                <option value="PLW">팔라우 (PALAU ISLANDS)</option>
                                <option value="PSE">팔레스타인 (PALESTINIAN TERRITORY, OCCUPIED)</option>
                                <option value="PER">페루 (PERU)</option>
                                <option value="PRT">포르투갈 (PORTUGAL)</option>
                                <option value="FLK">포클랜드 (FALKLAND)</option>
                                <option value="POL">폴란드 (POLAND)</option>
                                <option value="PYF">폴리네시아(프) (FRENCH POLYNESIA)</option>
                                <option value="PRI">푸에르토리코 (PUERTO RICO)</option>
                                <option value="FRA">프랑스 (FRANCE)</option>
                                <option value="FJI">피지 (FIJI)</option>
                                <option value="FIN">핀란드 (FINLAND)</option>
                                <option value="PHL">필리핀 (PHILIPPINES)</option>
                                <option value="HUN">헝가리 (HUNGARY)</option>
                                <option value="AUS">호주 (AUSTRALIA)</option>
                                <option value="HKG">홍콩 (HONG KONG)</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <table class="options_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <td>회원 아이디</td>
                        <td><input type="text" name="id" class="id cursor childId${i}" style="text-transform:uppercase;"><input type="button" value="확인"
                                class="butt_edit childEdit${i}" onclick="child_memberOk(${i})"></td>
                        <td>추가할인<img src="/userpage/lib/img/discount.PNG" alt="" class="discount"></td>
                        <td>
                            <select name="discount" title="추가할인 선택" class="p90 cursor childDiscount${i}"
                                onchange="fnBlockDupDisc(this, '', 'DIS1,DIS2,DIS3,DIS4,DIS5,DIS9')">
                                <option value="">선택</option>
                                <optgroup label="<운임 40% / 공항세 50% 할인>" groupcd="DIS1">
                                    <option value="DIS">1~4급 장애인 본인 또는 중증 장애인 본인</option>
                                    <option value="DISAT">1~3급 장애인 동반보호자 1명 또는 중증 장애인의 동반보호자 1명</option>
                                    <option value="NM13AT">1~3급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM17">국가유공상이자 본인</option>
                                    <option value="NM518J">5/18 민주유공 부상자 본인</option>
                                    <option value="NMETC">국가유공자(고엽제)</option>
                                </optgroup>
                                <optgroup label="<운임 40% 할인>" groupcd="DIS2">
                                    <option value="NM1">국가유공자 본인 및 유족</option>
                                    <option value="NM14AT">4급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM2">독립유공자 본인</option>
                                    <option value="NM22">독립유공자 유족</option>
                                    <option value="NM2AT">독립유공자 동반보호자 1명</option>
                                    <option value="NM518">5/18 민주유공자 본인</option>
                                    <option value="NM518AT">5/18 민주유공자 유족</option>
                                </optgroup>
                                <optgroup label="<운임 10% 할인>" groupcd="DIS5">
                                    <option value="JIR1">제주도민</option>
                                    <option value="JIR2">재외 제주도민</option>
                                    <option value="JIR3">명예 제주도민 및 배우자</option>
                                    <option value="MIL">국방부 소속 군장병</option>
                                    <option value="MIL2">군인 공무원</option>
                                    <option value="MIL3">군무원</option>
                                </optgroup>
                                <optgroup label="<공항세 50% 할인>" groupcd="DIS6">
                                    <option value="DIS56">5~6급 장애인 본인 또는 경증 장애인 본인</option>
                                    <option value="ETC1">고엽제 피해자</option>
                                    <option value="ETC2">우수 숙련기술자</option>
                                    <option value="ETC3">숙련기술자</option>
                                    <option value="ETC4">대한민국명장</option>
                                    <option value="ETC5">전국기능경기대회입상자</option>
                                    <option value="ETC6">국제기능올림픽입상자</option>
                                    <option value="ETC7">기초생활수급대상자</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }
    function babys(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper" class="babyTableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">유아 ${i}</p><input type="checkbox" class="userCheck">
                            <p class="check_txt">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required
                                class="name name1 cursor babyFirstName${i}"><input type="text" placeholder="이름"
                                name="last_name" value="" required class="name name2 cursor babyLastName${i}">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="babyGender${i}" class="babyGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="babyGender${i}" class="babyGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor babyBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor babyNation${i}">
                                <option value=""></option>
                                <option value="KOR" selected="selected">한국 (REPUBLIC OF KOREA)</option>
                                <option value="JPN">일본 (JAPAN)</option>
                                <option value="GHA">가나 (GHANA)</option>
                                <option value="GUY">가이아나 (GUYANA)</option>
                                <option value="GAB">가봉 (GABON)</option>
                                <option value="GMB">감비아 (GAMBIA)</option>
                                <option value="GLP">과들루프 (GUADELOUPE)</option>
                                <option value="GTM">과테말라 (GUATEMALA)</option>
                                <option value="GUM">괌 (GUAM)</option>
                                <option value="GRD">그레나다 (GRENADA)</option>
                                <option value="GEO">그루지아 (GEORGIA)</option>
                                <option value="GRC">그리스 (GREECE)</option>
                                <option value="GRL">그린란드 (GREENLAND)</option>
                                <option value="GIN">기니 (GUINEA)</option>
                                <option value="GNB">기니 (GUINEA BISSAU)</option>
                                <option value="GUF">기아나(프) (FRENCH GUIANA)</option>
                                <option value="NAM">나미비아 (NAMIBIA)</option>
                                <option value="NRU">나우루 (NAURU)</option>
                                <option value="NGA">나이지리아 (NIGERIA)</option>
                                <option value="ZAF">남아프리카공화국 (REP SOUTH AFRICA)</option>
                                <option value="NLD">네덜란드 (NETHERLANDS)</option>
                                <option value="NPL">네팔 (NEPAL)</option>
                                <option value="NOR">노르웨이 (NORWAY)</option>
                                <option value="NFK">노퍽 (NORFOLK ISLAND)</option>
                                <option value="NCL">누벨칼레도니 (NEW CALEDONIA)</option>
                                <option value="NZL">뉴질랜드 (NEW ZEALAND)</option>
                                <option value="NIU">니우에 (NIUE)</option>
                                <option value="NER">니제르 (NIGER)</option>
                                <option value="NIC">니카라과 (NICARAGUA)</option>
                                <option value="TWN">대만 (TAIWAN)</option>
                                <option value="DNK">덴마크 (DENMARK)</option>
                                <option value="DOM">도미니카공화국 (DOMINICAN REP)</option>
                                <option value="DMA">도미니카연방 (DOMINICA)</option>
                                <option value="DEU">독일 (GERMANY)</option>
                                <option value="TLS">동티모르 (EAST TIMOR)</option>
                                <option value="LAO">라오스 (LAOS)</option>
                                <option value="LVA">라트비아 (LATVIA)</option>
                                <option value="RUS">러시아 (RUSSIAN FED)</option>
                                <option value="LBN">레바논 (LEBANON)</option>
                                <option value="LSO">레소토 (LESOTHO)</option>
                                <option value="ROU">루마니아 (ROMANIA)</option>
                                <option value="LUX">룩셈르완다 (RWANDA)</option>
                                <option value="LBR">리베리아 (LIBERIA)</option>
                                <option value="LBY">리비아 (LIBYAN)</option>
                                <option value="LTU">리투아니아 (LITHUANIA)</option>
                                <option value="MDG">마다가스카르 (MADAGASCAR)</option>
                                <option value="MTQ">마르티니크 (MARTINIQUE)</option>
                                <option value="MHL">마샬제도 (MARSHALL ISLANDS)</option>
                                <option value="MAC">마카오 (MACAO)</option>
                                <option value="MKD">마케도니아 (MACEDONIA)</option>
                                <option value="MWI">말라위 (MALAWI)</option>
                                <option value="MYS">말레이시아 (MALAYSIA)</option>
                                <option value="MLI">말리 (MALI)</option>
                                <option value="MEX">멕시코 (MEXICO)</option>
                                <option value="MCO">모나코 (MONACO)</option>
                                <option value="MAR">모로코 (MOROCCO)</option>
                                <option value="MUS">모리셔스 (MAURITIUS)</option>
                                <option value="MRT">모리타니 (MAURITANIA)</option>
                                <option value="MOZ">모잠비크 (MOZAMBIQUE)</option>
                                <option value="MNE">몬테네그로 (REPUBLIC OF MENTENEGRO)</option>
                                <option value="MSR">몬트세라트 (MONTSERRAT)</option>
                                <option value="MDA">몰도바 (MOLDOVA)</option>
                                <option value="MDV">몰디브 (MALDIVES)</option>
                                <option value="MLT">몰타 (MALTA)</option>
                                <option value="MNG">몽골 (MONGOLIA)</option>
                                <option value="USA">미국 (U S A)</option>
                                <option value="MMR">미얀마 (MYANMAR)</option>
                                <option value="FSM">미크로네시아연방 (MICRONESIA)</option>
                                <option value="VUT">바누아투 (VANUATU)</option>
                                <option value="BHR">바레인 (BAHRAIN)</option>
                                <option value="BRB">바베이도스 (BARBADOS)</option>
                                <option value="VAT">바티칸 (Vatican City)</option>
                                <option value="BHS">바하마 (BAHAMAS)</option>
                                <option value="BGD">방글라데시 (BANGLADESH)</option>
                                <option value="BMU">버뮤다 (BERMUDA)</option>
                                <option value="VIR">버진제도(미) (US VIRGIN IS)</option>
                                <option value="VGB">버진제도(영) (BRITISH VIRGIN IS)</option>
                                <option value="VEN">베네수엘라 (VENEZUELA)</option>
                                <option value="BEN">베넹 (BENIN PEOPLES REP)</option>
                                <option value="VNM">베트남 (VIET NAM)</option>
                                <option value="BEL">벨기에 (BELGIUM)</option>
                                <option value="BLR">벨로루시 (BELARUS)</option>
                                <option value="BLZ">벨리즈 (BELIZE)</option>
                                <option value="BIH">보스니아 (BOSNIA HERZ)</option>
                                <option value="BWA">보츠와나 (BOTSWANA)</option>
                                <option value="BOL">볼리비아 (BOLIVIA)</option>
                                <option value="BDI">부룬디 (BURUNDI)</option>
                                <option value="BFA">부르키나파소 (BURKINA FASO)</option>
                                <option value="BTN">부탄 (BHUTAN)</option>
                                <option value="BGR">불가리아 (BULGARIA)</option>
                                <option value="BRA">브라질 (BRASIL)</option>
                                <option value="BRN">브루나이 (BRUNEI)</option>
                                <option value="WSM">사모아 (INDEPENDENT SAMOA)</option>
                                <option value="ASM">사모아(미) (AMERICAN SAMOA)</option>
                                <option value="SAU">사우디아라비아 (SAUDI ARABIA)</option>
                                <option value="SMR">산마리노 (SAN MARINO)</option>
                                <option value="STP">상투메 프린시페 (SAO TOME PRINCIPE)</option>
                                <option value="SEN">세네갈 (SENEGAL)</option>
                                <option value="SRB">세르비아 (REPUBLIC OF SERBIA)</option>
                                <option value="SYC">세이셜 (SEYCHELLES)</option>
                                <option value="LCA">세인트루시아 (SAINT LUCIA)</option>
                                <option value="VCT">세인트빈센트 그레나 (ST VINCENT)</option>
                                <option value="KNA">세인트키츠 네비스 (ST KITTS NEVIS)</option>
                                <option value="SHN">세인트헬레나 (ST HELENA)</option>
                                <option value="SOM">소말리아 (SOMALIA)</option>
                                <option value="SLB">솔로몬제도 (SOLOMON ISLANDS)</option>
                                <option value="SDN">수단 (SUDAN)</option>
                                <option value="SUR">수리남 (SURINAME)</option>
                                <option value="LKA">스리랑카 (SRI LANKA)</option>
                                <option value="SWZ">스와질랜드 (SWAZILAND)</option>
                                <option value="SWE">스웨덴 (SWEDEN)</option>
                                <option value="CHE">스위스 (SWITZERLAND)</option>
                                <option value="ESP">스페인 (SPAIN)</option>
                                <option value="SVK">슬로바키아 (SLOVAKIA)</option>
                                <option value="SVN">슬로베니아 (SLOVENIA)</option>
                                <option value="SYR">시리아 (SYRIA)</option>
                                <option value="SLE">시에라리온 (SIERRA LEONE)</option>
                                <option value="SGP">싱가폴 (SINGAPORE)</option>
                                <option value="ARE">아랍에미리트 (UNITED ARAB EMRTS)</option>
                                <option value="ABW">아루바 (ARUBA)</option>
                                <option value="ARM">아르메니아 (ARMENIA)</option>
                                <option value="ARG">아르헨티나 (ARGENTINA)</option>
                                <option value="ISL">아이슬랜드 (ICELAND)</option>
                                <option value="HTI">아이티 (HAITI)</option>
                                <option value="IRL">아일랜드 (IRELAND)</option>
                                <option value="AZE">아제르바이잔 (AZERBAIJAN)</option>
                                <option value="AFG">아프가니스탄 (AFGHANISTAN)</option>
                                <option value="AND">안도라 (ANDORRA)</option>
                                <option value="ANT">안틸레스(네덜란드) (ANTILLES)</option>
                                <option value="ALB">알바니아 (ALBANIA)</option>
                                <option value="DZA">알제리 (ALGERIA)</option>
                                <option value="AGO">앙골라 (ANGOLA)</option>
                                <option value="EST">에스토니아 (ESTONIA)</option>
                                <option value="ECU">에쿠아도르 (ECUADOR)</option>
                                <option value="ETH">에티오피아 (ETHIOPIA)</option>
                                <option value="ATG">엔티가 바부다 (ANTIGUA BARBUDA)</option>
                                <option value="SLV">엘살바도르 (EL SALVADOR)</option>
                                <option value="AIA">엥귈라 (ANGUILLA)</option>
                                <option value="GBR">영국 (UNITED KINGDOM)</option>
                                <option value="IOT">영국령인도양식민지 (BRITISH INDIAN OCEAN TERRITORY)</option>
                                <option value="YEM">예멘 (YEMEN ARAB REP)</option>
                                <option value="OMN">오만 (OMAN)</option>
                                <option value="AUT">오스트리아 (AUSTRIA)</option>
                                <option value="HND">온두라스 (HONDURAS)</option>
                                <option value="JOR">요르단 (JORDAN)</option>
                                <option value="UGA">우간다 (UGANDA)</option>
                                <option value="URY">우루과이 (URUGUAY)</option>
                                <option value="UZB">우즈베키스탄 (UZBEKISTAN)</option>
                                <option value="UKR">우크라이나 (UKRAINE)</option>
                                <option value="WLF">웰리스 푸투나 (WALLIS AND FUTUNA)</option>
                                <option value="YUG">유고슬라비아 (YUGOSLAVIA)</option>
                                <option value="IRQ">이라크 (IRAQ)</option>
                                <option value="IRN">이란 (IRAN)</option>
                                <option value="ISR">이스라엘 (ISRAEL)</option>
                                <option value="EGY">이집트 (EGYPT)</option>
                                <option value="ITA">이탈리아 (ITALY)</option>
                                <option value="IND">인도 (INDIA)</option>
                                <option value="IDN">인도네시아 (INDONESIA)</option>
                                <option value="JAM">자메이카 (JAMAICA)</option>
                                <option value="COD">자이르 (CONGO KINSHASA)</option>
                                <option value="ZMB">잠비아 (ZAMBIA)</option>
                                <option value="GNQ">적도기니 (EQUATORIAL GUINEA)</option>
                                <option value="CHN">중국 (MAINLAND CHINA)</option>
                                <option value="CAF">중앙아프리카공화국 (CNTRAL AFRICN REP)</option>
                                <option value="DJI">지부티 (DJIBOUTI)</option>
                                <option value="GIB">지브랄타 (GIBRALTAR)</option>
                                <option value="ZWE">짐바브웨 (ZIMBABWE)</option>
                                <option value="TCD">차드 (CHAD)</option>
                                <option value="CZE">체코 (CZECH REP)</option>
                                <option value="CHL">칠레 (CHILE)</option>
                                <option value="CMR">카메룬 (REPUBLIC CAMEROON)</option>
                                <option value="CPV">카보베르데 (REP OF CAPE VERDE)</option>
                                <option value="KAZ">카자흐스탄 (KAZAKHSTAN)</option>
                                <option value="QAT">카타르 (QATAR)</option>
                                <option value="KHM">캄보디아 (KAMPUCHEA)</option>
                                <option value="CAN">캐나다 (CANADA)</option>
                                <option value="KEN">케냐 (KENYA)</option>
                                <option value="CYM">케이맨제도 (CAYMAN IS)</option>
                                <option value="COM">코모로 (COMOROS)</option>
                                <option value="CRI">코스타리카 (COSTA RICA)</option>
                                <option value="CCK">코코스킬링제도 (COCOS ISL)</option>
                                <option value="CIV">코트디부와르 (COTE D IVOIRE)</option>
                                <option value="COL">콜롬비아 (COLOMBIA)</option>
                                <option value="COG">콩고 (CONGO BRAZZAVILLE)</option>
                                <option value="CUB">쿠바 (CUBA)</option>
                                <option value="KWT">쿠웨이트 (KUWAIT)</option>
                                <option value="COK">쿡제도 (COOK ISLANDS)</option>
                                <option value="HRV">크로아티아 (CROATIA)</option>
                                <option value="KGZ">키르키스스탄 (KYRGYZSTAN)</option>
                                <option value="KIR">키리바시 (KIRIBATI)</option>
                                <option value="CYP">키프로스 (CYPRUS)</option>
                                <option value="TJK">타지키스탄 (TAJIKISTAN)</option>
                                <option value="TZA">탄자니아 (TANZANIA)</option>
                                <option value="THA">태국 (THAILAND)</option>
                                <option value="TCA">터크스 케이커스제도 (TURKS CAICOS IS)</option>
                                <option value="TUR">터키 (TURKEY)</option>
                                <option value="TGO">토고 (TOGO)</option>
                                <option value="TON">통가 (TONGA)</option>
                                <option value="TKM">투르크메니스탄 (TURKMENISTAN)</option>
                                <option value="TUV">투발루 (TUVALU)</option>
                                <option value="TUN">튀니지 (TUNISIA)</option>
                                <option value="TTO">트리니다드토바고 (TRINIDAD TOBAGO)</option>
                                <option value="PAN">파나마 (PANAMA)</option>
                                <option value="PRY">파라과이 (PARAGUAY)</option>
                                <option value="FRO">파로제도 (FAROE ISLAND)</option>
                                <option value="PAK">파키스탄 (PAKISTAN)</option>
                                <option value="PNG">파푸아뉴기니 (PAPUA NEW GUINEA)</option>
                                <option value="PLW">팔라우 (PALAU ISLANDS)</option>
                                <option value="PSE">팔레스타인 (PALESTINIAN TERRITORY, OCCUPIED)</option>
                                <option value="PER">페루 (PERU)</option>
                                <option value="PRT">포르투갈 (PORTUGAL)</option>
                                <option value="FLK">포클랜드 (FALKLAND)</option>
                                <option value="POL">폴란드 (POLAND)</option>
                                <option value="PYF">폴리네시아(프) (FRENCH POLYNESIA)</option>
                                <option value="PRI">푸에르토리코 (PUERTO RICO)</option>
                                <option value="FRA">프랑스 (FRANCE)</option>
                                <option value="FJI">피지 (FIJI)</option>
                                <option value="FIN">핀란드 (FINLAND)</option>
                                <option value="PHL">필리핀 (PHILIPPINES)</option>
                                <option value="HUN">헝가리 (HUNGARY)</option>
                                <option value="AUS">호주 (AUSTRALIA)</option>
                                <option value="HKG">홍콩 (HONG KONG)</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }




    if(memIndex == 0){ // 회원이 아니라면
        if (adult === 0){
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
        }else{
            for(let i = baby ; i > 0 ; i--){
                babys(i);
            }
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            for(let i = adult ; i > 0 ; i--){
                adults(i);
            }
        }
        $('.userCheck').css('display','none');
        $('.check_txt').css('display','none');

    }else{ // 회원이라면
        $('.input_email').val(memEmail);
        $('#countryNum').val(memHpNation).prop("selected",true);
        $('.input_phone').val(memHp);
        if (adult === 0){
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            $('.childFirstName1').val(memKorFirstName);
            $('.childLastName1').val(memKorLastName);
            $("input:radio[name='childGender1'][value='" + memGender + "']").attr('checked', true);
            $('.childBirth1').val(memBirth);
            $('.childNation1').val(memNation).prop("selected",true);
            $('.childId1').val(memUserId.toUpperCase());
            $('.')
        }else{
            for(let i = baby ; i > 0 ; i--){
                babys(i);
            }
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            for(let i = adult ; i > 0 ; i--){
                adults(i);
            }
            $('.adultFirstName1').val(memKorFirstName);
            $('.adultLastName1').val(memKorLastName);
            $("input:radio[name='adultGender1'][value='" + memGender + "']").attr('checked', true);
            $('.adultBirth1').val(memBirth);
            $('.adultNation1').val(memNation).prop("selected",true);
            $('.adultId1').val(memUserId.toUpperCase());
        }




    }












    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })

    $(".arrow_img").on('click', function () {
        $(".arrow_img").css("display", "none");
        $(".trip_info2").slideDown(200);
        $(".arrow_up_img").css("display", "block");
    })
    $(".arrow_up_img").on('click', function () {
        $(".arrow_img").css("display", "block");
        $(".arrow_up_img").css("display", "none");
        $(".trip_info2").slideUp(200);
    })

    $("select .KRW").on('select', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })
    $("select .USD").on('click', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })

    $(".list1_wrap").on("click", function () {
        $(".list2_wrap").focus();
    })



    $(window).scroll(function () {
        let y = $(".contentswrap").offset().top;    //고정할 메뉴
        if (window.pageYOffset <= $(".contentswrap").offset().top) {
            $(".fix_trip_info").css("position", "fixed");
            $(".fix_trip_info").css("top", y);
        } else {
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "absolute");
        }
    });

    /*하단 총액 모달창 */

    $(".info_table_wrap").css("overflow", "hidden");
    $(".info_table_wrap").css("overflow-x", "none");

    $(".img").on('click', () => {
        $(".img").css("display", "none");
        $(".img2").css("display", "block");
        $("#modal_totP_wrap").fadeIn();
        $(".fix_modal").fadeIn();
    })
    $(".close").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })
    $(".img2").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })

    /*자세히 보기 */
    $(".det1").on('click', () => {
        $(".detD1").css("display", "inline-block");
    })

    $(".det2").on('click', () => {
        $(".detD2").css("display", "inline-block");
    })

    $(".plus_1").on('click', () => {
        $(".info_table_wrap").css("overflow", "scroll");
        $(".info_table_wrap").css("overflow-x", "hidden");
        $(".info_table_wrap").animate({ scrollTop: 300 }, 600);
        $(".plus_1").css("display", "none");
        $(".minus_1").css("display", "inline-block");
    })
    $(".minus_1").on('click', () => {
        $(".info_table_wrap").css("overflow", "hidden");
        $(".info_table_wrap").css("overflow-x", "none");
        $(".plus_1").css("display", "inline-block");
        $(".minus_1").css("display", "none");
    })


    $(window).scroll(function () {
        let y = $(".fix_bott_wrap").offset().top - 650;
        let h = $(document).scrollTop();
        if (window.pageYOffset <= y) {
            $(".fix_bott").css("position", "fixed");
            $(".fix_bott").css("bottom", "0px");
            $("#modal_totP_wrap").css("position", "fixed");
            $("#modal_totP_wrap").css("top", "-100px");
            $(".fix_trip_info").css("position", "fixed");
        } else {
            $(".fix_bott").css("position", "absolute");
            $("#modal_totP_wrap").css("position", "absolute");
            $("#modal_totP_wrap").css("top", y - 280);
            $(".fix_trip_info").css("position", "absolute");
        }
    });



})

// 수정 모달 창 ***********************
$(() => {
    $(".trip_edit_butt").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "block");
        $("body").css("overflow", "hidden");
    });
    $(".modal_edit_close_btn").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "none");
        $("body").css("overflow", "");
    });
});

$(() => {
    $("#round").on("click", function () {
        $(".round_wrap").css("display", "block");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#oneway").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "block");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#multi").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "block");
        $(".edit_jour_wrap").css("height", "520px");
    });
});

//person-layer
$(() => {
    $(".person_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".person_down_img").css({ display: "none" });
        $(".person_up_img").css({ display: "inline-block" });
        $(".person_pop_layer").slideDown("fast");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img").css({ display: "inline-block" });
        $(".go_up_img").css({ display: "none" });
        $(".go_layer").slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ display: "inline-block" });
        $(".go_up_img2").css({ display: "none" });
        $(".go_layer2").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_up_img").css({ display: "none" });
        $(".arrive_layer").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ display: "inline-block" });
        $(".arrive_up_img2").css({ display: "none" });
        $(".arrive_layer2").slideUp(50);
    });
});

// go-layer
$(() => {
    // 옵션1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();

        $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt").addClass("on");
        $(".go_layer").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 도착지1 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt2").addClass("on");
        $(".go_layer2").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 도착지2 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);

        // 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
});

// arrive-layer
$(() => {
    // 옵션 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt").addClass("on");
        $(".arrive_layer").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt2").addClass("on");
        $(".arrive_layer2").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        // 다구간 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
    $(".person_pop_layer").on("click", function (e) {
        e.stopPropagation();
    });
});

// 화면 클릭
$(() => {
    $("body").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // 사람 수 선택 닫기
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });
});

function fnSetPaxCountDown(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
        iPaxCount = iAdultCount + iChildCount;

    switch (strPaxType) {
        case "ADULT":
            --iAdultCount;
            if (iAdultCount >= 0) {
                --iPaxCount;
            }

            if (iInfantCount > iAdultCount) {
                iInfantCount = iAdultCount;
            }

            if (iAdultCount <= 0) {
                iAdultCount = 0;
                iInfantCount = 0;
            }
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
        case "CHILD":
            --iChildCount;
            if (iChildCount >= 0) {
                --iPaxCount;
            }
            if (iChildCount <= 0) {
                iChildCount = 0;
            }

            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            --iInfantCount;
            if (iInfantCount <= 0) {
                iInfantCount = 0;
            }

            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function fnSetPaxCountUp(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
        iPaxCount = iAdultCount + iChildCount;

    // Count 증감
    switch (strPaxType) {
        case "ADULT":
            ++iAdultCount;
            ++iPaxCount;
            console.log(iAdultCount)
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            break;
        case "CHILD":
            ++iChildCount;
            ++iPaxCount;
            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            ++iInfantCount;
            if (iInfantCount > iAdultCount && iAdultCount == 0) {
                alert('소아는 성인 한 명이 같이 동반 해야함!')
                break;
            }
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function submit() {

    var
        iAdultCount = parseInt($('.round_wrap').find('strong[name=adultPaxCnt]').text()), // 성인
        iChildCount = parseInt($('.oneway_wrap').find('strong[name=childPaxCnt]').text()), // 소아
        iInfantCount = parseInt($('.multi_wrap').find('strong[name=infantPaxCnt]').text()); // 유아

    console.log(iAdultCount);
    console.log(iChildCount);
    console.log(iInfantCount)

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount + ' 유아 ' + iInfantCount);
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount);
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 유아 ' + iInfantCount);
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text('소아 ' + iChildCount);
    }

    // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
    // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
    $('.adultPaxCnt').val(iAdultCount);
    $('.childPaxCnt').val(iChildCount);
    $('.infantPaxCnt').val(iInfantCount);

    $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    $(".person_down_img").css({ "display": "inline-block" });
    $(".person_up_img").css({ "display": "none" });
    $('.person_pop_layer').slideUp(50);

    $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass('on');
    $(".go_layer").slideDown("fast");
}

$(function () {
    $(".infant_modal").hide();
    $(".baby_info_btn").click(function () {
        $(".child_modal").hide();
        $(".infant_modal").fadeIn(200);
        $(".infant_modal").click(function () {
            $(".infant_modal").fadeOut(200);
        });
    });

    $(".child_modal").hide();
    $(".infant_modal").hide();
    $(".child_info_btn").click(function () {
        $(".child_modal").fadeIn(200);
        $(".child_modal").click(function () {
            $(".child_modal").fadeOut(200);
        });
    });
});

function comewhatday() {
    $(".whatday").html("오는날");
}
function gowhatday() {
    $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
    $(".modal_container").fadeIn(200);
    $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
    // 왕복, 편도 출발지 지정
    $(".go_layer")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt").val(str);
            $(".go_layer").slideUp(50);
            $(".arrive_layer").slideDown(100);
            $(".go_select_opt").removeClass("on");
            $(".arrive_select_opt").addClass("on");
            bbb = "y";
        });
    // 왕복, 편도 도착지 지정
    $(".arrive_layer")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt").val(str);
            ccc = "y";
        });
    // 왕복 달력 모달
    $(".go_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("가는날");
        d;
    });
    $(".come_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("오는날");
    });

    // 편도 달력 모달
    $(".go_date2").on("click", function () {
        $(".cal2").css({ display: "flex" });
        $(".whatday").html("가는날");
    });

    // 다구간 출발지 지정
    $(".go_layer2")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt2").val(str);
            $(".go_layer2").slideUp(50);
            $(".arrive_layer2").slideDown(100);
            $(".go_select_opt2").removeClass("on");
            $(".arrive_select_opt2").addClass("on");
            bbb = "y";
        });
    // 다구간 도착지 지정
    $(".arrive_layer2")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt2").val(str);
            ccc = "y";
        });
    // 다구간1 달력 모달
    $(".go_date3").on("click", function () {
        if (bbb == "n" && ccc == "n") {
            departure();
            $(".cal3").css({ display: "none" });
        } else if (bbb == "y" && ccc == "n") {
            arrive();
        } else {
            $(".cal3").css({ display: "flex" });
            $(".whatday").html("가는날");
        }
    });

    // 달력 X 버튼
    $(".x_box").on("click", function () {
        $(".cal").css({ display: "none" });
        $(".cal2").css({ display: "none" });
        $(".cal3").css({ display: "none" });
    });

    // 모달모음 확인 버튼
    $(".btn_cancel").on("click", function () {
        $(".modal_container").fadeOut(200);
    });
});

function updateTrip() {
    let person = $(".person_cnt").text();
    let go1 = $("#go_area1").text();
    let arr1 = $("#arr_area1").text().trim();
    let godate = $("#godate").text();

    let sub = godate.substr(5, 14);

    $(".person_num").text(person);
    $(".go_default").attr("value", go1);
    $(".arrive_default").attr("value", arr1);
    $(".go_date_default").attr("value", sub);
}