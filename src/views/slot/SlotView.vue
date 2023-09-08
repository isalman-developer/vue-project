<script setup>
import { ref } from 'vue';
import CommonFieldsSlot from '../../components/slot/commonfieldsslot.vue';
import NamedSlots from '../../components/slot/NamedSlots.vue';

const person = ref({
    name: "Abc",
    dob: "07/051998",
    famileNames: {
        fatherName: "Xxx",
        motherName: "Zzz"
    }
});

const car = ref({
    name: "Toyota Grande",
    made: "2022",
    modes: ["Sports", "Cruise", "Normal"]
});

</script>

<template>
    <div>
        <h2>Slots</h2>
        <ul>
            <li>
                can be used for rendering dynamic html.
            </li>
            <li>
                Suppose there is a component where some data fields are common but
                few are different ==>==> we have 2 data sets. (1) Person and (2) Car.
                <div class="d-flex">
                    <p>
                        fields of a person are
                    </p>
                    <ul>
                        <li>Name</li>
                        <li>Date of birth</li>
                        <li>Family Names is an object, {fatherName: "Xxx", motherName: "Zzzz"}</li>
                    </ul>

                    <p>
                        fields of a cars are
                    </p>
                    <ul>
                        <li>Name</li>
                        <li>Made</li>
                        <li>Modes, which is an array of ['Sport', 'Cruise', 'Normal']</li>
                    </ul>
                </div>
            </li>
            <li>
                so for name and (dob, made) there is no confusion. but rendering occupation we need a loop but for origin we
                dont
                need loop so we will use slot for these occupation and origin. for name and (dob, made) we will define props
                because there structure is similar.
            </li>
        </ul>
        <div style="display: flex; justify-content: space-evenly; margin-top: 20px;">
            <CommonFieldsSlot :name="person.name" :date="person.dob">
                <h4>Family Member:</h4>
                <ul>
                    <li v-for="name in person.famileNames" :key="name">
                        {{ name }}
                    </li>
                </ul>
            </CommonFieldsSlot>

            <CommonFieldsSlot :name="car.name" :date="car.dob">
                <h4>Supported Modes are :
                    <span v-for="(mode, index) in car.modes" :key="mode">
                        {{ mode }}
                        <span v-if="index < car.modes.length - 1">, </span>
                    </span>
                </h4>
            </CommonFieldsSlot>
        </div>

        <div style="margin-top: 10px;">
            <strong>
                What if we want to define multiple slots so we will name them and then we will call each slot and render our
                dynamic HTML.
            </strong>

            <div class="d-flex">
                <NamedSlots>
                    <template #FirstSlot>
                        First slot
                        <p>
                            in target/child component you have define slots with name tag and give each slot a unique
                        </p>
                    </template>
                    <template #SecondSlot>
                        Second slot
                        <p>
                            in parent component you have to import and initilize the slots
                        </p>
                    </template>
                    <template #ThirdSlot>
                            Third slot
                            <p>
                                so inside the initialized slots you have to define a <br> &lttemplate #nameOfTheSlot> your code &lt/template>
                            </p>
                    </template>

                </NamedSlots>
            </div>
        </div>
    </div>
</template>

<style>
.d-flex {
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0px;
}

strong {
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
}
</style>