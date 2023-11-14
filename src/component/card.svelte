<script lang="ts">

export let img: string;
export let title: string;

</script>

<div class="card" style="background-image: url({img});">
    <div class="card__container">
        <div class="card__content">
            <div class="card__text">
                <p>{title}</p>
                <div><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.44653 21.875L23.1132 0.75M23.1132 0.75V21.03M23.1132 0.75H2.3132" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="separator"></div>
        </div>
    </div>
</div>

<style lang="scss">
.card {
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        height: 30rem;
        flex: 1;
        border-radius: 15px;
        cursor: pointer;
        transition: background-size ease .7s;
        &:hover {
            background-size: 120%;
            .separator {
                width: 100%;
            }
        }
    }
    .card__container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.438);
        border-radius: 15px;
        justify-content: flex-end;
        
    }
    .card__text {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & p {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2rem;
        }
    }
    .card__content {
        padding: 15px;
    }
    .separator {
        height: 2px;
        width: 0%;
        transition: width ease .7s;
        background-color: white;
    }
</style>