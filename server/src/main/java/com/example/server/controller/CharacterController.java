package com.example.server.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.server.model.Character;
import com.example.server.service.CharacterService;

@Controller
@CrossOrigin("*")
@RequestMapping(path="/api")
public class CharacterController {

    @Autowired
    private CharacterService charSvc;
    
    @GetMapping(path="/characters")
    public ResponseEntity<List<Character>> getCharacters(@RequestParam String character, @RequestParam Integer limit, @RequestParam Integer offset) throws NoSuchAlgorithmException {

        List<Character> characters = charSvc.getCharactersByName(character, limit, offset);

        return ResponseEntity.ok(characters);
    }

    
    
}
