/*
 * --------------------------------------------------------------------------- *
 * File: ImportScript.tsx                                                      *
 * Project: website                                                            *
 * Created Date: 26 Jul 2023                                                   *
 * Author: Vikas K Solegaonkar (vikas@solegaonkar.com)                         *
 * Copyright(c) Vikas K Solegaonkar, 2023                                      *
 *                                                                             *
 * Last Modified: Wed Jul 26 2023                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */
import { useEffect } from "react";

export function useScript(resourceUrl: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
}
