package com.example.server.model;

import java.util.List;

import jakarta.json.JsonObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Character {
    
    private Integer id;
    private String name;
    private String description;
    private String thumbnail;
    private List<String> comments;

    public static Character toCharacter(JsonObject obj){
        Character character = new Character();
        character.setId(obj.getInt("id"));
        character.setName(obj.getString("name"));
        character.setDescription(obj.getString("description"));
        character.setThumbnail(obj.getJsonObject("thumbnail").getString("path"));
        return character;
    }

}
