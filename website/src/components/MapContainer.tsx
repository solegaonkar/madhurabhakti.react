/*
 * --------------------------------------------------------------------------- *
 * File: MapContainer.tsx                                                      *
 * Project: website                                                            *
 * Created Date: 25 Jul 2023                                                   *
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

const MapContainer = () => {
  return (
    <iframe
      className="mb-4 mb-lg-0 border-brown"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.980020154261!2d73.0132113153354!3d19.020602058653196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3964aba5593%3A0x3155c043cecc2b9a!2sAtlanta%20Chs%20Ltd!5e0!3m2!1sen!2sin!4v1613969869733!5m2!1sen!2sin"
      style={{ width: "100%", height: 400 }}
      allowFullScreen
    ></iframe>
  );
};
export default MapContainer;
