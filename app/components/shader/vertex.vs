attribute vec4 vertexPosition;

varying vec2 coords;

void main() {
    coords = vertexPosition.xy;
    gl_Position = vertexPosition;
}
