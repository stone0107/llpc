#version 450 core


layout(location = 0) in vec4 a0;
layout(location = 10) in vec4 b0;
layout(location = 0) out vec4 color;

void main()
{
    color = vec4(distance(a0.x,b0.y) + distance(double(a0.x) , double(b0.y)));
}
// BEGIN_SHADERTEST
/*
; RUN: amdllpc -spvgen-dir=%spvgendir% -v %gfxip %s | FileCheck -check-prefix=SHADERTEST %s
; SHADERTEST-LABEL: {{^// LLPC}} SPIRV-to-LLVM translation results
; SHADERTEST: AMDLLPC SUCCESS
*/
// END_SHADERTEST
