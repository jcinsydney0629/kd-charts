/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

!(function(B, A) {
  'function' == typeof define && define.amd
    ? define(['exports', 'echarts'], A)
    : 'object' == typeof exports && 'string' != typeof exports.nodeName
    ? A(exports, require('echarts'))
    : A({}, B.echarts);
})(this, function(B, A) {
  var D = function(B) {
    'undefined' != typeof console &&
      console &&
      console.error &&
      console.error(B);
  };
  A
    ? A.registerMap
      ? A.registerMap('上海', {
          type: 'FeatureCollection',
          features: [
            {
              id: '310101',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@AHV@BDCPEPLENFHCJHFBNCAGBGXWFIBGCGMUKKCCcGCDGBALCPIAAPGR',
                ],
                encodeOffsets: [[124373, 31970]],
              },
              properties: {
                cp: [121.490317, 31.222771],
                name: '黄浦区',
                childNum: 1,
              },
            },
            {
              id: '310104',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@CEAMMAA@C@AFA@@BC@ABC@@BD@@BH@@BB@EHDDCBECADGEEAEBFNET]CMRELQjOEGRFBAHDBAHH@@B@BDA`H@F@BC@AB@FD@DD@@@CH@DDAFDD^LEPF@DFTDPHHQBOJBDOBKHADCOGCEAE@EFOBMAEUW@GBEHILMBE@KGM',
                ],
                encodeOffsets: [[124381, 31859]],
              },
              properties: {
                cp: [121.43752, 31.179973],
                name: '徐汇区',
                childNum: 1,
              },
            },
            {
              id: '310105',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@AACE@FO]KCCBECCG@@D@@CCmBSAcKG@EBAEGC@DC@QE@CA@@BEBMTNFAFDBA`D@BDA@AA@FFBBLD@@@IBDBABDB@@DBADB@CHA@@DC@C@@@BBABFDH@AHD@ACDA@FD@BCA@@CJCNWJ@BCHAFEF@XCV@DFH@VFBBCFD@HEFFFBB@@IDAJFBABIFK',
                ],
                encodeOffsets: [[124354, 31964]],
              },
              properties: {
                cp: [121.4222, 31.218123],
                name: '长宁区',
                childNum: 1,
              },
            },
            {
              id: '310106',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@AB@PCJBNG@ABBDBB@DNBAJJ@@FB@@H@@@DF@ENB@BDD@BAT@BENDFDPB@AF@A]G@BOCKCEBA@G@KBEDCLMVQ@EACDECABCDKECGDMEKFFODOACU@BGOGUCELAJABIECBBNFHJBTLHB@BADDD@FB@@DC@BHOVUJCFIG',
                ],
                encodeOffsets: [[124340, 32022]],
              },
              properties: {
                cp: [121.448224, 31.229003],
                name: '静安区',
                childNum: 1,
              },
            },
            {
              id: '310107',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@DB@DHBBCDBB@A@DF@@DFDDHGBDDALZCB@@EBA@ACQ@@DGBEFBB@FD@J@BFMBCCCDID@AODAEIDBDEBABBB@DC@AF@@AFGACBADBB@@NFADD@@BB@B@BAB@@@BBDA@HBB@AJ@@AD@@BB@AFHBDCJFHBGQAAJA@ALCBBF@@AB@@BD@@@JABDABD@@BHBBBNACEJA@ADAAA@B@ADAAAJBIQB@FCBBD@AGJ@@EJA@EHADDAB@BFANNDEVIPUAGD@@CA@@ECCBC@AGASKIAEGACA@EAEEA@EFC@DEAAUEG@CEU@WDE@EFGBADI@MV',
                ],
                encodeOffsets: [[124267, 31987]],
              },
              properties: {
                cp: [121.392499, 31.241701],
                name: '普陀区',
                childNum: 1,
              },
            },
            {
              id: '310109',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@OHWVFBABIKK@MJCJGBKV[C@@I[AOEODCACCCLADDBCFBD@FURQT@J@F@HABDFDLAPH@BTVCLBBE',
                ],
                encodeOffsets: [[124402, 32064]],
              },
              properties: {
                cp: [121.491832, 31.26097],
                name: '虹口区',
                childNum: 1,
              },
            },
            {
              id: '310110',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@JD@U\\ALIHID@NLLAJABUEGX@PVA@ZDDADGFX`ZKDHFAFHpSNGDCDGDM@cBGL[BKAGEGMOcY[GWA',
                ],
                encodeOffsets: [[124433, 31997]],
              },
              properties: {
                cp: [121.522797, 31.270755],
                name: '杨浦区',
                childNum: 1,
              },
            },
            {
              id: '310112',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@EBAD@@A@E_GCB@A@AG@BGCABGEAHQPFRiFKNQ^DFSEMFAFBHFBCFDDACCFGA@@AG@@AC@@AD@BAD@@AB@BED@B@F@B@FBBNDFLCDBCBFB@DFG@CBBABDB@CDBAFCB@DABD@B@DB@BD@@B@BB@B@@FJ@DKLFB@DMDBBABBCFDB@@HB@BBABBDCBGNBDAB@@BPDBAF@@AB@@AB@@CDB@BF@DGB@@CD@FDADF@BADDDCBBDCAAC@BCFEAAB@FECABC@ADBBEB@@EGCABAB@@CAA@CAIABAAA@@ECDGD@BCBBD@BBHBFALABAFBD@@CGA@BC@BCEAA@A@@AEA@@AAA@G@DCG@CCBAAA@ADBDAEAC@ACE@BCC@BG@ACBBAEAAA@B@CECDEAEBAB@BDB@DBD@BBD@FDBGBBFCAABCBDBCEC@UBACA@AAA@ABB@CCCE@AA@ADCD@@BF@@FB@@BDB@CDB@ED@DFB@ABB@HDAADCBE@CCACC@CACIABA@@@BD@@AD@DICABCECFA@AMEO@@CC@ABA@@ABA@GCACBADCDA@@BAAAB@BICADE@@BEAABC@GHC@E@@FD@@BA@CFC@@BC@AASEKG@ACAIZBFGDYCIAKGKAU@OCGAKIMIMCOEeCWOBQHI@C@CBB\\HBPTBHJHABECM@ADBB@J@F@D@B@FBDAD@NBBBN@T@DBBADFCFDDGTDJFAFNB@DB@EFFBADD@@DFDDCDBADERCDAB@DELGAADMCEPHB@AB@@BHF@@GNQV@DEJCDC@ADD@@BCFABADA@@FCB@DCD@DABA@EJEF@BEJCLGJABCHAB@BABCFCB@BED@BA@@BABADGFAAA@@CAAKGCAKAUTC@CDDBADIHDFCF@@CDBDCHDBAHGDBDCDABCAABAFKACBDDABBF@@@BHBBDDBC@BDFFFBBDD@@AH@HB@EFC@ABC@FFCFBB@LCFBBAEGFEDABGJMJCL@XGNFH@PDBB@FHDBAAA@@D@D@@CB@DGA@BCCA@@CABACAJA@@C@AKEA@EBBB@ACC@B_CABEMENSFA@AB@@DRFD@@CHDBFFAH@dLTBjA',
                ],
                encodeOffsets: [[124327, 31940]],
              },
              properties: {
                cp: [121.375972, 31.111658],
                name: '闵行区',
                childNum: 1,
              },
            },
            {
              id: '310113',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@JE@@BOAECMCAFS@ABC@ACA@FME@@C@@@GA@@EI@BIMA@CCA@CBAH@AMDI@OBACEEB@ABACCGB@FIB@FI@BHC@AAEDA@JRIABBCB@B@ABBCB@BIBDFMBAAGA@AC@BAACIB@@C@@AA@@BE@AAKD@BIBBBHRC@ICCCCDGABEA@@AC@@BI@@BAA@GCBAAA@ABBBCDAAEJFDB@P\\J@@FB@@DGA@FD@@DAAADCF@@ABBBCDDB@DF@CLCAEFEB@DG@@HD@DB@BB@@FHD@BADA@CFCFABDB@BED@BCDEFFBABB@ADG@GNCBFHAFA@@DCAIB@DB@@FBBEF^JBAH@AFD@A@@DA@@BFDABD@@JB@@BA@AD@DB@@FCJ@FA@C@ABAAABENDB@BCDCFG@ADDBEDDDABA@ADB@ADF@BD@BEACD@BCBJF@BABA@BBCFE@ABCLABBBAFEB@A@BCDEBADD@CBBBBAADBBD@B@BBADFADDDA@ED@ACB@FF@DFBBCB@@AC@@GF@B@AFD@@DB@@AD@@BD@\\PfK^I|]BAEGBE\\Q`W|i\\UdSXUBD@DFAEG\\UQQQY@QJONIVIEGEBCGYLW_HEBCCC@YUBAFKAUD',
                ],
                encodeOffsets: [[124384, 32068]],
              },
              properties: {
                cp: [121.489934, 31.398896],
                name: '宝山区',
                childNum: 1,
              },
            },
            {
              id: '310114',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@A@A@@AC@BCME@@AABCDAHBBE@@BED@@CAABAFAACJCBFPC@BJCDCDDNAAEI@C@@EAAFEHA@CR@BDB@FA@@DAKYCBACGHCCCE@@CEB@A@CAADGA@CCAADGB@DB@ADC@@ECBBDC@BGG@CCIC@EAAOCG@OEUHK@IDINAHCBEFFHABEAKDA@EAED@EAD@BED@FGAG@@BC@@AC@@DA@@CCBEA@DGAKFOB@CG@@BAA@CGCBAEA@CA@@DEA@FCFB@ABAAABAC@AAACFGEBCABCCABCCABCAB@@CC@ADGDEEC@EDCA@BA@BDA@ACEFECABC@@BB@BDC@AJIJCAADC@CGEB@@AB@BDF@JDD@DHBABD@B@@BCHE@@BC@@DCA@DC@@DDBADA@EDFBIPCFIIBCMAE@AJ@B@FAB@DAJDB@DDB@FD@@BCBBBB@@DABAB@DCBBBAHBB@FMCKB@HF@EHIACBE@BFCBBLAH@DD@@CD@D@BFNBCDGBAFTHBEBB@DB@@AJD@ANFABBBD@ABD@@ANDBDCD@BABA@ABLDCFDBF@ABC@ABDB@BFDADJDDCCDBDCDAAABBB@BC@ABA@ABC@@HA@C@@DJ@@DFB@BD@HB@AD@ABBDFA@HA@@CA@BDABOBMFAFB@ADBDAB\\LDAHBBADBHAPFJFAFBFFD@BJHRD@FHFNHDACCLADBH@DDFABHCB@BHJF@AJ@@FAFDB@AEFE@CBIHB@AC@@AA@DEHD@BD@ADB@BDB@AKD@@DBA@@@AD@DBBDBBDBD@@FDDBA@CDAHDBBHDADB@FA@BD@DCD@BFFCJD@DA@FBBDFADC@A@BFABEAABADKBAF@DEAAB@BA@AIEDA@ADCFB@AACE@BCA@BCB@BACCFCCABCH@DEDC@ACAFMBABBBAD@B@@EDI@EA@@CBCB@@AA@@IC@BAEC@AB@@CB@C@BEG@AB]IFEAA@EA@@CJADB@CB@BEEGDAHMH@BCA@BAEAFEDC@AFC@ACABALQGC@ECCE@@GH@@CFAFEDBDKE@@CCADCAABA@@DEBCBB@CC@@EHB@CA@@EI@GMEMICFIBBBABAAA',
                ],
                encodeOffsets: [[124249, 32046]],
              },
              properties: {
                cp: [121.250333, 31.383524],
                name: '嘉定区',
                childNum: 1,
              },
            },
            {
              id: '310115',
              type: 'Feature',
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    '@@bM²WLCļÑNI^_ÈïsJQ¶±`e`Z¡LDCsEWOWs@GBI\\wsYg|QNUBģFqAZHZB@@JHBAJFRA@BB@HABB@@J@HBDBLAJC@@BD@ABA@B@AD@FB@@BA@@BA@G@@FC@AB@DA@ABCAC@@DEA@DD@BDEF@FQJE@CAGJA@ABCAEDBDGHADWR_TYJI@G@SD@AA@@AA@IDGB@A@BQBmAA@CBOAGFELC@AAaDACS@C@@AIAABKA@BEBFDADDBCJC@@BC@@A@@ABJBBD@DDDDB@DAFCDBBGCA@BAA@CEC@@FCA@DCA@AA@@EE@@AC@CD@BBBF@DD@DAA@BBB@BDBAB@VFDADACADBBEDAAAHECC@AAC@CAA@ACA@ABBFCFFD@D@ABBFBABDA@BAHD@ADF@BDD@FBCBCA@BBBABDDH@CDH@B@BB@@FB@BB@B@FBADD@@AHB@DC@EAABKBEBGAAAC@AAADC@CHFD@@BBABJBDBB@DB@@BABAHD@FA@AFCA@BADDBEFA@BBEFADD@BBCDAACDCCABE@BCECC@@DA@CHE@@ACA@DA@@BA@@BE@ABOC@AA@CBMAAHCDAAAB@AGA@@CADEAAABCACNA@KECLC@E@@EA@A@@A@AC@@AAAA@A@C@BA@CDABEAAADCABAAA@DEH@CEADACAKDHN@LAFKNGJAF@D@DBFNLHLANEP@FBFJJJDdHDDLLNVDHAHEJWXAF@FJFHDtDXHhZNPFHBHALK\\AH@dCNCHCDMHoTUJMJIP@RRZRR',
                  ],
                  ['@@PDNAvOFGBKCeEQGEI@IBMNY\\GJELATBJ'],
                  ['@@HRHJNBX@XCRGfEFGBM@eYuGIgCIAK@KDMPIREVCXARBP'],
                ],
                encodeOffsets: [
                  [[124438, 32149]],
                  [[124808, 31991]],
                  [[124870, 31965]],
                ],
              },
              properties: {
                cp: [121.567706, 31.245944],
                name: '浦东新区',
                childNum: 3,
              },
            },
            {
              id: '310116',
              type: 'Feature',
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  ['@@DBBAGCBD'],
                  ['@@HADA@AGCKHBBF@'],
                  ['@@FACAAD'],
                  [
                    '@@DB@EB@@CB@@GEQ@IEKAM@ATE@EHADF@GDCFFPD^BBED@@BD@@DPBB@@CDB@BLC@ADB@BF@@CF@@DB@BDCDA@@DCACBC@AB@HDBRTHGBCHBDB@AF@B@NACQ@@@AC@@CC@CIEE@CFCFHDBHABDN@BED@BDNA@HAF@FCBADDLD@DAAC@AB@@ANC@ANC@TDBL@DGJC^BDBDBJ@^F\\VHGPB@CD@BAF@DKDBBCA@BAC@FK@E@BD@@BNABCF@@AFB@AD@BADB@GA@@AF@BCFBDKB@@BDBB@BEDBBDF@@CFB@HD@@F@@@HA@BBA@BDC@BJADBBLB@AA@@ED@DIHA@BB@BDDBBCBA@@@BF@@CB@ABFBBCFB@BD@FCF@DBBAD@BAD@BABBBAHDJ@ABDDABDBHCBDJIBOFE@IDKJAFCBAJELAAEBCBKAA@GD@AIBEAIDOK@@EDEAABA@A@BB@@@B@B@AAD@@ADA@EJ@@CB@H@BLDBFA@@B@@GEB@EB@@CB@DETAAADA@GH@BHLAPA@ABBD@JU@ABBFCB@£«ugWOCOCgBDaAE`@HCBBFCBAJA@AFDFAFFD@FDFCFBBA@BBAFBDA@CDAAA@STCBWLAAABBBCBAACB@AABBBIFAPCHCFBBCB@HA@CAABGPIBO@ICCEDMGAILADACCBCA@CECEAKCADCBADAAKAEC@HEBCAEDQBACEAAB@BGCYDEJCB@BBFN@B@@JDbHRJL@D@FA@@CCB@DABBDEFACSDA@AAA@DDBLFHAB@BABCAIDADABCEKCABC@CDABBBC@@B@BA@BBcO[@MGDCC@DK_KFMGBCFGADEA@AGCA@@DAD@AFB@BCB@DGOCCLKR]JADEAMMABBCA@CB@BABCAACB@CEAB@CAAGBDFGFHFGBBDFHF@BDB@ABBFDADFF@DHD@DFFADDGDDDADDABDA@DDCDFFBDEBFFDCDBCBDDEBBDB@@@CDCDI@GB@BBFAB]DAHCDDH@DDBHB@DHABDB@@FG@CABJBl@FEFCFBB@LB@J@@GPDA@DD@AD@D@@CCA@BCA@CB@A@@AF@BGFAADDB@ARF',
                  ],
                ],
                encodeOffsets: [
                  [[124321, 31442]],
                  [[124337, 31429]],
                  [[124341, 31419]],
                  [[123933, 31687]],
                ],
              },
              properties: {
                cp: [121.330736, 30.724697],
                name: '金山区',
                childNum: 4,
              },
            },
            {
              id: '310117',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@DLB@BFTHAFB@DABHFELFBBAH@DIHB@GB@@CB@BEDAB@LAPB@DFBADD@@BBBN@@DRB@BADALHABlH@@\\ABAFQPOLDBDBDCJBBJFA@FCJC@@DCAABDDBDKHB@CDBDEBCEINHDABFB@DDDD@F@@ABCAA@EB@@CH@B@BCBABD@DLBBCB@R@ADD@BAJ@BBBB@BA@@NG@AFELC@AB@@CBA@KJAAA@CAC@CLD@ABBBGJDBBDCFBBDCFDADBBDCABB@@BA@HHDBABFFDCBBDCB@BABB@AFEBBBED@FEDDBED@BALB@CD@DEHBBGDBBCB@BFB@@LC@@FJA@AJB@@B@@FB@@HH@@BJ@CJDDADDBB@B@BCJD@DB@AB@FC@@FC@@D@FDA@X\\ILF@CAA@ABBJ@DEXFPBI_CM@CF@NFF@BBB@BAADBLFBJABHKB@@L@BHXCAGBAF@@BB@@BCFBDDBD@BB^ENNEFEAEHCC@DBB@BB@AH@BFCD@B@ABDB@@FAF@ABXFnNHKB@BA@CDC@CDA@EB@BCBADE@AC@BCD@DCFI@CRUHM@@GE@AA@@BGAFONDBCHBFK@CBAHODICACDEC@CC@BCEAFEA@@CMABEIESCCHECEDBCAA@WAMAA@MBCAC@E@A@C@E@IAABCN@FDBAIGAGOSGAA[DAD@J@XIJ@PDDI@ODK@UD@BCAAGADSG@CAA@AABAAAA@@BECBC@IFCBC@CIG@A@AGDCABACCBAA@@@G@GCCB@AABC@ABC@ABCAE@EDC@@AEAADEABAA@@DE@@A@@ABADCAACA@@AGBCJC@@FB@@BMCBCAID@ACB@AAB@@G@@@EC@@GEA@DE@ACCAAFA@CA@AA@CLEAADE@@BB@@HCAABC@@BEA@BE@ADMB@AC@@A@FELD@ABB@ADCACLE@ABC@@DOAGH[U]EI@CACA]AIDCHK@CA@SMD@BMD@BA@@BBDCBC@CKBCDA@EBE@GMBACC@AFM@ACGBCAEGED@DFFDJD@@DD@@B@@DRMBA@E@@BCAGAADGHQSCA@GBAD@DADB@CB@DCACA@@CE@@DE@@ACA@BKD@ACA@DA@OA@CC@@AC@AF]AOCEECD@HCEGB@FSF@BBNFL@JFR@HA@@DA@@FCA',
                ],
                encodeOffsets: [[123933, 31687]],
              },
              properties: {
                cp: [121.223543, 31.03047],
                name: '松江区',
                childNum: 1,
              },
            },
            {
              id: '310118',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@@GCIBA@@FADHD@BCDBJIBID@ACA@@AD@BAFDFEBDB@ACB@@ADBFCD@FFHCBCD@@DA@DBBADDBADDBAADHFDEBB@BBDBABBBAA@DE@EFB@CB@@DFBABHD@DBB@AH@@DPALEHB@CFBDA@DB@@CD@AAEAEEACD@CAACGA@A@@AEBACCDALBBEBADBBADCACHCBGCADGACDC@@DECEJGBCCADCD@VSLBDBLHBB@DB@BBFCDEBA@AB@@AFC@ADADEBA@ABADGBAHIDKJOmMWEBAE@EB@@CABAA@C@ED@ABGA@@AAA@CDDFGFBFEMM]FAAC@CAACDE@AA@@AE@ABBHWDAGK@@@LAAGIBEAAKBCABA@AAE@MEE@@DDNJ`OAWECFI@AA@BBB@DKE[J@WCB@E@CD@@ED@@EBAA@@CICADA@A@CABCCCDII@@AG@@GA@@EA@@@IA@BIB@ED@@KA@AEA@ADCAAHGACFC@@DKAABC@AFCCEFC@AFAAEF@BAAABA@CDAACDEEBACAGGB@@AA@BACDAABCECCDAADGAACAHIAABAC@@EDEB@HBBBLIB@DA@@BAD@FKBEH@@MB@@AAAAAI@ABC@BCQ@A@ADKA@CACABADA@G@@DA@@FBBAD@BE@C@CC@CEABAGCJMDFFAACDCA@LGACCCBADB@CD@DI@EEBAIIACDCACAPKROBEBA@[G@AkGBBKBC@AQA@CM@AA@AC@BCEA@COAKBA@CBAFA@@DA@@HGACJG@ABEAFKGEBA@CEAGBEUKA@CQE@BCABCEBAHE@@BB@A@@DDB@ADB@DC@C@@BCCB@OC@HM@AHC@AHF@CHBF@BC@@DB@ADBB@BNB@BB@@FDB@DC@A@CRA@CFBBAFGAADDB@HA@@DB@@D@@ADBBEJDBM@ADg@ABFFABGBCNGBC@CACBAADAAEFACK[AAAJK@AC@GBEDG@ACOFOEAD@JQ@@FBdCDEL@FCD@H@JHXBPHABDEJ@BEDCACHCFAHA@@EG@QB@BBDE@@DE@AAE@@CG@ABADA@ABCAABCDBLD@DHNJDD@HDHHHJFdDPCTD\\JnEMPDvBJHADHBBD@BD@@EHBFCBEDB@AD@HREB@FHD@DHBBGD@H@ABDBL@@AB@@AD@@CFA@BAFFD@BBB@CB@@FHDADB@@DEAADJB@DCHEAABBB@BFBAFEFADJDABIAADFB@DAB@B@BDBABCB@BE@@DD@Kz@DD@@HD@@DC@ADA@A@AFFB@HBA@BAB@FC@@AIBDBDABD@NA@BBBBABBRA@@@dFFDDHEBBHDNFFABDBDADCB@@AB@BCFO@ABCHCD@BBC@@@FDPRF@FA@DB@@AHAACFCHA@DFAACD@BBDAAABAD@BBD@@CDALBFB',
                ],
                encodeOffsets: [[124062, 32028]],
              },
              properties: {
                cp: [121.113021, 31.151209],
                name: '青浦区',
                childNum: 1,
              },
            },
            {
              id: '310120',
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  '@@LBBAJB@BD@T@BDbCBBD@FKHEPBDAB@nBRA@A@BHAJCB@@BB@@BTCH@J@ZI`SXQBCHGACFCDBBAB@HIDBF@NGDA@EFEACC@@CFB@CD@DBBAB@@CBAD@@EH@B@@AB@@AA@@EBCA@B@BAC@@AD@BIAKAC@G@IA@BA@GAAB@EQBIGA@IA@GYBYrĥDEU¡_[g¤A@EDAA@BIVC@AA@BOBKBAGG@@HCBBBSBCFA@@DA@@FFA@HA@@@EBCAAKG@A@@DI@@FCB@BC@BBA@A@@@A@@A@BABBBCF@FL@CPBJAFBJC@@HBBALADBFKBIFABEDIBCL@JEFAPKJHFBFADED@JADFD@AB@BBABBBB@DBH@CTHBBBADC@@VCL@PCJTfD^JNJLJHBPDV@LBLHJBZDHCAEJYDB@BLHTFBBD@@AD@DEB@@AC@@EF@D@HGD@BAFB@AF@BCJD@ABABB@AB@DCBCDADB@HAB@BB@BAD@@DP@NF',
                ],
                encodeOffsets: [[124489, 31743]],
              },
              properties: {
                cp: [121.458472, 30.912345],
                name: '奉贤区',
                childNum: 1,
              },
            },
            {
              type: 'Feature',
              properties: { name: '崇明区' },
              geometry: {
                id: '310151',
                type: 'MultiPolygon',
                coordinates: [
                  ['@@Æp@dG¶YIÐtuÆu¬RWWckĜyPVĆgðÕTUmU¥c}SH¥|÷^oGĝ¬åµxbcAXor]d'],
                  ['@@MURm@kYiD[YRwRmdS^ChQv'],
                  ['@@¬QSzoMUægLShQe^sFwS_aLï{d\\ungZeNGZ'],
                ],
                encodeOffsets: [
                  [[124119, 32586]],
                  [[124716, 32134]],
                  [[124427, 32249]],
                ],
              },
            },
          ],
          UTF8Encoding: !0,
        })
      : D('ECharts Map is not loaded')
    : D('ECharts is not Loaded');
});
