// because the Vercel deployment doesn't detect the automatic Swagger customization for some reason
export class SwaggerCustomizationUtil {
    static cssUrl(): string {
        const url =
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.4.2/swagger-ui.min.css';

        return url;
    }

    static bundleJs(): string {
        const url =
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.4.2/swagger-ui-bundle.js';

        return url;
    }

    static standalonePresetJs(): string {
        const url =
            'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.4.2/swagger-ui-standalone-preset.js';

        return url;
    }

    static favIcon(): string {
        const url =
            'https://static-00.iconduck.com/assets.00/swagger-icon-128x128-3vy046ip.png';

        return url;
    }
}
