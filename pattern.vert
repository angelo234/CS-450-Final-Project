#version 330 compatibility

uniform float uTime; 

in vec2 texCoord;

out vec3 vPos;
out vec2 texCoordV;


const float PI = 3.14159265;

void
main( )
{ 
	// Send texture coordinates to fragment shader
	gl_TexCoord[0] = gl_MultiTexCoord0;
	texCoordV = gl_TexCoord[0].xy;

    vec3 vert = gl_Vertex.xyz;

	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}