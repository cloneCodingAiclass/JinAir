package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbMagazine;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.MagazineApiRequest;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.repository.TbMagazineRepository;
import com.project.jinair.service.board.MagazineApiLoginService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/magazine")
@RequiredArgsConstructor
public class MagazineApiController implements CrudInterface<MagazineApiRequest, MagazineApiResponse> {

    private final MagazineApiLoginService magazineApiLoginService;

    // 게시판 리스트
    @GetMapping("/list")
    public Header<List<MagazineApiResponse>> List() {
        return magazineApiLoginService.getQnaList();
    }

    @Override
    @PostMapping("")
    public Header<MagazineApiResponse> create(@RequestBody Header<MagazineApiRequest> request) {
        return magazineApiLoginService.create(request);
    }

    @Override
    @GetMapping("/view/{id}")
    public Header<MagazineApiResponse> read(@PathVariable(name = "id") Long id) {
        return magazineApiLoginService.read(id);
    }

    @Override
    @PutMapping("/edit")
    public Header<MagazineApiResponse> update(@RequestBody Header<MagazineApiRequest> request) {
        return magazineApiLoginService.update(request);
    }


    @Override
    @GetMapping("/delete/{id}")
    public Header<MagazineApiResponse> delete(@PathVariable(name = "id") Long id) {
        return magazineApiLoginService.delete(id);
    }


    @PostMapping("/upload")
    public String uploadFile(@RequestPart(value = "mzTitle") String mzTitle,
                             @RequestPart(value = "imgs", required = false) MultipartFile imgs,
                             @RequestPart(value = "answers", required = false) MultipartFile answers,
                             @RequestPart(value = "pdfs", required = false) MultipartFile pdfs
    ) throws IOException {
        TbMagazine tbMagazine = new TbMagazine();
// 제목
        tbMagazine.setMzTitle(mzTitle);
// 이미지
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// 답지
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        magazineApiLoginService.save(tbMagazine);
        return "redirect:/adminpage/pages/magazine/genieList";
    }

    @Autowired
    TbMagazineRepository tbMagazineRepository;

    // IMG 파일 다운
    @GetMapping("/downloadImg/{id}")
    public ResponseEntity<Object> downloadImg(@PathVariable(name = "id") Long id) {
        TbMagazine tbMagazine = tbMagazineRepository.findById(id).get();

        String path = tbMagazine.getMzImgUrl()+tbMagazine.getMzImgName();

        try {
            Path filePath = Paths.get(path);
            Resource resource = new InputStreamResource(Files.newInputStream(filePath)); // 파일 resource 얻기

            File file = new File(path);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(file.getName()).build());  // 다운로드 되거나 로컬에 저장되는 용도로 쓰이는지를 알려주는 헤더

            return new ResponseEntity<Object>(resource, headers, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }

    // Answer 파일 다운
    @GetMapping("/downloadAns/{id}")
    public ResponseEntity<Object> downloadAns(@PathVariable(name = "id") Long id) {
        TbMagazine tbMagazine = tbMagazineRepository.findById(id).get();

        String path = tbMagazine.getMzAnswerUrl()+tbMagazine.getMzAnswerName();

        try {
            Path filePath = Paths.get(path);
            Resource resource = new InputStreamResource(Files.newInputStream(filePath)); // 파일 resource 얻기

            File file = new File(path);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(file.getName()).build());  // 다운로드 되거나 로컬에 저장되는 용도로 쓰이는지를 알려주는 헤더

            return new ResponseEntity<Object>(resource, headers, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }

    // PDF 다운로드
    @GetMapping("/downloadPdf/{id}")
    public ResponseEntity<Object> downloadPdf(@PathVariable(name = "id") Long id) {
        TbMagazine tbMagazine = tbMagazineRepository.findById(id).get();

        String path = tbMagazine.getMzPdfUrl()+tbMagazine.getMzPdfName();

        try {
            Path filePath = Paths.get(path);
            Resource resource = new InputStreamResource(Files.newInputStream(filePath)); // 파일 resource 얻기

            File file = new File(path);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(file.getName()).build());  // 다운로드 되거나 로컬에 저장되는 용도로 쓰이는지를 알려주는 헤더

            return new ResponseEntity<Object>(resource, headers, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }

    // 수정
    @PostMapping("/update")
    public String uploadFile(@RequestPart(value = "id") Long id,
                             @RequestPart(value = "imgs") MultipartFile imgs,
                             @RequestPart(value = "answers") MultipartFile answers,
                             @RequestPart(value = "pdfs") MultipartFile pdfs
    ) throws IOException {

        TbMagazine tbMagazine = tbMagazineRepository.findById(id).get();

// 이미지
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// 답지
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        tbMagazineRepository.save(tbMagazine);
        return "redirect:/adminpage/pages/magazine/genielist_view/"+id;
    }
}
