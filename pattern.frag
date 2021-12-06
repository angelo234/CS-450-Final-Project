#version 330 compatibility

uniform sampler2D uNoiseTexture; 

uniform float uTime; 
uniform float uCyclePercentage;
uniform vec3 uNewColor; 
uniform vec3 uOldColor;

in vec2 texCoordV;
in vec3 vPos;

const float PI = 3.14159265;

void
main( )
{
	// Set texture coordinates offset based on time
	// to emulate what the cylinder gases look like
	vec2 newTexCoords = vec2(texCoordV.x + uTime * 0.15, texCoordV.y + uTime * 1.0);

	float completion = clamp(uCyclePercentage * 3.0, 0, 1);

	// Transition between old and new color smoothly over time
	float currentColorR = (uNewColor.r - uOldColor.r) * completion + uOldColor.r;
	float currentColorG = (uNewColor.g - uOldColor.g) * completion + uOldColor.g;
	float currentColorB = (uNewColor.b - uOldColor.b) * completion + uOldColor.b;

	gl_FragColor = vec4(vec3(currentColorR, currentColorG, currentColorB), texture2D(uNoiseTexture, newTexCoords).x);
}

