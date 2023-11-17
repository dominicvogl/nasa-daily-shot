import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                additionalData: '@use "@/assets/scss/variables/" as *;'
            }
        }
    ]
});
