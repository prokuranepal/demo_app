import Preference from '../model/dietary_preference';
import { Text } from "react-native";
import React from 'react';
export const gluten_data = {
    dietaryHeader: "Gluten",
    dietaryDescription: "Gluten is a hidden allergen and the general name for the proteins found in wheat, barley, and rye products.",
    preferences: [
        new Preference(
            0,
            "Eat",
            "Eat",
            <Text>Menu items with gluten in them will show up in your search and menus. Move the slider to filter out or note gluten as an allergen.</Text>,
            "#464f7a"
        ),

        new Preference(
            1,
            "Don't Prefer",
            "Don't Prefer",
            <Text>Menu items with gluten in them will <Text style={{ 'fontWeight': 'bold' }}>NOT</Text> show up in your search and menus. This is for preferences or for slight intolerances.</Text>,
            "#60426e"
        ),

        new Preference(
            2,
            "Intolerant",
            "Intolerant",
            <Text>Menu items with gluten in them will <Text style={{ 'fontWeight': 'bold' }}>NOT</Text> show up in your search and menus. Priority will be given to allergy friendly restaurants, when shown</Text>,
            "#d16a0a"
        ),

        new Preference(
            3,
            "Severe Allergy",
            "Severe\nAllergy",
            <Text>You will only be shown restaurants that have explicitly stated that they can acoomodate your dietary needs. This will greatly limit your choice of restaurants, only select if you have a severe allergy to this ingredient.</Text>,
            "#9b444c"
        )],
}



