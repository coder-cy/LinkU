package com.cy.linku.controllers;

import com.cy.linku.reqParam.RegisterParam;
import com.cy.linku.utils.Tool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class UserCenter {
    private static Logger logger = LoggerFactory.getLogger(UserCenter.class);
    @PostMapping("/register")
    public HashMap<String, Object> register(@RequestBody RegisterParam registerParam) throws Exception {
        HashMap resultMap = Tool.getResultMap();
//        this.accountService.doRegister(registerParam);
        return resultMap;
    }
}
