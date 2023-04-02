import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi I am Samuel J", "Tech-Addict", "<Loves to code more>"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-fill' src="https://lh3.googleusercontent.com/fife/AMPSemfUyR-diUFazFMo8IrbDM427w8CkUBLcGdsVU26U7Z-Khm5F8XE1r0S2yJnydoGraepxK4JU8oE8KyyImW57hl5gBI8PdRjoH2zBVeHerCpYFxxF8kO-4KrFo4JFAYc1HqhQ-SqC6rhYSHN_SUR9kHQ-rgpotmRKCAFGW6RDzbsYFvvlpEXwbS2zEgy_TOFkHDPR5GXRwDCX_WHi8FekArey2Oi1tPx1Pj39PJwR9QdCZ68_4BGReCJ3IxiggKd53OklVTO5p66Yk_Nrjaj_7EhHs3T4gjS-qvXIbK-brPCp1kN5UwALd1poCN-iBFpjPJNQhz79B4VfcQM3pymjxv15_1ElTzvzkUsEoxqSDuaqacqL4Vz28yVm1jUkd1uHqWBeHutHGSDAPK2wgYhEiry12ObFSnA3klitc4Prd8T3a1-N6-5QN4Ay0IvM_azsCJyuQ_XAtVEugWeTuaO3wNY2qzyxEZas_SHLq4oDyrvrJF9KYNj3r9ykl5T6n9dt6KgMD8W2w2ZZ1Q4cE5hB8oxxAWdl1FW4xUgF4xkDsuzmajNFnyu-xJdQYdpv7Z9uPCbP6UKmJwihUXpVyCKIHGyXCctA5-C9F8wopEQnKFkC_jyVl4VaeriwpFdnaYucm04DbUQ37K4lEezKBoaKY7hSRfeL6ivHZjM8nT7gP4FuGgtUQ6-gQYnpOlnw18zRUM7XOkKDFc4DiJ9y9jOJMYblj_QWNb3FWX3eoTdlS83h8VktWclnnHzunSO5pGM-aRubspufDEVit7zFGAjmjb7T0lzlild1S1OF5z2OnRj5GyppEciHz-DteHyC2UEhBCDwC3ePlIeImPWIx5ryMbo9ZUw5T7wWfQyKX4s2b0f3OjzZxwFcUcgHBgXjWhjSi2H3Fp082Zqzyb11iRIwoweHu8sUwYwXrP_OIC41U2WAU7qSLPAY8DcKthTSDQ1E7iPmjjdE8vFzvlwYMEMkGH7L0zFb71OcRbtl1V-FBt6_gNuBBENDAU39l6xisw_yjD2lu_Nz_7-FqErCFkeaACFomJjFIatFddJIc9JfdDaFF5ukx_vlrnTJ7rrY1clKj2-yPKh-Ht7h5O_iLCjLBr_7RvMXV0D6XzJrZvHh_8uPa0tfG8IHduxGoGYHOIz7ld0wXWxte8h0i9qJUQ-4uvDqpBQKKb9IK9rKsMgP6DBOk-SzfvdEovjW58DNJVH4KcJeMJ3K2o7jxPfXrSN4g3xcMYn6z2lCl5sKL49WM6468Rm1iqGZ6huU9TqshBuUSy8hesZgIEdVqRUMLb2EfVonYVq0z9fyQEIZCLFDEO-AeJcd3nKa9y2OqIdVLkOpHFxeKMUl111VIIc5rghU6orOW0XuKcAIAGeREHjA6_cikpbX-SU0mFiM2HBBQYL7waDNb_tP1aKD1USWwdb6qJ3c37TxGAE-p9aVriA-Bp7_dp7j-OdNNY5hM5enbuhN6zUF2FzYMQZojB7GpjqcpLIkst-dHPPo2YYQgjxh8TB0kAXxR8gHzhn4NwPFDJ3-Zz8CnQNlk1_K8tD1QpPF4hEpaRSw7qZiszZz9okkK4DYfZUXCQ_VPY7M9RjFhi5yuQ1JDpHzHCSfBbKeEwM80KkwvNUWMZcrPlp54k9flsIIMOaa9vZp9FwEauT6RSlOu2fQg-hLt6A1Tj2ehEZRETjte2d-Zv7SE_P6H9YnUTYbYrJNPkWRgBmsbEtXW8zPsJ1pYDJTIjZ8WDDs-3XbkN0lo6yWyhr-kvW8F8KosEyR_9QKX75JYJ_bTKvRMVlFn06hpftn6Qy5lcwkcrTGqzvXheiLxBYmuX0oG5838Wb5LLxmF-SuGqypd4eVL3-CZwLmzHWHWgNWMg1cE0SiwkL78wBpGIwyeAF_YtvUteNGAd6D393QXfOE4Zlk72aAPiFuIUfnLJlvTT4Gmk3-U03BVlbYircR5gARWES5pjg2u77uQrqEwzpAtNJfiaEu1Ju91K9bL0gpq781ALPr4zFsQUSlcP4Lodc8tONPKqzKqHB5_Lp4Io_gr3yMxq_0tSwzayNv6JLbALUtNh1ZBKakUeB82InCzgVhJgF_4tsayO_QtSwX05gtMCYudsZwtct_JnoJwK4t_jvkt_oWMTZSmS7dkUa9auH8np2D-4-Ws_BSTYBDSbTPuvDfQr9MBq2BVsHY-4K2pTyZ5rEHlH5_qeFPeAlvDP8VuWCcqe0HvAwPhAn65wiRtW9w8DmcZ7sBA6CYJcE9bvTk3Q8j3Z7B0yiaP2fMEoTDP1J5kHGLM3Cbl_rqw9p6Es51AFDF-tnMW7d0_WosXFW7brzPGEiv2Z39jHmCLmzHZQ6HE3HOeidAF6zyaZXOVGNtpwoZHWOl0XNt-lq_Yu7OzvHVxooxsVV8hB7WoYWlT4po3jSUUVraO6bxyh95Gg8HTMpQUg0kjiJRiz6VyYYV-e_RAAHxGvM1z6h3cEILUaXvdXtkD_ofE_rQJjhgtF5YCZ7AcvPOHrREfzoPFCbZyvoSmnxhkuv2TF6DWhY327UeUH2-bftz2fxU5HmhEsORmzX8xrGLTdXqpibcnVbWqzqPFJi10qHWQbn6P8rmCYVdKWMx7BXKx3iuh1qVPt29H1SVl1M3hKS-C2eHZnFM0j2xuAzOzqvHa3ggfx_vutrf5jguTqpEaOhZMPwoz5dTggDYihnaPqdikAI_oY7wlZZNs-k0AhvgvnSjGzay6F0amxjcHRIdigJzQGmLYoJYBMfovAQmAGlxZze4fgGqDMuppnK2Zbf8w0vzEvB-xh4qnqdZcdd69_UmqVhbWSP3ZlmMYkSZ-I5tabCcXC_bNL6V4M5oZTfNFqc36F_zr6QUzs0bWu5hokdXIqFwpGvRyiEM2xHP1P8xaR1H8mLe3laXP-C8_b7RKYn-XY-UEKZW6R2QIYn_GQlkhcMVmC2qPPwP-SjIwZaXvE9BwvsE_yfYZlNbnc1o_UYj5VgUIE3esRu5CrIxypitLchsPzPCdzD5__YH-5cNAxnpO7l1AirabIt8Z66Tmv7ebpMsLfQeIM7skuswk_bnmWJWYZ-KDxSGLF8BmPjTxyNU8GeuJYh2DG9hV87K5iKjvIhwC8YPYhfB4pjldH3IED_9xLvTbReaD8POHnSbegugKqrKxD0UYw218GSU9u12UqeWC03537i4c966Q5UZdFkYSPrbJsTgolosnfnlQcLjS4bmRd0d57Wpl-FbYPeS5ClRsQ8WYX-OL5nc496jqgGiP4XPrEH3vqpcfO9F751Ye8ADrlk7uO3Klfua0ZbSYxqPwM2GdFistsWZJ7LsThKIq_XIOXgHXPbxIZk9ALPv_B9eunFQtDx4dIHgXFmM7WWAvP3e36f-iOPyJIAO3wCkGW1dtKNblkAFKPbyRg2pNrPiYuSdm2omn-4fxV2JPz-YNCjC8VzGqGFJrfboKxJkBwLaphMNf4BrqQDaECcmilOLye3S66FTNZ8M6JBJpxDy-DLEf85AXcmICQZrJ0cVUCVeJrW8tR321WWZ2NLj4h3uJlYVK2kcPzPIlJuXXjlm6GjDdfCjHLQVxxdNQF2D0IfWC30K2Wr7O5SjIRE8loVzSAw4FRS6Sx5iyfoads23UCh9pK-gDGbr0zPdtLue3EMwWaSyPSqzSMXNxIKBTJyWNSJYeJj5wu-qn8aYD2pCU0HGABfqte5qhdaejx0rOKf3F4zMhIbyLbbnionwK_gDhQEVlmj6zQnSAir1--bVo0BTGLQsuoJkz9nYYepKdoT-6hVhaoc2p1KxmU4NAz0mdHMi-6COmraS6oW2QduruA8jFWHd9ftcWS1bgPrcSfsTdSqqCRAIHHux8e6i8bIK9JaeWE5Gay4YlctgUxRSVyEUEF5i2PK7q6TP5SvUm5yPi6J-zg25c6pfdArtIskrhqSl8BH2Z2ZwFaR3k1Tzs43Iptf6EYqmYr-cbLB1kk6ZBTCo34uo_VTSswyS7bIcfxLI1xDY75t8AFTk8hsCInBT_oFSi_qMP5VtIr03DtsH-91lsnt2JVpGn5KxUFbD3_m1Bab43cx-k8cmdHMTLxtgoGmRUCzEJR__An5MGxhDKO5zGmTdg_TBsc6dMqqH585I60WeOMOiC96Mzu6kpzanENL1CXz0srJkCsJ1W_tJ8RljNJ2ZFSMFRfue-EPG7hMi1PQ3mQKhvZ0veFGZoDVZgbUHjkzur7b7AgxTCtw8vrYPwF3Wg5UnVbdOnTnm7hkv-85jszVW-EHaO4MBSkns7t-27kIhDVt00ZQ03beZgAIgy720XLrEI_mcQQPOQlgqotq0Krw4xz-4_ZUncsLG0v7eopnOLEGo1nV43g7Euco3Jh8D-X4LtR8kh8TzzYaVzW4BHLBK_Gj8AMxTt4brOzRTy0S2WCgw0v_dm_Wbub7UjGBsGcLlYhGEEwyOL5jNHp4h13sCHBBpZrdjQIEOnnQXYtrYXz4xC9NsJ8KQyYKOxZphYyBqcNfT2LrUv-slGCovojmyIJ32qaSf_mtZ1KzRW6lxjsw9pVC3i3Ge-hjWaIpBIcvaZS5F6Ekf8OuUWZN21q-AKgcg9rKqdqeO3zzgIdxQ8tSpgrji2DTQMB0khYlBx-PO0_Szoj1k3Uef2ZXC6QKAMBFk35rkSRz4fDwo5P8lIYdRIo8eMgTEIKAcsQxPPbGqiITqAlJQYSnzMlG5rfpJMpLAiVTXIJIkqkspZEBwShjzOPZLXr8vzbyOVbTpslXQDTQHDqunVZi0H9w2CzwOuGIq8wfa-Gbv9dB8z0gujiyfX8ucDZhEDEwgKnRAEbCJSsGsfKrKMgZ3CBijbvkONxjvbzCMRKoRB3wBUSvWvSc0aCvktikyoDkFs4gsr1AgC_-03b_iDUznd9CBDESqLVQjfKLBzpn5UXfPenDPM-VORhUWADJjV44_n-ZgcdI-2HQzpitma54MGDyL0aAQMh8BfkJYp5QGaJmhfmvq7hLAbYbQcbI4zCQrJJyOn-F_6PDVSXRsFFUuVVPAUj5Bev3-Pw4uZuWD0Gs2GZsk0LXwhltdYc5Fl2MFYNcBK7NIX_5josrteBAVjdb6i39TUTUJDQSa1aeV2G0GwYUl9eK4FgLbBL3M_eMuBsbOOtWwYWn_PjNuFXP5Gm_RHVIML4YmrVN63Ly7lqN5Yev1kdywokBMuN02Ji9VZhtdz22-KPeX8HYskN5ilV2R2pDl64yrrCiz5e9LCl9IaL1GheWcXV6PHt3xvmFqXVSqD6hRv_PhzAK4BgrzQX8rm-bM-P2YUAxQCjnHlEe-KcWAfKRiqg0Z616RUPQ7Pv-eHWr1lqHqh8bWLWOsTa0Wc9kzS58IMGxkxwEYto5EFW6coIJ3bKz5aQXRHZS3XFY3Rj7KQ-kpvsLCuEfZgDDuSVvRdVdz6vMzN8m4zwyOyW7EhAZ0Vbx-1a-Skpa6mm5C255KKSV4RYV5V1rt4USUvFlxlIorJbSb4-Z7OwyumyYBI1p6Ai7weJvxHoUyNgGU1pE8LPBPtlJEuskKz7Xo53CKM32QO-baoQil3qzPsKhFoQEDDgtG-VD2AeCb7Sp5cCmXOxxsj_RuK5NAd-F3Mjb1Fo-skOjgwirBNIso4-Z674JyI0gBzra2r5qgiPzQ0rhZDO9qsyZC8Rq48LO3dPjZ_Eexdm0LGWxeeoL--8WIKw6QnyhveRVRloS5LNnjENcjeB9SsotaLekmzg9-aA-IcxQy9OhbQXeyqE5xm3IDE1uLeEnr3Ok8yqYUIOpI8P6o5AO_kzQGJCSXxD5f3LNg_5VKH4nmxOo3zE2q2UmduNqD_HJJ2e6FSauIJgDb-fna60-BcNfzJDhhRCwlU8OnOfY22KjGnW0XZOXP40cqeWsjmoislMv9oEz9lFl8g0zKZi-10-wVuxSJES4Sp7VcNPZAnalb-TrT4NdlPUCVM0elg8elGS1O5m7iithYqXjQhk9yIbE10MEdvgkiQ9KabPTncVm86ANCA0ebx0400r7rp4Mb4kBuqU7mjpIG5ywVRlgmVxp4CQhaN2nv8-AjrZmc07zFU-rLeeEiQPUamEJKW5OLpWIv_EXn-x1_KnaV0WBXfZmAxWca22hPUPFitQrXkHf3XWEdn2FpM6BTqP-_B-sBPkP88G6BYtLHrwjViahwvkNKuscEYUCY8N_lsyVxoFj1u3D9fXDIAGMpO0pd_O0YRGMlBj_EqluW7nGGMccU2dHMwmc0H-q_v5qmfDqJbpMOic70ZgvUbhTp_gHt9-V1rekuh7n2mYLwCtCSvFrm0KYjE2o5sRIDJJeuyirX670WO6dtlv62JbxWq3SusLZedC_J8vujccW9TIR86zaIqeCKC7Zvv5z6LLfaAPq0i5LXGXUsKXUBK42m_lJpqQmHJ31GXLIfPSwkFNlr979dJcQr1lC_UEFhs0R_P3jda5o-Tjk9sOVO-_V6zVhW6JLlrYtaBoneu0DJ-1CAPKHxP2x-jXfWCaocNU6144u_gG0QWIE4PtXERdvAJZDaAU8DVmyCcsFWrPYk24Tb5dJk22JjCIJDnxIbB4yDkreC-SERHITSgFoeB7DZ7YbMTc7ltg6kSo1D8-at4pqF8U3EOFQ28LKK18h9ym4EpACwTQyLOjTPeBuR0DEox2NdJsckuxqtzh6Y50n_t-t9fhRBAPiGWsEzeBO8bJQPgjSMMLzSFIpJkig1-vNgGVI69AHDDZ6uiqJye07I3OI3gSBbOM_qeQ_5pK99s7wVJKlkNQWMiaRO8DYCuPxxjkxToymGhOWwYKmlvaD3NRbFELjmGGj21KIIaAEWab5rJH6Cey2cas_pReCkLO9Q3hsu1AV2CgjoIi0nqjBRCHg2BqLYu7drMZsTMdCKK6s1l1o2b0ai8WEJSOlbKG-uy0_guaKOQUujlk28VjfXHD1GsyXtBMtvsEdZyMRV-F7MhRin7KwXuFbDDHkxRzfSCXGI7BBsA72eQnkrVtec0H8389HKdOhsf6iiJRs-VzVz69Uh0DxjRpc9iD5kZVYuhF7zjNcnVrthNyFpyk33hsKX84jsl5NdNXPyBYLocIh83-CIf6F7sh4rMelailrc18wsUQd_g-l3GPKVwr1FzwiPwx6c65Q-HHfpB7lUlMw0Qq72Yvx1edozPemIWF7FZMFKjSc2T6mT39lqbD3pRKkzsyFhxO_pCPeGh_RjkDqUEBUs2WZmee3fhBd5ZB3BgSXtWyzALPl0pyE6SyobSDnbXRhNM8oOeFODcsoL8LcnNtLadCx5uyxTx4u3uqOF37-_llouU6NjGF2Ue0E4tKJA-IiGEKF8lhmDDlaBCgaEiSjegEDqD2WmTecasdnPunxGn0DqOLeonQzbRkTueFFLH_OrAHfSC5YHxlmenbL8VCOZNleGgk8BsSfynOoaW0-LH9oYr-v0wISLHLv-IT0L12_7MdpBeUuiUikIZjw3SCImwDdORWifkiG-y8_zQJQjQer-HRiwewN6Btgta93XOgkS_K_blL26YRKn_Rw7auXUt_Ydcd8gn00TKH8L6eD28Drm-9EzILrgG_D3UI8sVEuR2JdhCF8asByFNWeTZrzF_LqDXsv0sXSkiDnVxn8XBntTp8ssZPpcTjo-hKWcuyLVa3lRiAwNEQ4ODZoNfeF9oPHXsWbf6vEQ9_q8unAWVNHjrsxLZ0ta9YHqjbKD5aT1Kzs22RlgJJvciGWZjwOFc_fQW4i0A2NOuP2tq9qFr6ELxvc6tKCQDf0z9k3SxTsC7FA-lQOr6Dnet-SBRdLuOmAUkjh3gDWwiCRJYbhFMjMyQ9KhiBTY5MowFcDNeZPYDuuB3VJ0Y9WMgQmyJMa-i_9UdO1EEcxSXODojqn5hZRspc9Zd2itjhBGSStmBBUvutqu4IZfiOWkm6XxynfTTndBzAMu6iOtZrFmlV21Mu3UAnQYHHEXp6O1sWRG92Pmv5oQsplc6Esm6jfKrAQbnusbFZEmcpvwHApwVzT7FkNLG7VmzzIATSWDe4NAufmpfmJnsPiolxQlviwYQEtHJB765mhjOPb2mOoF0CBKRhYrBPzXPGsTTtC_RKAErLD3TybqTsC9okLSOTuqK3Ij4slnAK97ZUIBKDvs3oSbojSyuin8P1NFn17ojHoQTCwJgY-826DAoQTGSBA98ZggSWv3cHCe5HeYVBaf4AqTLl1mnGIEVF0aYvRX0KhyribFVIXH6m1kASwy3CcbZO-osgpawrSX_W6dKxXEw-sR2pxCE0L-VOhmm-wnguuX_zm167TeVXpv68XgzhUMcUJDAy_SH5sO-Li0wpzJupEk-MVm8gEFOl4ww9upbQnjJUhiGXG6LSiiVoRpTfr5bgbf9AvEszjz5HuU_AcEvhPdCdNsEH9YqSa40AgQc_cTmHyLAycJtI2Tjkq-DcPxTe6ubi20qReqgFYtj4VPHK7awGJbjMKYbHicVDACZmk1st-st2Q6jzT1j_IvY_rN42A9VByqTV_SKAIt0OKgBBHVuDNZvbLjJxEa8jIxsCp6LTOxoNtp0Y1DBTEzvyH2tX3trPTvfeOUiUzj4_Pp3UAaBO4-JILH-4M9Mq_ktDZzSX1YpAO9kGeVJSsduIHmP6rqAXLKq_WEKeTBNAvPP34ki8gHN-HYTsdS6ODres0zaJ_c0K16Bvepk5AGt5owN2yqbl7502TxE1L1Ks9HJBMxrubSmuVsdRy5b0PefMr-g_JUmrQLHl8fPPlvfUdNP9WvbUqdhStrIO3DUoUiShoKNXuuSjzKXyhpR3L8c4JaBlXXhGjFcSX3IC_HsOOYAnxaEQCcRgemtsfCo_yQTcNvFZ-E9SdBtGzxSCl0y0BVs_g8ARHpAxwazJxLrLgPIv4xq3ZGkS_Fj_PngXgwSVW6IObh0oJ0UW8dIgwuXhBJyDeqlMej055bSXuQ4sxF9JGS-MatSpSHq2H5ov3VEDzMHQAsKW40LnOtJLAHWx_FM_PSmz_fnP84iDVRMcx5yq4rcXb2XfqsernHVInyf9upgr8Sw4eJXiDAAH62tHDK_e9AcNd3vNl2iJSxtjUFNLzz2GexIUjeE-dDpRgr7O9MLNY2HEDkbLgOPsoIZFmTxhgv-VwLyEBZSBjRxJEIOnyp7bEDQkvjp6VZbZPprvYhlVu5eubJDmy17wrOHiNdOoXzQg47dulHlEPp6K7JG3lwvQIxsVa4hp6sdeIzDdCSs4KzDFFZHcc9Ww4rErncyiG1nvCXyHxk3VzZztx8caVogmzO6njzXMQyv6inCyJyhFu0vhPQw4B8UTCAsXDaaALkXorA5ziRhhvfJkyYOFs4kH0RHsXwvEYGHZ1ZhFrpeMEs8Cf4pLfyrKD4rp1IBnwuyyF5viEKJTy3GjthqftuCfmbIG4uzOunDRpbOPoZsSMDsJal5MjUxzQUGalvmyOSBhhvArfyiXXMWcn_o8T64naFPu9U8K_h7GvsN6An_sfIBU51fQnZEDWNmdxg4fC4H1txpGQdFcxPE1I4KAi_FdnnBdMxaIXo1SNMR9vj6vXZ-WsH36aDdWWQaoa5E_cKMG5DpJqPA6WXWWVgRM8rbFxKIBasAlyfcCrL2V7joVrX8Sn85BSOWu1LfBY2WcVGd_v2ImMcf4gNwSlp4rU7gchB0Fu5teVu12yUjyW3k9YsRCJUpAcP5USOlX43QtP8NbDe8Sn8hbmdB8_hA9kOeibRze_-DfEyD_yk55zLuggClEdj5VR1ee4quP2IKkAQqzTuoVj4YiF1NeBdoW885UoqOu1iQJjxaPp425FoSvZTrBJQ-pNifG8f9ih9mGH49bZoPRLF6wSEKDpno2oDq0XJB4LOufMh1sfuWQrelYOHIVmbRWRvvcspTGTK5ELlKv_YmyeXBk7khHm0APbXiWgtQhPjEaPV8Kutgcz9gzG395D8H_Dzc4O5cNGoT6jvi1oLVHk9ELyGpkRBPa6g-MjLJUfF_DfdY-tP2f6GXuXAVoWVSvbESGp35BcXp4uqhJpmZ6-aWiYwUVfkPHK0D0yTxbj9zjzb1d_mAjNw-Er4WuTtj6ZBaCtxf6McQOI4M5CVoNFOEUuDRX-0cRI7k8qTsAhpVLPTtM7Ol3jUW3EGyEAXD3meL6vcjSLZbEt80MUG8SnObPOEuReLJehy_IGXUP_Qppz6F8BftYfWES5DdhzHsSKNjXEkrDfVfcJWjmVI42p07lqzNwZyuTWwUrFrfRPvZHbzSCDX7F8blgfyqlOyeRBCSuToHanI-K8Mh4FA9FtRwvrzevT_C-Xn4XnH8xZHisA0chPVrM2BYrgMh9OfISG3l2ulEYGy7y6_Qcte5lBAI3ggyM8kf2_38Qb8eDt0JxG4FgjiHW-QbomeyQYfAIiAT-D5SxpTBTbvl8LyD1DfhduKT7hyYwZlM4gxNXNWh5T7dCA=s1618-w1214-h1618-no?authuser=0" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software engineer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'> {text} </span>
                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <button className='heroButton'>Experience</button>
                <Link href='#experience'>
                </Link>
                <Link href='#skills'>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    )
}