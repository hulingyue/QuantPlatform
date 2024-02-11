 <template>
    <el-menu 
        :default-active="activeIndex"
        class="header-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">

        <el-menu-item index="/">
            <img style="height: 60px;" src="/logo.jpg" alt="logo">
        </el-menu-item>
        <el-sub-menu index="/exchange">
            <template #title>数字货币</template>
            <el-menu-item index="/Bybit">
                <img class="exchange_logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACAAIAMBEQACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAABQIEB//EACcQAAECBQQABwEAAAAAAAAAAAECAwAEBRESBhMhMRQVI0FTYYFS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAMC/8QAIBEBAAIBAgcAAAAAAAAAAAAAAAECAxESITEyQVGhsf/aAAwDAQACEQMRAD8Aw2AIAgCAY0ahz9aL/l7bJEugLdW9MNspQCoJF1LUBySB+wF9OitRKUAKaoXd2blxAG5vbOF72y3OLd2565gJPaOqcq26Z3YZUG0rZUJhpbTt3Q0fVSrBOKib3PFubRHJm2ZKU06tfUTKlabq2t4Lq5RZ6gzng6mhluYxCihuYbdxB6vgo2PvY+1osmaaJ1WrSr866mWde8U0lu7UxsqRZaV3CsT/ADbrowFlGuHwsKMkjHz8VrbS4QjL4wLcD7gIaw1tM6kWkIl/DNbGy5m5vOOp3C4AVlI4CjwABb7vGLY62tW0xxjl8ai0xExHco1NWDXq3MVNTAYLwR6YVlbFAT3+RtkrgCAIAgP/2Q==" alt="Bybit">
                <el-txt class="mx-2">Bybit</el-txt>
            </el-menu-item>
            <el-menu-item index="/Binance">
                <img class="exchange_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABz0lEQVRYhc2Xu07DMBRAT5kYMJ/B6Bl1QEyGwlTB2C9BKggof8II6sbDAwNCFbNHPqPuwMiADca14yQthbs0TRyfk+vrOIYFwmp5brW8XKSPziJw4NT9HQllhisTiOA+Wkk0FsjAW0s0EijAW0nUFqgJbyxRS6AhvJFEUaAAf3C/+20lKgVqwPvueNxWIitgtTwBrqrgQpl313a9IDEUyoxSF9ZyAsATMC3BAdxxn+8hCWPq+kpGaQi2gUdgMweP2seZmAI9ocwkx/iRAavlwHUCgFDmFdhzHc3BrZZdq+VO0D7MxBzcarlutRyEzE5w0RdcCiSBtxgO3LuH6AllXqJMbAllTHTuFjggKMxOBPdRSrWH+6GZxRJR+xDuYySUGXYqplpSIgH3MQMOhTLPNeBfElWzYCXx50OwBiCUOQMucnCrpYxmxwTo8Vnpc3BX7TJo/w4cAXch/CsDwY0D4CaC+3fBJCHWDYTCpx0DXRLTEDgWylz7c6UXUZzqpb+IqtaCXLXnZkduPaisj6pZsJuA4wDjsCYKi9GG6ysZ/3c5biBBW3gtgRoSuVjOJ1lLieV+lDaU+J3P8poSv7sxKUisZmuWkWi9OV0olrE9/wBl8DK1Q4YlIgAAAABJRU5ErkJggg==" alt="Binance">
                <el-txt class="mx-2">Binance</el-txt>
            </el-menu-item>
            <el-menu-item index="/Okex">
                <img class="exchange_logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACAAIAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAHBAD/xAAiEAACAgICAgMBAQAAAAAAAAABAgMEBREABiFBEjFhBxT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AEYIZbM8cFeJ5ZpWCRxxqWZ2J0AAPsk+uXZLAZrFQLPlMRkKULN8Fks1XjUtonW2A86B8fnN1q/Fiux4rI2FdoalyGeRYwCxVHDEDevOhxm7Jn6v9lpR9c6vHNVuVpBed8iAkZjUFCAULH5bkX1rQPngDONwGaysDT4vEZC7CrfBpK1V5FDaB0SoPnRHj95DPDLWnkgsRPFNExSSORSrIwOiCD9EH1xz61nqv8apydd7RHNauWZP9yPjgHjEbAIAS5U/LcbetaI88Guy34sr2PK5GurrDbuTTxrIAGCu5YA6350eButUIsr2LFY6wzrDbuQwSNGQGCu4Ukb96PGXseArfxqlH2PrEs1q5ZkFF0yJDxiNgXJAQIfluNfetE+OBkE0taeOevK8U0TB45I2KsjA7BBH0QffLsln81lYFgymXyF2FW+ax2bTyKG0RvTE+dE+f3gMvW8BW/s1OTsXZ5ZqtytJ/hRMcQkZjUBwSHDn5bkb3rQHjg12WhFiuxZXHV2doalyaCNpCCxVHKgnXvQ5sbn81ioGgxeXyFKFm+bR1rTxqW0BvSkedAefzkM80tmeSexK8s0rF5JJGLM7E7JJP2SffA//Z" alt="Okex">
                <el-txt class="mx-2">Okex</el-txt>
            </el-menu-item>
            <el-menu-item index="/HTX">
                <img class="exchange_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEVHcEwAAD0AAD4AAD4AQn8AAD4AAD4AAD4AAD0AAD4AAD4AAD4AAD4AjNYAjNYAjNYAjNUAjNYAAD0AjNYAjNYAi9UAjNbGyZeWAAAAF3RSTlMAg0X/D7TLLDSc9OFbzGj/TJdPqLov715MXJwAAADASURBVHgBfdLrDsMgCIbh12K7Uy073/+lTqfJyEp4fhPhQ/iTJmJJMqFZFkKLyIGIiMwEjlIROEkVBZEmxQ9EQxwkLuDcC07gu0i34ltkALK75CEBZXN+abhQqV7dAE0GbqrqDdjcgazVA2sSMRGLNlizHWDTrw3DDtAa7HqYhDy1K/xk6ahe6hRgJnwEBWvf0XDbpziaDn+7vEszjYydcwrJFmzOOS+mRXF/8zfkm51kexQc03ii6PuKb537rjE+j2wLK6TivmkAAAAASUVORK5CYII=" alt="HTX">
                <el-txt class="mx-2">HTX</el-txt>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/future">
            <template #title>期货/现货</template>
            <el-menu-item index="/SGE">
                <img class="exchange_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAuCAYAAACBHPFSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzZBRjM1ODg0RTFDMTFFNkI0MDY4MEUyMzQ4NkUyQ0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzZBRjM1ODk0RTFDMTFFNkI0MDY4MEUyMzQ4NkUyQ0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNkFGMzU4NjRFMUMxMUU2QjQwNjgwRTIzNDg2RTJDQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNkFGMzU4NzRFMUMxMUU2QjQwNjgwRTIzNDg2RTJDQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk6UF/sAABKQSURBVGhDzZkJkGVleYbfs93bew/Ts6nDAAIzw7BJWFWKIOiIDBgEU2UpwQokgIUmyqZRK2WlSi2LksRoYmnigmAkkVV2UdmVhDDsTAOyb8NA9/RMT/ddzpbn/e8YWYa2tEhV/q7T99xz/vP/3/J+7/d950aTD/xb/dITV6mbT6uZ9MujUsn/RGldqY5SFXyv+R7xF6ujuE6ZE3OvDvPfyOE9oqpSlSBDHSupIj4K1XVDikv2rRR1YmUDw2rMX6H5yz+s6Jk7/74eXbBKE/dcqC2zzyhqNNVIGioqHmRBJFWcsDgLewNfK2srybUoDp9v5KgxXJJ4l0xVzp5JpRxjJVFDcc6+5Yz6RpdpZNWH9PBVX9eC5Yco3vjri9Xe+JQWHPhJ9Y3trKjYoqLoWbuMOzgkRwEWt9wxdoi6wQNR/MYr4JFitEp4ukSBGBRgqAbXIoTPqwllC5dr/r6n6uk7r9UjN12hxvB2ihvZdlq/7gLNTqzVkoM+qebivVTmmxC8UFYOoX2GBiiSxHgnxRO2SqwIV/9fjG6K5zFaUiZ85hwlcC7U7WzRvDcfrCX7nqEnbrtUv/75uUpGEK3CQ3WUqIkiL9z1PbWeulvLDviChrZ/tzrFRiV1RymTABXWz7FQoiTu6+EUS73xwwpgpjJX3chBAgYj7PIcBZa9R0v2OUNP/vICPXrdlzU8ME9NIyQqUQKcdJqz6iNQJtd+S9NP3Kgd9j9b83dco+n6BRXZNJbvY2E2iDoq8RCP4pnetm/kME1kKKEsUjsqhB9UdFsa2+EobX/QWXry1n/VI9f8nfqBUBQ5Qv1QqjiGfdIi44Fa5UC/1t/7TU0+daWWHHCW3rzTCZoup9QtJhV3eaSYVVm2wGYbpWZVETu9ow2GW6p9XnLu7+HocK137udefi1c91yO8NzW63nNvLxQYxZduhs0svwoveWAs/XYrT/Quus+r6S/gdyRuhixFQwJa45fenSd1AkBhBuBeVV08Wqm7fc5QSM7Hqdnx7+j6Sev10CyBDi1eQTrcNZBpwbPwXdAgLjBgnnSDecJVipgGYDNfSxVmK6xQcKTEEPJcxGuzPCuQVmlBTHGBJ41eVcmjW5Ho0vfpbE9P6rHb/+u1l12JndYPwXe9hZxOfvSpA446TxF61AiDoHKcghm3HexRLPR0KK9TwGLqzW7+UmVrQklKcIWUGzC5uzTYF6RWfOUHDOksq9UlnOfmxHRWcMqIBqloMuqqTIyNLGkGigzi8JNpVBfbuIwA0EeXtjxZ5LtG91JT95xvsYvPV1Vdxr6H+Aq8ciyXrvz4oT2Oxklxi87xo/3tHNSYyFSgvIi19DQUu10+Dna8Njtuv/Kv9FgNsIeWIrEk5SwRurFCKykqf2OP0/dLRt0/8WfYA0Yg9WiOkNw1iRJZUWslma1zzHfVnNwO6295FRFs5tUZ1B5OUBWgDgSKB2D5Js3a+WffAlP7KnbvnE4wj4CjQ5B8ZaRPbcq0UaJ/VEire1GDgdKbXhAaWnsLEnerlocM2pNPaWJ8bWaHRpU3pgBHqkabGZY2XdqxOq2J/HYBm145BbQOICVwbp3DLnFybaBh7vKZ9YrBVsTD9+kGtqsOI9LPAzMjO8YiHWmC01PPabBRTtwvQUMYVAMUSJnvA1GiSNiwWVGBZzQA4XsCZRCgiq1qcng0YD6+qS+5qD60xE1+VL39ylt9qvRN6qsCVvgnTRJOe9To9lUxvWoMU9pY6EaGXNcJgDRCOapmNfEsp7TaIzwST7qmxfWyYbmqcLoWZwpg3lc7hDHyIdvgeK2BjbnH7JWuL2nCHi2RQiutCh7PE1wdpjTrbZgkVG9aeWxGtv53Vh0gAAmKMMqPAsDJViqMh4pX5augNt3fY+ybDh41bAtgEEeXJRwjTyUNrXgre/U9qvWKEGZHIZKedyx0g2YRBripAKiZdT2g68Zsfnf/rbQXtuud7nn+qiGXUr4GkIDPtyDBuORBdrtmK9q1yM+DU5JftBuXPpJ2KnRB2ulENZ0EHzXo76slR/8ktREiRbMwh5JSfEG/l221JCEokHttPrT2u24rxErC5R3ZtnPgjhbO/kRV1xx7NkjPOB/rxjAyYzADUdLD08cSOwYqfq4hQuhxjBwb85cigDyBt+hTstfY7Xa7sTETZ6tOM8dC2T1nGQVE7AxEKpgIUc8qzPICwRqREzkXdZnLqZjXuYQZQ/W44or2Dzt2G/EYtNXwtMvHyjrctua9jQMge6dXAazlKmvJvBcBKZAx0HfWxwBOGL+IqjSgQncA7P5cVIoJ12sZ2saYsCV+zETTLHmeYCFtL1K1ZTqgi8BYsGMKA33BxJJWT9ijRKFelK+chh1rztyAiJQKOc1uSFH6ArFYqjTn92qiwxsmnOYok0K7FIjqCk1tdVLKNTgBh4VFq+ojGMsEgLVQev/3Cup03KOds9NrMPaCXHkJMyaLtVssG2NbV/dOiLXSwhLfU5s+ApWMc25TGblmGALGzS2ILhZh2usGGH1TtpWCwkzNyNxGw8Q68RLSQwEPBkBrGXHu/RJYKMUuGRblUiJnUaJB1C6qrskWrzGg68F0+9QArtiCYRw/gD8LhIcNp18SiOLdtN+Hzpfbz/5Ku1zwqUanr8jHjGXE7QEvJuacstmNect0F7Hf0cHnHqlDmTu6JK9UZg6i/UjjGJAdombtH9Me37w6zr4Y1frHaf8RIuXvxciqfFME8MAV6wVEZPbGnMq4btuC10e2EKGUJvSowSv6cCo5q84RAtXHgmNvhemGgBNXWDAROMY5slyrJcOaeFbD9ei3ddobPfVagyOqES4YFXKi5JcVIVKNNH8nQ/U/FXv0+K9jlZzu6UqKA5hHgwItJzLQhy9dmxbta0jMYZgpjKlesUZzWxMeukJrbvgJKWUDpVjAVeX/YPa76hvEIBkVvoPGgDVA4OamV6v56/4jCYfvxnokcEo4/c49hxllCkR3k2wcNl9UQ//7G/19C+/hnIUjGTnzpYp7bH6s3h7FwQs1AINTSMCGLtme/WY0xNlGviJDe16vmcUh1RAGx+/Xevvu1zPPXStJsd/oU33Xq92jaIQeQcyKPhMYZoujdXGx/9LE3f/Si8+cr2ef+AGzcxMIShlBsMxRY7Vlifu1dS912jjup/quQd+qo3Mn974vLoUl44LM1lF8FR/CDtFMBPkiAXRAmTUOfW/UZy5rBjWEJDS4DwgMso8NvMz3C/c6LOprZ0ODIQ2sjEwX32DlCnESu184blQNlGmBCimA0OUMMOK6WkyYj+iHitD8If3KszGE68j7pxKQKb+p2x0oebtcqAWL3uHFi57p0Z3fqf6F+8ORvsDO/nFQQ1ujdgUf7uIq4BOOjSm5sK9aDUHA6MVGKMCnk6MOTGQm5rw7sjS3TWy62rNW75ay1YQYysO08jQzmp0+wLN23AmFWdwq/PqMacSsTFaFlq8Yo0OOf127X/aNTrolOv19lOv0R7vOTMUgLk7MlaGJdmGUoV+wg1QDoMNL9hFK99xokbGtlfRmSKpEZwuN7BuA9emND5ZPKS3Hvwp7X/SxRwXab+P/rv2/+ufa2zVoShNlUv16nddJYZy+fF7wgl2AYsxi3Q2PacND16j5x+8mhL6FiiSxNVYQDHnBdzQJMFCtZOEve6dQtZzt9dUF89EoQJ19iYRumlyXrHvarpFKLkqO5p49CZtGL9a6x+4Ru3Nz4ZkWbqixkLOM7H/bWPMoURNwqKSzAa0HgVuOOdI3XruGt33w4+oS9+QGr9QJAjfOh0L2924weWBB8U0enSZQQOFJU3RGezlksXEV5Dg8rifvnlY3ZkJ3f3DE3XzOWv0i68eqRfuvoKnaQFcFVMh1F7/daSd0xOpayaCy8Vb/3AMd5PE4PnaRaMLMiztKrhyICNkwGx4cxie5h7XUNQ87gBOec5Qwj/BWdQb3Le1WRdlmiS8QfYZdmmVDalLTqooX1w3uN0NBWTvyVeMOZRwwMIqCNKg7EBKajyswq7O4hbGjX0d9WFRV6FFeHHgFwlRuG6qRR0E9NtECnTmmLlcwpCFWTwrtrA+SMcYTmT2YIHR3OhVqRMnsM04AkOhc97jqVePOZTAuglQwLoGjV/wGu7GgYvCiFwQB4h0ERoRSVJFwoY8Z+VjFHKseIteqU7Qo0wHYXP33QFW/RjA9oHJ8GAk2keryzWL67ckPo8wUBCVvGK5Xj3mUILhNwFOlD3qYbUqQMLx6zcaxnqCcH7lU/PdzVRwN5Yzj6RW1ld4hoo7zO1nrkVN4jx0hRYhtkKuucxEGCTshXdccVR8Dz2/L6G813v1mFMJl9e2oqkBo7MAocl5m5Vs5YrN3W4Kt3vxJNRZ7ok9b0Yt4GGC7LWwzOd6jFXdCdaGKMK5c7QPCs5dDcS+/gpjM3fr2euNOZRAeyBSIaSZzbo4vxoCGUejbglmZOARJzEHOYf9b0NSPMEsw6Hn9lqsFO6XUYbAwBOqoXK3wfmkZTVL8UxpL27L3HOMOZQws7gBYlGXHczMGvNUTz2v8UtO1robz1GrSy/t3w0QzC8LIizvmKjSBg3QRo1feYbWXXm26laLum4gBLiBkdBv2GN+xxuTbB674Su6/+JTVcw8p6RvMCj2+4w54RS8QDykgav5jmfKdlfr772Rgu5mxOkgOMFmDkd8lxo2fJxRXtPFTYzfohfGfwZxzUDTPWiayQoHOfiMzD5FiyR3mzbcf72K1ixuQdE/zBOvpzqCOVEVbNwmmPMJKtMJtcspvk+pbM2o09lESTERYsIU2qURqrhWtjZqls828zvcL1ptdWcpYwhgE0Kns6V3DY95Trs7pXx2o+r2JtEjkcFhRlBQB2Z6rXwvvxKtu/T9fHc66iWvyvmAb3XeUnNoqZYd8Q+aeGKtHvrJ59Skao1CrfGbHhlsY80EcO/z4fNUksnvvuT0nje4X5ofmZvg0RLyr6vNettx3ySpzdddl5yG0LN4zQKhnO0Z4g//tia18v1f1DBd4G3/dKja6x8OWb0X4gASAU0OrYlJ7XvK9xU9dNlR9PX+wbGNKn7P5KamQ8nfp8X7flzD279LmzaMk5RgJeDkxtOBbuHBiNmUK25wetm0cF3kTcJ+fiFnSMJrGKhmh9TsA5Scpe1nU3bllxFW2OZDCXctXYh4dMkKPX3HBbrv8tOFixWn5BXmee2+ItemqU3a+9TvocTFH6hjkpTfE9VuQ2kJ/UPfogPO0tibDtND135eG+65PBiqIsFZ4PCDi998uKMJwmAdCju/HHNUEuNcscUsprHPBZQhnsM533qCY4ReOcEc/lxGOiFaDUN2xz3/VCvWfFG/vus7euQ/Pg4KmpT1GIk20y++pyY36O0n/gAlLvlA7RrfPy2lHYTIZ7TooE9o3tIjdf9lH9djN39bWTqIkrkgV+WWJKX3LdnMkEJwv/nwq8vAUBggOMHB7nOuIzJOA2Oc/ub9ljXpvcT2z7uc+1k+qXEJfBuEZNgutNPBJwPBb+nx2/9FD150uhoNyCMaxFOJZoMS31XyseNXfKHCso0uzFFu0lv2+ys1l/yx7v7xX+iZX52nwcaoyga1DvCqYKpqAH6PaXKoLMNbDVpNHylz/IlbcTvn0Kzf5sUUcf5hJLAODVDEdx/hmj1BKZHQKbpVZRH28XopfWKqBi3e5Pitak0+qBWrP6NsYIGev+9K2oAh8kpH2tzRkv2PRWGokLBTkaPAPp9SY2xf3fOjP9NT/3mh6sFhdZq9X3lQAXORN3K/jfPbOUeHCaH32sUvt4z/HkkY38Z6yAo8h3L/O9fWD5VRuBc5sm0cX3OtxV7UAezm/xhseDs9t/bHWvv947XwbUdq1dFf0ez0i+oQ2CV6VyCIRpGF6bqW/NFpqoZ20H9f8BFN3nkd/fNCqlfwHoo7KLZ2F1ao6dcwNEXKjF8LZKgY97/5DIhHOFOjs3TvsHA+fDtMcTzxjJmp8nqchThjzaIG+y4RXChmHH1jWn/fVXrw/JO0YPn7tPeRn1M5M01XyWNlrrhNInrLHn/OUtDej07WS4/eSmM/SBBT2G0NYOpUFvfLXHrehhMVUoQ6vydQ7/0tnzCL6ysu+AvPmpmYEwKXT1Yw7n/7ufUei5jB3O0FRgs+wE94JitcDWCU4fkhwd510V9q/s6HadURZ6g17W0w8vq7/pF8slAPXP1ZdTY+Cx9TCligsIWh0JOpxylszyYOZLNNuMTM1xu+/du7r/z26hHuhjUxQhiWgq/2dvAY30mURWezBsd2065HfE7P3nGhFu32bkWP3nxu/dgN/6wSSDnAAqaxio3iuun/0wiGxNtd0NM3uJ2W7HmMdjr0TP0P9kQvG3xjH7sAAAAASUVORK5CYII=" alt="SGE">
                <el-txt class="mx-2">上海黄金交易所</el-txt>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/stock">
            <template #title>股票</template>
            <!-- <el-menu-item index="3-1"><el-button text="true"></el-button></el-menu-item> -->
        </el-sub-menu>
        <div class="flex-grow"></div>

        <el-switch @click="toggleDark()" v-model="value1" :active-action-icon="Sunny" :inactive-action-icon="Moon"></el-switch>
        <div class="avater">
            <el-avater>未登录</el-avater>
        </div>
    </el-menu>
 </template>

 <script setup lang="ts">
import { ref } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import router from './../../router'

const isDark = ref(useDark())
const toggleDark = useToggle(isDark)

const activeIndex = ref('1')
const value1 = ref(true)

const handleSelect = (_key: string, keyPath: string[]) => {
    let full_path: string = "";
    for (let path of keyPath) {
        full_path = full_path + path;
    }
    router.push(full_path);
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu {
    width: 100%;
    height: 60px;
}

.el-switch, .avater {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}

.avater:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.exchange_logo {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
</style>