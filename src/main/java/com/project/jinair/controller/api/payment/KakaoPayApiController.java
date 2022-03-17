package com.project.jinair.controller.api.payment;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@Slf4j
@Controller
@SessionAttributes({"tid", "order"})        // 세션에 저장된 값을 쓰는 어노테이션
@RequestMapping("/api/kakao")
public class KakaoPayApiController {
    @PostMapping("/kakao")
    public String buy(@RequestParam Map<String, String> request) {
        String value = "";
        System.out.println(request);
        return null;
    }
//        for(String key : request.keySet()){
//            value += request.get(key).toString();
//        }
//        System.out.println(value);
//        StringBuffer stringBuffer = new StringBuffer();
//        try{
//            String Authorization = "https://kapi.kakao.com/v1/payment/ready?"+
//                    "Authorization=KakaoAK aee851af0c31999dd6849384e906bb0d";
//            URL url = new URL(Authorization);
//            HttpURLConnection hc = (HttpURLConnection) url.openConnection();
//            hc.setRequestMethod("POST");
//            hc.setDoOutput(true);               // 서버에 데이터 전달해주기
//            OutputStream push = hc.getOutputStream();
////            DataOutputStream datapush = new DataOutputStream(value);
////            datapush.writeBytes(value);          // 바이트 형변환
////            datapush.close();                   // flush를 디폴트 처리, 데이터 비우고 닫기
//        } catch (MalformedURLException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return kakaoPayService.buy(request);
//    }

//        return "redirect:/orders";
//    }
}

//    // 결제 취소시 실행 url
//    @GetMapping("/order/pay/cancel")
//    public String payCancel() {
//        return "redirect:/carts";
//    }
//
//    // 결제 실패시 실행 url
//    @GetMapping("/order/pay/fail")
//    public String payFail() {
//        return "redirect:/carts";
//    }

//
//    @RequestMapping("/jq")
//    public ModelAndView main(ModelAndView mv, HttpSession s, RedirectView rv){
//        mv.setViewName("/userpage/payment/kakaoTest");
//        return mv;
//    }
//
//    @RequestMapping("/pay")
//    public ModelAndView serve(ModelAndView mv, HttpSession s, RedirectView rv){
//        mv.setViewName("/userpage/payment/kakaoServe");
//        return mv;
//    }
//
//    @RequestMapping("/test")
//    public ModelAndView test(ModelAndView mv, HttpSession s, RedirectView rv){
//        mv.setViewName("/userpage/payment/extras-test");
//        return mv;
//    }
//
//
//    @RequestMapping("/kakaopay")
//    @ResponseBody
//    public String kakaoPay(){
//        System.out.println("호출됌");
//        try{
//            URL url = new URL("https://kapi.kakao.com/v1/payment/ready");
//            HttpURLConnection hc = (HttpURLConnection) url.openConnection();
//            hc.setRequestMethod("POST");
//            hc.setRequestProperty("Authorization", "KakaoAK" + "aee851af0c31999dd6849384e906bb0d");
//            hc.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//            System.out.println(hc);
//            hc.setDoOutput(true);               // 서버에 데이터 전달해주기
//            String para = "cid=TC0ONETIME&partner_order_id=partner_order_id&partner_user_id=partner_user_id&item_name=ticket&quantity=1&total_amount=2200&vat_amount=200&tax_free_amount=0&approval_url=http://localhost:8080&cancel_url=http://localhost:8080&fail_url=http://localhost:8080";
//            System.out.println(para);
//            OutputStream push = hc.getOutputStream();
//            DataOutputStream datapush = new DataOutputStream(push);
//            datapush.writeBytes(para);          // 바이트 형변환
//            datapush.close();                   // flush를 디폴트 처리, 데이터 비우고 닫기
//
//            int result = hc.getResponseCode();  // 서버를 통해 정상 전달이 됐는지 확인을 위한 객체 생성
//            System.out.println(result);
//            InputStream inputStream;            // null
//            if(result == 200){
//                // http에서 200은 정상 통신
//                inputStream = hc.getInputStream();
//
//            }else{
//                // 실패시 에러코드 전달
//                inputStream = hc.getErrorStream();
//            }
//            // 불러온걸 읽는 객체가 필요함
//            InputStreamReader reader = new InputStreamReader(inputStream, "UTF-8");
//            System.out.println(reader);
//            BufferedReader bufferedReader = new BufferedReader(reader);
//            return bufferedReader.readLine();           // 형변환을 해서 다 읽어줌
//        }catch (MalformedURLException e){
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return null;
////        "{\"result\":\"NO"}";
//
//    }