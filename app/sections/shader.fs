uniform float Time;
uniform float Random;
uniform float Aspect;
uniform vec2 Screen;
uniform float Light;

varying vec2 coords;

#define HEX(r, g, b) vec3(r, g, b) / float(0xFF)
#define BG HEX(0x0A, 0x0A, 0x0A) * Light
#define RED HEX(0xDB, 0x00, 0x4F)
#define BLUE HEX(0x00, 0x3A, 0xFF)

void main() {
    // gl_FragColor = vec4(0.0);
    // return;

    vec3 color = vec3(0.0);
	float Time = Time * 0.5 + Random * 1000.0;
    {
        vec2 coords = vec2(coords.x * (Screen.x / 1000.0), coords.y * (Screen.y / 1000.0));
        float x = snoise(vec3(coords * 0.25, Time * 0.1));
		float f = 0.0;
        {
            float n = snoise(vec3(coords * 0.5 + x * 4.0, Time * 0.1));
            n = (n + 1.0) / 2.0;
            // float base = 0.0;
            // n = n > base ? (n - base) / (1.0 - base) : 0.0;
            n = pow(n, 4.0);
            f += n;
        }
        {
            float n = snoise(vec3(coords * 0.5 + x * 1000.0, Time * 0.1));
            float p = snoise(vec3(coords * 0.5, Time * 0.5));
            n = (n + 1.0) / 2.0;
            // float base = 0.0;
            // n = n > base ? (n - base) / (1.0 - base) : 0.0;
            n = pow(n, 5.0);
            n *= p * p;
            f *= 1.0 + 2.0 * n;
			// color += n;
        }
        {
            vec2 coords = vec2(coords.x + 1000.0, coords.y);
            float n = snoise(vec3(coords * 400.0, Time * 10.0));
            f *= 1.0 + 0.2 * n;
        }
		color = BG;
		{
			float n = snoise(vec3(coords * 0.5, Time * 0.05));
			n = (n + 1.0) / 2.0;
			n *= n;
			n = f * n;
			color += mix(vec3(0.0), RED * 2.5, n);
		}
		{
			vec2 coords = vec2(coords.x + 1000.0, coords.y);
			float n = snoise(vec3(coords * 0.5, Time * 0.05));
			n = (n + 1.0) / 2.0;
			n *= n;
			n = f * n;
			color += mix(vec3(0.0), BLUE * 2.5, n);
		}
    }

    {
        float width = 2.0 * 1.0 / Screen.x;
        float gap = 100.0 * 1.0 / Screen.x;
        if (
            mod(coords.x, gap) < width ||
            mod(coords.y, gap * Aspect) < width * Aspect
        ) {
            color *= 1.0 + (length(color));       
        }
    }

    gl_FragColor = vec4(color, 1.0);
}
