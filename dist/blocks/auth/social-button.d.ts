import { Icon } from '@phosphor-icons/react';
import { Button } from '../../components/ui/button';
import * as React from "react";
declare const PROVIDERS: {
    readonly google: {
        readonly name: "Google";
        readonly icon: Icon;
    };
    readonly github: {
        readonly name: "GitHub";
        readonly icon: Icon;
    };
    readonly apple: {
        readonly name: "Apple";
        readonly icon: Icon;
    };
    readonly microsoft: {
        readonly name: "Microsoft";
        readonly icon: Icon;
    };
};
export type SocialProvider = keyof typeof PROVIDERS;
export declare const SOCIAL_PROVIDERS: SocialProvider[];
export interface SocialButtonProps extends Omit<React.ComponentProps<typeof Button>, "children" | "type"> {
    provider: SocialProvider;
}
/** "Continue with Google", for `LoginForm`'s and `RegisterForm`'s `providers`.
 *  The app wires `onClick` to its own OAuth redirect. */
export declare function SocialButton({ provider, variant, ...props }: SocialButtonProps): React.JSX.Element;
export {};
